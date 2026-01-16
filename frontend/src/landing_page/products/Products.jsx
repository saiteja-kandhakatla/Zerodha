import React from "react";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";
import Hero from "./Hero";
import { assets } from "../../assets/assets";

const Products = () => {
  return (
    <>
      <Hero />
      <LeftSection
        imageURL={assets.kite}
        productName="Kite"
        productDescription="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab minima voluptatem veniam? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab minima voluptatem veniam?
"
        tryDemo=""
        learnMore=""
        googlePlay=""
        appleStore="ß"
      />
      <RightSection
        imageURL={assets.console}
        productName="Console"
        productDescription="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab minima voluptatem veniam? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab minima voluptatem veniam?"
        learnMore=""
      />
      <LeftSection
        imageURL={assets.coin}
        productName="Coin"
        productDescription="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab minima voluptatem veniam? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab minima voluptatem veniam?
"
        tryDemo=""
        learnMore=""
        googlePlay=""
        appleStore="ß"
      />
      <RightSection
        imageURL={assets.kiteconnect}
        productName="Kite"
        productDescription="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab minima voluptatem veniam? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab minima voluptatem veniam?"
      />
      <LeftSection
        imageURL={assets.varsity}
        productName="Varsity"
        productDescription="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab minima voluptatem veniam? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab minima voluptatem veniam?
"
        tryDemo=""
        learnMore=""
        googlePlay=""
        appleStore="ß"
      />
      <p className="text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nostrum
        nam eligendi.
      </p>
      <Universe />
    </>
  );
};
export default Products;
