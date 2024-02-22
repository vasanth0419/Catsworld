# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


#### cats world website [mock api task]

#### _* 1st step to create a empty folder for a project and create react project with in the folder`catsworld`*_

#### code to create a react `npm create vite@latest catsworld`

#### install `npm install axios`

### follow the steps one by one atlast install router-dom `npm i react-router-dom`
 

#### in my site we can use CRUD operation.. 



### create a components as for recuirement


#### codes in `app.jsx`

```
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Details from "./components/Details";
import NavBar from "./components/NavBar";
import Edit from "./components/Edit";
import Add from "./components/Add";

const App = () => {
  const [id, setid] = useState(0);
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details setid={setid} />} />
          <Route path="/edit/:id" element={<Edit id={id} />} />
          <Route path="/create" element={<Add />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
```


#### codes in `NavBar.jsx`
```
import React from "react";
import { Link } from "react-router-dom";
import "./styles/NavBar.css";

const NavBar = () => {
  return (
    <div className="container-fluid">
      <nav>
        <img
          className="img"
          src="https://e7.pngegg.com/pngimages/142/119/png-clipart-cat-paw-dog-paw-prints-animals-pet-thumbnail.png"
          alt=""
        />
        <span>CATS WORLD</span>
        <Link to="/" >Home</Link>
        <Link to="/details">Details</Link>
      </nav>
    </div>
  );
};

export default NavBar;

```
#### codes in `Home.jsx`
```
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./styles/Home.css";

const Home = () => {
  const [cats, setcats] = useState([]);
  useEffect(() => {
    fetchdata();
  }, []);
  const fetchdata = async () => {
    await axios
      .get("https://65d7012027d9a3bc1d79e33c.mockapi.io/cats")
      .then((res) => setcats(res.data))
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div className="container">
        <div class="row row-cols-1 row-cols-md-3 g-4">
          {cats.map((item, index) => {
            return (
              <>
                <div key={index}>
                  <div class="col">
                    <div class="card">
                      <img src={item.image} class="card-img-top" alt="cats" />
                      <div class="card-body">
                        <h5 class="card-title">{item.name} </h5>
                        <p class="card-text">{item.description}</p>
                        <p className="price">Price : {item.price}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;

```
#### codes in `Details.jsx`
```
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

```
#### codes in `Edit.jsx`
```
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

```

#### codes in `Add.jsx`
```
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

```