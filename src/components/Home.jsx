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
                        <p className="price text-bold">Price : {item.price} ₹</p>
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
