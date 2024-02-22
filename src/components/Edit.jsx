import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles/Home.css";
import { useNavigate } from "react-router-dom";
const Edit = ({ id }) => {
  
  const [editData, seteditData] = useState({
    name: "",
    description: "",
    price: "",
  });
    const navigate = useNavigate();
  useEffect(() => {
    fetchdata();
  }, []);
  const fetchdata = async () => {
    await axios
      .get(`https://65d7012027d9a3bc1d79e33c.mockapi.io/cats/${id}`)
      .then((res) => seteditData(res.data))
      .catch((err) => {
        console.log(err);
      });
  };
  const Handlechange = (e) => {
    const { name, value } = e.target;
    seteditData((predata) => ({
      ...predata,
      [name]: value,
    }));
  };
  const HandleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `https://65d7012027d9a3bc1d79e33c.mockapi.io/cats/${id}`,
        editData
      );
      alert("Updated successful");
      navigate("/details");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="container edit">
      <div className="edit1">
        <form onSubmit={HandleSubmit}>
          <span className="headcat">CATS DETAILS</span>
          <br />
          <lable>
            Breed Name:
            <input
              type="text"
              // placeholder="Breed name"
              name="name"
              value={editData.name}
              onChange={Handlechange}
            />
          </lable>
          <label>
            Description :
            <input
              type="text"
              // placeholder="Description"
              name="description"
              value={editData.description}
              onChange={Handlechange}
            />
          </label>
          <label>
            Price :
            <input
              type="text"
              // placeholder="Price"
              name="price"
              value={editData.price}
              onChange={Handlechange}
            />
          </label>

          <button type="submit" className="btn btn-success">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default Edit;
