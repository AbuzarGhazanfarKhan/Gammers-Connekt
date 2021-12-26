import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useDetails from "../customHooks/useDetails";
import Cookies from "js-cookie";

function ProductDetails() {
  const [gameId, setGameId] = useState("");
  const { gamename } = useParams();
  const [iderror, setIdError] = useState([]);
  const [status, setStatus] = useState([]);

  const { data, isPending, error } = useDetails(
    `https://game-distribution-web.herokuapp.com/get-games-filter-public?name=${gamename}`
  );
  const token = Cookies.get("token");

  async function newRegistration() {
    let fetchUser = await fetch(
      `https://game-distribution-web.herokuapp.com/checkout/${parseInt(
        data.id
      )}`,
      {
        method: "Post",
        headers: {
          "content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify({
          success_url: "https://compassionate-agnesi-be9563.netlify.app/",
          cancel_url: `https://compassionate-agnesi-be9563.netlify.app/product/${data.name}`,
        }),
      }
    );
    fetchUser = await fetchUser.json();
    if (fetchUser.error) {
      setIdError(Object.values(fetchUser.error));
    }

    if (fetchUser.status) {
      setStatus(fetchUser.status);
    }
  }

  let handleclick = () => {
    newRegistration();
  };

  return (
    <div className="product_details">
      <div className="product_details_box">
        {isPending && (
          <div>
            {" "}
            <h1> Loading... </h1>{" "}
          </div>
        )}
        {error && <div>{error}</div>}

        {
          <center>
            <div>
              {<div style={{ BackgroundColor: "#FFBFB2" }}>{iderror}</div>}
            </div>
          </center>
        }

        {status ? (
          <div>
            <div style={{ backgroundColor: "#4BB543" }}>{status}</div>
          </div>
        ) : null}

        {/* {console.log(error)} */}
        {data && (
          <div className="product_details">
            {/* {console.log(data)} */}
            <h1 style={{ color: "rgb(138, 111, 138)", fontSize: "4rem" }}>
              {data.name}
            </h1>
            <div className="product_main_details">
              <div className="Cover_picture">
                <img
                  src={`data:image/jpeg;base64,${data.images[0]}`}
                  alt={data.name}
                />
              </div>
              <div className="product_info">
                <div
                  style={{
                    display: "flex",
                    background: "rgba(255, 255, 255, 0.318)",
                    border: "2px solid #9f8cdb7a ",
                    borderRadius: "5px",
                  }}
                >
                  <h1 style={{ margin: "2rem" }}> Name: {data.name}</h1>
                  <h1 style={{ margin: "2rem" }}> Cost: ${data.cost}</h1>
                </div>
                <p> {data.description} </p>
                <div>
                  <button type="submit" onClick={handleclick}>
                    Buy {data.name} Now
                  </button>
                </div>
              </div>
            </div>
            <div className="product_images">
              <div className="sec_picture">
                <img
                  src={`data:image/jpeg;base64,${data.images[1]}`}
                  alt={data.name}
                />
              </div>
              <div className="sec_picture">
                <img
                  src={`data:image/jpeg;base64,${data.images[2]}`}
                  alt={data.name}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductDetails;
