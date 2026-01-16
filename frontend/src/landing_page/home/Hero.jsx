import React from "react";
import { assets } from "../../assets/assets";

const Hero = () => {
  return (
    <div className="container p-5 ">
      <div className="row text-center">
        <img src={assets.homeHero} alt="Hero Image" className="mb-5" />
        <h1 className="mt-5">Invest in Everything</h1>
        <p>Online platform to invest in stocks, derivatives, mutual funds</p>
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

export default Hero;
