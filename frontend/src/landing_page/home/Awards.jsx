import React from "react";
import { assets } from "../../assets/assets";

const Awards = () => {
  return (
    <div>
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-6 p-5">
            <img src={assets.largestBroker} alt="" />
          </div>
          <div className="col-6 p-5 mt-5">
            <h1>Largest stock broker in india</h1>
            <p className="mb-5">
              2+ million Zerodha clients contribute to over 15% of all retail
              order volumes in India by trading and investing in
            </p>
            <div className="row">
              <div className="col-6">
                <ul>
                  <li>Futures and Options</li>
                  <li>Commodity derivatives</li>
                  <li>Currency derivatives</li>
                </ul>
              </div>
              <div className="col-6">
                <ul>
                  <li>Stocks & IPOs</li>
                  <li>Direct Mutual Funds</li>
                  <li>Bonds and</li>
                  <li>Futures and Options</li>
                </ul>
              </div>
            </div>
            <img style={{ width: "90%" }} src={assets.pressLogos} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;
