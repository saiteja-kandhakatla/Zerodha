import React from "react";
import { assets } from "../../assets/assets";

const Stats = () => {
  return (
    <div className="container p-3">
      <div className="row p-5">
        <div className="col-6 p-5">
          <h1 className="fs-2 mb-5">Trust with Confidence</h1>

          <h2 className="fs-4">Customer-first always</h2>
          <p className="text-muted">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam quas
            corporis eum voluptatum soluta exercitationem explicabo inventore.
            Tempora.
          </p>
          <h2 className="fs-4">Customer-first always</h2>
          <p className="text-muted">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam quas
            corporis eum voluptatum soluta exercitationem explicabo inventore.
            Tempora.
          </p>
          <h2 className="fs-4">Customer-first always</h2>
          <p className="text-muted">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam quas
            corporis eum voluptatum soluta exercitationem explicabo inventore.
            Tempora.
          </p>
          <h2 className="fs-4">Customer-first always</h2>
          <p className="text-muted">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam quas
            corporis eum voluptatum soluta exercitationem explicabo inventore.
            Tempora.
          </p>
        </div>
        <div className="col-6 p-5">
          <img src={assets.ecosystem} style={{ width: "90%" }} alt="" />
          <div className="text-center">
            <a className="mx-5" style={{ textDecoration: "None" }} href="">
              Explore our Products <i class="fa-solid fa-arrow-right-long"></i>
            </a>
            <a href="" style={{ textDecoration: "None" }}>
              Try Kite demo <i class="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
