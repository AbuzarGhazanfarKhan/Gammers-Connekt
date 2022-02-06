import React, { useState } from "react";
import useFetch from "../customHooks/useFetch";
import Products from "./Products";
// import products from "../../products";

function ProductListing() {
  // const [product, setProduct] = useState(null);
  // const [isPending, setIsPending] = useState(true);
  const [category, setcategory] = useState("");

  const handleChange = (e) => {
    setcategory(e.target.value);
  };
  const {
    data: product,
    isPending,
    error,
  } = useFetch(
    `https://game-distribution-web.herokuapp.com/get-games-filter-public?limit=6&category=${category}`
  );

  return (
    <div className="prodtcs">
      <h1>Featured Games</h1>
      <div className="filters">
        <button onClick={handleChange} value={""} className="filter_btn">
          All
        </button>

        <button onClick={handleChange} value={"RTS"} className="filter_btn">
          RTS
        </button>

        <button onClick={handleChange} value={"sports"} className="filter_btn">
          sports
        </button>
      </div>

      <center>
        {" "}
        <h1> {category} </h1>{" "}
      </center>

      {/* <select>
        <option
          value={"RTS"}
          onClick={() => {
            setcategory(!category);
          }}
        >
          RTS
        </option>
        <option
          value={"RTS"}
          onClick={() => {
            setcategory(!category);
          }}
        >
          RTS
        </option>
        <option
          value={"sports"}
          onClick={() => {
            setcategory(!category);
          }}
        >
          SPORTS
        </option>
        <option
          value={"MBO"}
          onClick={() => {
            setcategory(!category);
          }}
        >
          MBO
        </option>
      </select> */}
      {error && <div> {error} </div>}
      {isPending && (
        <div>
          {" "}
          <h1 className="loading">Loading.....</h1>{" "}
        </div>
      )}
      {product && <Products product={product} key={product._id} />}
    </div>
  );
}

export default ProductListing;

//  onClick={(e) => {
//           setcategory(e.target)
