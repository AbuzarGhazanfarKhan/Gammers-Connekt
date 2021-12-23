import React from "react";
import useFetch from "../customHooks/useFetch";
import { useNavigate } from "react-router-dom";

// import { encode } from "base64-arraybuffer";

function Store() {
  const { data, isPending, error } = useFetch(
    `http://game-distribution-web.herokuapp.com/get-games-filter-public?limit=12`
  );
  // const image = decode(data.images.data[0])
  const navigate = useNavigate();

  return (
    <div>
      <div className="search">
        <h1>Search</h1>
        <input type="search" name="search" id="seacrh" />
        <button>Search</button>
      </div>

      {error && <div> {error} </div>}
      {isPending && (
        <div>
          {" "}
          <h1>Loading.....</h1>{" "}
        </div>
      )}

      <div className="product_listing">
        {data.map((games) => {
          return (
            <div
              className="box"
              key={games._id}
              onClick={() => {
                navigate(`/product/${games.name}`);
              }}
            >
              <img
                src={`data:image/jpeg;base64,${games.images[0]}`}
                alt={games.name}
                // `data:image/jpeg;base64,${games.images[0].data.toString()}`
              />
              {console.log(games.images)}
              <h4>{games.name}</h4>
              <h4>${games.cost}</h4>
              {/* <Link to={`/product/${games.name}`}>
                <button
                  type="submit"
                  onClick={() => {
                    console.log(games.name);
                  }}
                >
                  Buy Now
                </button>
              </Link> */}

              <button type="submit">Buy Now</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Store;
