import React from "react";

const Hero = () => {
  return (
    <div className="container mt-5 pt-5">
      <div className="text-center pb-5 mb-5 border-bottom">
        {/* Using display-2 for a larger, cleaner header */}
        <h1 className="display-4 fw-normal text-dark">Technology</h1>

        {/* Using fs-4 and text-secondary for that muted sub-header look */}
        <h3 className="text-secondary mt-3 fs-4 fw-normal">
          Sleek, modern, and intuitive trading platforms
        </h3>

        <p className="mt-4 fs-5">
          Check out our{" "}
          <a
            href="/offerings"
            className="text-decoration-none"
            style={{ color: "#387ed1", fontWeight: "500" }}
          >
            investment offerings{" "}
            <i className="fa-solid fa-arrow-right-long ms-1"></i>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Hero;
