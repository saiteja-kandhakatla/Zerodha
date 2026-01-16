import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-light">
      <div className="container border-top mt-5">
        <div className="row mt-5">
          <div className="col p-3">
            <Link to="/">
              <img
                className="mb-3"
                src={assets.logo}
                alt="logo"
                style={{ width: "50%" }}
              />
            </Link>
            <p className="text-muted text-sm fs-8">
              {" "}
              &copy; 2010-2025,Not Zerodha Broking Ltd,All rights reserved.
            </p>
          </div>
          <div className="col">
            <p>Company</p>
            <div className="mt-3">
              <Link
                to="/about"
                style={{ textDecoration: "None" }}
                className="mt-2 text-muted"
              >
                About
              </Link>
            </div>

            <div className="mt-3">
              <Link
                to="/products"
                style={{ textDecoration: "None" }}
                className=" text-muted"
              >
                Products
              </Link>
            </div>
            <div className="mt-3">
              <Link
                to="/pricing"
                style={{ textDecoration: "None" }}
                className="mt-2 text-muted"
              >
                Pricing
              </Link>
            </div>
            <div className="mt-3">
              <Link
                to=""
                style={{ textDecoration: "None" }}
                className="mt-2 text-muted"
              >
                Refferal programming
              </Link>
            </div>
            <div className="mt-3">
              <Link
                to=""
                style={{ textDecoration: "None" }}
                className="mt-2 text-muted"
              >
                Careers
              </Link>
            </div>
            <div className="mt-3">
              <Link
                to=""
                style={{ textDecoration: "None" }}
                className="mt-2 text-muted"
              >
                Zerodha tech
              </Link>
            </div>
            <div className="mt-3">
              {" "}
              <Link
                to=""
                style={{ textDecoration: "None" }}
                className="mt-2 text-muted"
              >
                Press & media
              </Link>
            </div>
            <div className="mt-3">
              {" "}
              <Link
                to=""
                style={{ textDecoration: "None" }}
                className="mt-2 text-muted"
              >
                Zerodha cares(CSR)
              </Link>
            </div>
          </div>
          <div className="col">
            <p>Support</p>
            <div className="mt-3">
              <Link
                to="/support"
                style={{ textDecoration: "None" }}
                className="mt-2 text-muted"
              >
                Contact
              </Link>
            </div>
            <div className="mt-3">
              <Link
                to=""
                style={{ textDecoration: "None" }}
                className="mt-2 text-muted"
              >
                Support portal
              </Link>
            </div>
            <div className="mt-3">
              <Link
                to=""
                style={{ textDecoration: "None" }}
                className="mt-2 text-muted"
              >
                Z-connect blog
              </Link>
            </div>

            <div className="mt-3">
              <Link
                to=""
                style={{ textDecoration: "None" }}
                className="mt-2 text-muted"
              >
                Downloads & resources
              </Link>
            </div>
          </div>
          <div className="col">
            <p>Account</p>
            <div className="mt-3">
              <Link
                to=""
                style={{ textDecoration: "None" }}
                className="mt-2 text-muted"
              >
                Opens an account{" "}
              </Link>
            </div>

            <div className="mt-3">
              <Link
                to=""
                style={{ textDecoration: "None" }}
                className="mt-2 text-muted"
              >
                Fund Transfer
              </Link>
            </div>

            <div className="mt-3">
              <Link
                to=""
                style={{ textDecoration: "None" }}
                className="mt-2 text-muted"
              >
                60 day challenge
              </Link>
            </div>
          </div>
        </div>
        <div
          style={{ fontSize: "14px" }}
          className="mt-5 text-small fs-6 text-muted"
        >
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum est
            magni dolor harum! Fuga, adipisci quae numquam animi, incidunt est,
            ipsum laborum suscipit beatae culpa id architecto? Officia veniam
            labore excepturi, doloribus, impedit blanditiis quaerat voluptatum
            quam quibusdam, cum perferendis!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            repudiandae, soluta nemo, neque ea quos fugiat ab non esse dolor
            possimus, velit dicta sint. Excepturi obcaecati, corporis explicabo
            nobis ullam possimus maxime officiis minus quidem non cupiditate,
            est in fugit rem delectus? Veritatis quisquam dolore at illo Link
            cupiditate optio.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
            perspiciatis ipsa fugit culpa sequi optio! Exercitationem nam magnam
            nemo dignissimos adipisci at eligendi perspiciatis doloribus
            consequatur sapiente aliquid explicabo iusto libero, praesentium,
            quis esse.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
