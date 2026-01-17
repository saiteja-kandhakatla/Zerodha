import React from "react";
import { assets } from "../../assets/assets";

const LeftSection = ({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appleStore,
}) => {
  return (
    <div className="container my-5 py-5">
      <div className="row align-items-center">
        {/* Image Section */}
        <div className="col-12 col-md-6 text-center">
          <img src={imageURL} alt={productName} className="img-fluid" />
        </div>

        {/* Text Section (with offset to match the right section's spacing) */}
        <div className="col-12 col-md-5 offset-md-1">
          <h1 className="display-5 fw-medium mb-4" style={{ color: "#424242" }}>
            {productName}
          </h1>
          <p className="fs-5 text-secondary lh-lg mb-4">{productDescription}</p>

          {/* Links */}
          <div className="mb-4">
            <a
              href={tryDemo}
              className="text-decoration-none fw-medium fs-5 me-5"
              style={{ color: "#387ed1" }}
            >
              Try demo <i className="fa-solid fa-arrow-right-long ms-2"></i>
            </a>
            <a
              href={learnMore}
              className="text-decoration-none fw-medium fs-5"
              style={{ color: "#387ed1" }}
            >
              Learn More <i className="fa-solid fa-arrow-right-long ms-2"></i>
            </a>
          </div>

          {/* Store Badges */}
          <div className="d-flex align-items-center gap-3 mt-4">
            <a href={googlePlay}>
              <img
                src={assets.googlePlayBadge}
                alt="Get it on Google Play"
                style={{ width: "150px" }}
              />
            </a>
            <a href={appleStore}>
              <img
                src={assets.appstoreBadge}
                alt="Download on App Store"
                style={{ width: "150px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
