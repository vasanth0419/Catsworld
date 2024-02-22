import axios from "axios";
import React, { useEffect, useState } from "react";
import "./styles/Details.css";
import { useNavigate } from "react-router-dom";

const Details = ({ setid }) => {
  const [cats, setcats] = useState([]);
  const [deletedata, setdeletedata] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetchdata();
  }, [deletedata]);
  const fetchdata = async () => {
    await axios
      .get("https://65d7012027d9a3bc1d79e33c.mockapi.io/cats")
      .then((res) => setcats(res.data))
      .catch((err) => {
        console.log(err);
      });
  };
  const HandleEdit = (id) => {
    setid(id);
    navigate(`/edit/${id}`);
  };
  const HandleDelete = async (id) => {
    await axios
      .delete(`https://65d7012027d9a3bc1d79e33c.mockapi.io/cats/${id}`)
      .then((res) => setdeletedata(res.data))
      .catch((err) => {
        console.log(err);
      });
  };
      const HandleAdd = () => {
        navigate(`/create`);
  }
  return (
    <div className="container">
      <div className="container header">
        <button type="button" className="add btn btn-primary" onClick={()=>{HandleAdd()}}>
          Add Details
        </button>
      </div>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">Breed Name</th>
            <th scope="col">Description</th>
            <th scope="col">Price ₹</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {cats.map((item, index) => {
            return (
              <>
                <tr key={item.id}>
                  <th scope="row">{item.id}</th>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>{item.price} ₹</td>
                  <td>
                    <button
                      onClick={() => {
                        HandleEdit(item.id);
                      }}
                    >
                      <i className="bi bi-pencil-square"></i>
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        HandleDelete(item.id);
                      }}
                    >
                      <i className="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Details;
