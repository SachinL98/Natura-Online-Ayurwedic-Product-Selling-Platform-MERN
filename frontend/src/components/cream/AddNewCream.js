import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";

export default function AddNewCream() {
  const navigate = useNavigate();
  const { user } = useAuthContext();
  //console.log(user);
     
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [type, setType] = useState("");
  const [mfd, setMfd] = useState("");
  const [exp, setExp] = useState("");
  const [weight, setWeight] = useState(0);
  const [sellerID, setSellerID] = useState(user.user._id);
  const [imageLink, setImageLink] = useState("");

  const handleDropdown = (event) => {
    setType(event.target.value);
  };

  function sendCreamData(event) {
    event.preventDefault();

    const newCream = {
      name,
      description,
      price,
      quantity,
      type,
      mfd,
      exp,
      weight,
      sellerID,
      imageLink
    };

    axios
      .post("http://localhost:8002/cream/addCream/", newCream)
      .then((res) => {
        window.alert("New Cream Is Added !")
        navigate('/allCreams')
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <form style={{marginLeft: "30%", marginTop: "20px"}}>
        <br />
        <div className="row md-6">
          <div className="col-md-6">
          <label className="labels" style={{ float: "left" }}>
              Enter Image URL :
            </label>
            <input type="text"
              onChange={(event) => {
                setImageLink(event.target.value)
              }} />
          </div>
        </div>
        <br />
        <div className="row md-6">
          <div className="col-md-6">
            <label className="labels" style={{ float: "left" }}>
              Enter Cream Name :
            </label>
            <input
              type="text"
              className="form-control"
              required
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </div>
        </div>
        <div className="row md-6">
          <div className="col-md-6">
            <label className="labels" style={{ float: "left" }}>
              Enter Description :
            </label>
            <textarea
              type="text"
              className="form-control"
              required
              onChange={(event) => {
                setDescription(event.target.value);
              }}
            />
          </div>
        </div>
        <div className="row md-6">
          <div className="col-md-3">
            <label className="labels" style={{ float: "left" }}>
              Enter Price :
            </label>
            <input
              type="text"
              className="form-control"
              required
              onChange={(event) => {
                setPrice(event.target.value);
              }}
            />
          </div>
          <div className="col-md-3">
            <label className="labels" style={{ float: "left" }}>
              Enter Quantity :
            </label>
            <input
              type="text"
              className="form-control"
              required
              onChange={(event) => {
                setQuantity(event.target.value);
              }}
            />
          </div>
        </div>
        <div className="row md-6">
          <div className="col-md-3">
            <label className="labels" style={{ float: "left" }}>
              Enter Type :
            </label>
            <select>
              <option value="">Select and option</option>
              <option value="Face Cream">Face Cream</option>
              <option value="Foot Cream">Foot Cream</option>
              <option value="Baby Cream">Baby Cream</option>
            </select>
          </div>
          <div className="col-md-3">
            <label className="labels" style={{ float: "left" }}>
              Enter Weight :
            </label>
            <input
              type="text"
              className="form-control"
              required
              onChange={(event) => {
                setWeight(event.target.value);
              }}
            />
          </div>
        </div>
        <div className="row md-6">
          <div className="col-md-3">
            <label className="labels" style={{ float: "left" }}>
              Enter MFD :
            </label>
            <input
              type="date"
              className="form-control"
              required
              onChange={(event) => {
                setMfd(event.target.value);
              }}
            />
          </div>
          <div className="col-md-3">
            <label className="labels" style={{ float: "left" }}>
              Enter EXP :
            </label>
            <input
              type="date"
              className="form-control"
              required
              onChange={(event) => {
                setExp(event.target.value);
              }}
            />
          </div>
        </div>
        <div className="row md-6" style={{ marginTop: '10px', marginLeft: "1px"}}>
          <button
          style={{width: "80px"}}
            className="btn btn-success"
            type="button"
            onClick={sendCreamData}
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
