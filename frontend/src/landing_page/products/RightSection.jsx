import React from "react";

const RightSection = ({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) => {
  return (
    <div className="container my-5 py-5">
      <div className="row align-items-center">
        {/* Text Section */}
        <div className="col-12 col-md-5 mb-4 mb-md-0">
          <h1 className="display-5 fw-medium mb-4" style={{ color: "#424242" }}>
            {productName}
          </h1>
          <p className="fs-5 text-secondary lh-lg mb-4">{productDescription}</p>
          <div>
            <a
              href={learnMore}
              className="text-decoration-none fw-medium fs-5"
              style={{ color: "#387ed1" }}
            >
              Learn More <i className="fa-solid fa-arrow-right-long ms-2"></i>
            </a>
          </div>
        </div>

        <div className="col-12 col-md-6 offset-md-1 text-center">
          <img src={imageURL} alt={productName} className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default RightSection;
