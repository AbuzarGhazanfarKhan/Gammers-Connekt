import React from "react";
import { useParams } from "react-router-dom";
import useDetails from "../customHooks/useDetails";

function ProductDetails() {
  const { gamename } = useParams();
  const { data, isPending, error } = useDetails(
    `https://game-distribution-web.herokuapp.com/get-games-filter-public?name=${gamename}`
  );

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
        {/* {console.log(error)} */}
        {data && (
          <div>
            {/* {console.log(data)} */}
            <h1>{data.name}</h1>
            <h2>${data.cost}</h2>
            <div className="product_images">
              <div className="Cover_picture">
                <img
                  src={`data:image/jpeg;base64,${data.images[0]}`}
                  alt={data.name}
                />
              </div>
              <div className="sec1_picture">
                <img
                  src={`data:image/jpeg;base64,${data.images[1]}`}
                  alt={data.name}
                />
              </div>
              <div className="sec2_picture">
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
