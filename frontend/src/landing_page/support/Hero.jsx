import React from "react";

const Hero = () => {
  return (
    <section className="container-fluid" id="supportHero">
      <div className=" p-5 mt-5 mb-5" id="supportWrapper">
        <h4>Support Portal</h4>
        <a style={{ color: "white" }} href="">
          Track Tickets
        </a>
      </div>
      <div className="row p-5 m-5">
        <div className="col-6">
          <h3>
            Search for an answer or browse help topics to <br /> create a ticket
          </h3>
          <input
            className="w-full"
            type="text"
            placeholder="Eg: how do i activate F&O, why is order getting rejected"
          />
          <div>
            <a className="p-2" style={{ color: "white" }} href="">
              Track account opening
            </a>
            <a className="p-2" style={{ color: "white" }} href="">
              Track segment activation
            </a>
            <a className="p-2" style={{ color: "white" }} href="">
              Intraday
            </a>
          </div>
          <div>
            <a className="p-2" style={{ color: "white" }} href="">
              margins
            </a>
            <a className="p-2" style={{ color: "white" }} href="">
              Kite user manual
            </a>
          </div>
        </div>
        <div className="col-6">
          <h4>Featured</h4>
          <ol>
            <li>
              <a style={{ color: "white" }} href="">
                Current Takeover and delisting - January 2024
              </a>
            </li>
            <li>
              <a style={{ color: "white" }} href="">
                Latest Intraday leverages - MIS & CO
              </a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Hero;
