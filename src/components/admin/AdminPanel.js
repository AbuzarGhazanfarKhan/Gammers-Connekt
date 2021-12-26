import React, { useState } from "react";

function AdminPanel() {
  const [imageFile, setimageFile] = useState(null);
  const [secondImage, setsecondImage] = useState(null);
  const [thirdImage, setthirdImage] = useState(null);
  const [error, setError] = useState(null);
  const [name, setname] = useState(undefined);
  const [cost, setcost] = useState(undefined);
  // const imageToBase64 = require("image-to-base64");
  const [description, setdescription] = useState(undefined);
  const [category, setcategory] = useState(undefined);
  const [no_of_purchased, setno_of_purchased] = useState(undefined);
  const [keys, setkeys] = useState(undefined);
  const [reserror, setResError] = useState([]);
  const [status, setStatus] = useState([]);

  const types = ["image/png", "image/jpeg", "image/jpg"];
  const handleImages = (e) => {
    let selected = e.target.files[0];
    // console.log(selected);
    if (selected && types.includes(selected.type)) {
      setimageFile(selected);
      setError("");
      // console.log(decode(imageFile));
    } else {
      setimageFile(null);
      setError("Please select a valid format of image (png or jpg) ");
    }
  };
  const handleImages1 = (e) => {
    let selected = e.target.files[0];
    // console.log(selected);
    if (selected && types.includes(selected.type)) {
      setsecondImage(selected);
      setError("");
    } else {
      setsecondImage(null);
      setError("Please select a valid format of image (png or jpg) ");
    }
  };
  const handleImages2 = (e) => {
    let selected = e.target.files[0];
    // console.log(selected);
    if (selected && types.includes(selected.type)) {
      setthirdImage(selected);
      setError("");
    } else {
      setthirdImage(null);
      setError("Please select a valid format of image (png or jpg) ");
    }
  };

  //POST PRODUCT
  const newEntry = {
    name: name,
    cost: cost,

    description: description,
    category: category,
    no_of_purchased: no_of_purchased,
    keys: keys,
  };
  const image = [imageFile, secondImage, thirdImage];
  let objectStringed = JSON.stringify(newEntry);
  // let parseobj = JSON.parse(objectStringed);
  const formdata = new FormData();
  formdata.append("file", image[0]);
  formdata.append("file", image[1]);
  formdata.append("file", image[2]);
  // console.log(formdata.getAll("file"));
  formdata.append("post", objectStringed);
  // console.log(formdata);
  // console.log(objectStringed);

  const handleSubmit = (e) => {
    e.preventDefault();
    sendData();
  };
  async function sendData() {
    let result = await fetch(
      "https://game-distribution-web.herokuapp.com/add-games",

      {
        method: "Post",
        headers: {},
        body: formdata,
      }
    );
    let response = await result.json();
    if (response.error) {
      setResError(response.error);
    }
    if (response.status) {
      setStatus(response.status);
    }
  }

  return (
    <div className="admin">
      <div>
        <form onSubmit={handleSubmit}>
          <h1>Admin Panel</h1>
          <input
            type="text"
            placeholder="Name"
            value={name}
            autoComplete="off"
            onChange={(e) => setname(e.target.value)}
          />
          <input
            type="text"
            placeholder="Description"
            value={description}
            autoComplete="off"
            onChange={(e) => setdescription(e.target.value)}
          />
          <input
            type="text"
            placeholder="Keys"
            value={keys}
            autoComplete="off"
            onChange={(e) => setkeys(e.target.value)}
          />
          <input
            type="text"
            placeholder="no of purchases"
            value={no_of_purchased}
            autoComplete="off"
            onChange={(e) => setno_of_purchased(e.target.value)}
          />
          <label htmlFor="cover_image">Cover Image</label>
          <input
            type="file"
            multiple={true}
            placeholder="Upload Image"
            onChange={handleImages}
            name="cover_image"
          />
          <label htmlFor="other1_image">First Image</label>
          <input
            type="file"
            multiple={true}
            placeholder="Upload Image"
            onChange={handleImages1}
            name="other1_image"
          />
          <label htmlFor="other2_image">Second Image</label>
          <input
            type="file"
            multiple={true}
            placeholder="Upload Image"
            onChange={handleImages2}
            name="other2_image"
          />
          {/* {console.log(imageFile)} */}
          {error && <p style={{ color: "red" }}> {error} </p>}
          <input
            type="text"
            placeholder="Cost"
            value={cost}
            autoComplete="off"
            onChange={(e) => setcost(e.target.value)}
          />

          <div className="admin_category">
            <label>RTS</label>
            <input
              type="radio"
              value="RTS"
              name="category"
              onChange={(e) => {
                setcategory(e.target.value);
              }}
            />
            <label>sports</label>
            <input
              type="radio"
              value="sports"
              name="category"
              onChange={(e) => {
                setcategory(e.target.value);
              }}
            />
            <label>fighting</label>
            <input
              type="radio"
              value="fighting"
              name="category"
              onChange={(e) => {
                setcategory(e.target.value);
              }}
            />
          </div>

          <button type="submit">Add Product</button>
        </form>
      </div>
      {reserror && <div style={{ color: "red" }}>{reserror}</div>}
      {status ? (
        <div style={{ color: "green" }}>
          <p>{status}</p>
        </div>
      ) : null}
    </div>
  );
}
export default AdminPanel;
