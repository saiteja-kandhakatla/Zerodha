import React from "react";
import { assets } from "../../assets/assets";

const Universe = () => {
  return (
    <div className="container">
      <div className="row text-center">
        <h1> The Zerodha Universe</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur
          quasi a sint!
        </p>
        <div className="col-4 p-3">
          <img
            src={assets.smallcaseLogo}
            style={{ width: "120px" }}
            alt="smallcaselogo"
          />
          <p className="text-muted text-small">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3">
          <img
            src={assets.streakLogo}
            style={{ width: "120px" }}
            alt="streaklogo"
          />
          <p className="text-muted text-small">Algo & strategy platform</p>
        </div>
        <div className="col-4 p-3">
          <img
            src={assets.sensibullLogo}
            style={{ width: "120px" }}
            alt="sensibullLogo"
          />
          <p className="text-muted text-small">Options trading platforms</p>
        </div>
        <div className="col-4 p-3 mt-5 ">
          <img
            src={assets.zerodhaFundhouse}
            style={{ width: "120px" }}
            alt="zerodhaFundhouse"
          />
          <p className="text-muted text-small">Asset Management</p>
        </div>
        <div className="col-4 p-3 mt-5 ">
          <img
            src={assets.goldenpiLogo}
            style={{ width: "120px" }}
            alt="goldenpiLogo"
          />
          <p className="text-muted text-small">Bonds trading platforms</p>
        </div>
        <div className="col-4 p-3 mt-5 ">
          <img
            src={assets.dittoLogo}
            style={{ width: "120px" }}
            alt="dittoLogo"
          />
          <p className="text-muted text-small">Insurance</p>
        </div>
        <button
          className="p-1 btn btn-primary fs-5"
          style={{ width: "15%", margin: "0 auto" }}
        >
          SignUp Now
        </button>
      </div>
    </div>
  );
};

export default Universe;
