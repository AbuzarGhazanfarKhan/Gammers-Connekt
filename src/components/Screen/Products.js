import React from "react";
import { Link } from "react-router-dom";
// import { encode } from "base64-arraybuffer";

function Products({ product }) {
  return (
    <div>
      <div className="product_listing">
        {product.map((games) => {
          return (
            <Link
              to={`product/${games.name}`}
              className="links"
              key={games._id}
            >
              <div className="box" key={games._id}>
                <img
                  src={`data:image/jpeg;base64,${games.images}`}
                  alt={games.name}
                  key={games._id}
                />
                {/* {console.log(games.image[0])} */}
                <h4>{games.name}</h4>
                <h4>${games.cost}</h4>

                <button
                  type="submit"
                  onClick={() => {
                    console.log(games.name);
                  }}
                >
                  Buy Now
                </button>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
