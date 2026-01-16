import React from "react";

const Pricing = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <h1 className="mb-3 fs-2">Unbeatable Pricing</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quos
            sequi aliquam fugit tempora voluptas. Molestias, nesciunt sit!
          </p>
          <a href="" style={{ textDecoration: "None" }}>
            See Pricing <i class="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>
        <div className="col-4"></div>
        <div className="col-4">
          <div className="row text-center">
            <div className="col border p-3">
              <h1 className="mb-3">₹0</h1>
              <p>
                Free equility delivery and <br />
                direct mutual funds
              </p>
            </div>
            <div className="col border p-2">
              <h1 className="mb-3">₹720</h1>
              <p>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
