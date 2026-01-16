import React from "react";
import { assets } from "../../assets/assets";

const Hero = () => {
  return (
    <div className="container ">
      <div
        className="row p-5 mt-3 border-bottom text-center"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <h1>Pricing</h1>
        <p className="mt-2 fs-8  text-muted">
          Free equity investments and flat 20 traday and F&O trades
        </p>
      </div>
      <div className="row p-4 mt-5">
        <div className="col p-4 text-center">
          <img src={assets.pricingEquity} alt="" />
          <h1 className="fs-3">Free equity delivery</h1>
          <p className="text-muted">
            All equity delivery investments (NSE,BSE), are absolutely free -₹0
            brokerage
          </p>
        </div>
        <div className="col p-4 text-center">
          <img src={assets.intradayTrades} alt="" />
          <h1 className="fs-3">Intraday and F&O trades</h1>
          <p className="text-muted">
            All equity delivery investments (NSE,BSE), are absolutely free -₹0
            brokerage
          </p>
        </div>
        <div className="col p-4 text-center">
          <img src={assets.pricingEquity} alt="" />
          <h1 className="fs-3">Free equity delivery</h1>
          <p className="text-muted">
            All equity delivery investments (NSE,BSE), are absolutely free -₹0
            brokerage
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
