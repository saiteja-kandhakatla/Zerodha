import React from "react";
import { assets } from "../../assets/assets";

const Team = () => {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5 border-top">
        <h1 className="text-center ">People</h1>
      </div>
      <div
        className="row p-5 text-muted "
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col p-4">
          <img
            src={assets.saiteja}
            style={{ borderRadius: "100%", width: "50%" }}
            alt="MyImage"
          />
          <h4 className="mt-5"> SAI TEJA</h4>
          <h6 className="">Founder</h6>
        </div>
        <div className="col p-4">
          <p>
            about me Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Earum voluptatem fuga asperiores.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum
            nostrum excepturi quis ea sed.
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut ipsam
            adipisci mollitia, cumque voluptatem alias vitae accusamus placeat
            ipsum similique.
          </p>
          <p>
            Connect me{" "}
            <a style={{ textDecoration: "none" }} href="">
              {" "}
              HomePage /
            </a>
            <a style={{ textDecoration: "none" }} href="">
              {" "}
              Trading Q&A /
            </a>
            <a style={{ textDecoration: "none" }} href="">
              {" "}
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;
