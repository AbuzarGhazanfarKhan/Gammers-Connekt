import React, { useState } from "react";
import useFetch from "../customHooks/useFetch";
import { useNavigate } from "react-router-dom";

// import { encode } from "base64-arraybuffer";

function Store() {
  const { data, isPending, error } = useFetch(
    `https://game-distribution-web.herokuapp.com/get-games-filter-public?limit=12`
  );
  // const image = decode(data.images.data[0])
  const navigate = useNavigate();
  const [seacrh, setSearch] = useState("");

  return (
    <div>
      <div className="search">
        <h1>Search</h1>
        <input
          type="search"
          name="search"
          id="seacrh"
          placeholder="Seacrh Here..."
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button>Search</button>
      </div>

      {error && <div> {error} </div>}
      {isPending && (
        <div>
          {" "}
          <h1 className="loading">Loading.....</h1>{" "}
        </div>
      )}

      <div className="product_listing">
        {data
          // eslint-disable-next-line
          .filter((value) => {
            if (seacrh === "") {
              return value;
            } else if (
              value.name.toLowerCase().includes(seacrh.toLowerCase())
            ) {
              return value;
            }
          })
          .map((games) => {
            return (
              <div
                className="box"
                key={games._id}
                onClick={() => {
                  navigate(`/product/${games.name}`);
                }}
              >
                <img
                  src={`data:image/jpeg;base64,${games.images}`}
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
