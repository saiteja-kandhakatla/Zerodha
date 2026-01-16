import React from "react";
import { assets } from "../../assets/assets";

const Education = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <img src={assets.education} style={{width:"80%"}} alt="" />
        </div>
        <div className="col-6">
          <h1 className="mb-3 fs-2">Free and open market education</h1>
          <p className="mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            saepe nam tempore! Nemo, nesciunt mollitia!
          </p>
          <a href="" style={{ textDecoration: "None" }}>
            Varsity <i class="fa-solid fa-arrow-right-long"></i>
          </a>
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            doloribus numquam provident.
          </p>
          <a href="" style={{ textDecoration: "None" }}>
            TradingQ&A <i class="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Education;
