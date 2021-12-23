import React, { useState } from "react";
import useFetch from "../customHooks/useFetch";
import Products from "./Products";
// import products from "../../products";

function ProductListing() {
  // const [product, setProduct] = useState(null);
  // const [isPending, setIsPending] = useState(true);
  const [category, setcategory] = useState("");

  const handleChange = (e) => {
    // console.log(e.target.value);
    console.log(category);
    setcategory(e.target.value);
  };
  const {
    data: product,
    isPending,
    error,
  } = useFetch(
    `http://game-distribution-web.herokuapp.com/get-games-filter-public?limit=6&category=${category}`
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
          <br />
          <br />
          <br />
          <h1>Loading.....</h1>{" "}
        </div>
      )}
      {product && <Products product={product} />}
    </div>
  );
}

export default ProductListing;

//  onClick={(e) => {
//           setcategory(e.target)
