import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./styles/Add.css";

const Add = () => {
  const [addData, setaddData] = useState({
    name: "",
    description: "",
    price: "",
  });
  const navigate = useNavigate();
  useEffect(() => {
    HandleCreate();
  }, []);
  const Handlechange = (e) => {
    const { name, value } = e.target;
    setaddData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const HandleCreate = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://65d7012027d9a3bc1d79e33c.mockapi.io/cats/",
        addData
      );
      alert("Added successful");
      navigate("/details");
    } catch (err) {
      console.error("Error adding cat:", err);
    }
  };

  return (
    <div>
      <div className=" container addd">
        <form onSubmit={HandleCreate}>
          <span className="headcat">ADD DETAILS </span>
          <br />
          <lable>
            Breed Name:
            <input
              type="text"
              placeholder="Breed name"
              name="name"
              onChange={Handlechange}
            />
          </lable>
          <label>
            Description :
            <input
              type="text"
              placeholder="Description"
              name="description"
              onChange={Handlechange}
            />
          </label>
          <label>
            Price :
            <input
              type="text"
              placeholder="Price"
              name="price"
              onChange={Handlechange}
            />
          </label>

          <button type="submit" className="btn btn-success">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default Add;
