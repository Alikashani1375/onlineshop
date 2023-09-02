import React from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import closeimg from "./images/closebtn.png";
const TopMenu = (props) => {
  const show = (e) => {
    $(e).show(500);
  };
  const close = (e) => {
    $(e).hide(500);
  };
  return (
    <div className=" mx-auto mt-5 flex w-10/12 items-center justify-center">
      <div id="auth-container">
        <div id="auth">
          <button
            id="close-btn"
            onClick={() => {
              close("#auth-container");
            }}
          >
            <img width={30} height={30} src={closeimg} />
          </button>
          <div className="text-lg">Wellcome Back</div>
          <div className="mt-2 text-gray-500">We Missed You My Dear Freind</div>
          <input
            placeholder="username"
            className="mt-5 w-3/4 rounded-lg p-2 text-center shadow"
          />
          <input
            placeholder="password"
            className="mt-5 w-3/4 rounded-lg p-2 text-center shadow"
          />
          <button
            id="registerbtn"
            style={{ backgroundColor: "#3C9379" }}
            className="btn-greenshadow mt-4 rounded-lg px-5 py-2 text-sky-50"
          >
            Login
          </button>
          <div className="mt-5 flex flex-row items-center justify-center">
            <div className=" text-gray-600">Did You Forget Your Password?</div>
            <button className="mx-2 rounded-lg bg-slate-400 p-2 text-slate-50">
              Click Here
            </button>
          </div>
        </div>
      </div>
      <div id="register-container">
        <div id="auth">
          <button
            id="close-btn"
            onClick={() => {
              close("#register-container");
            }}
          >
            <img width={30} height={30} src={closeimg} />
          </button>
          <div className="text-lg">Wellcome To Online-Shop</div>

          <input
            placeholder="username"
            className="mt-5 w-3/4 rounded-lg p-2 text-center shadow"
          />
          <input
            placeholder="email"
            className="mt-5 w-3/4 rounded-lg p-2 text-center shadow"
          />
          <input
            placeholder="password"
            className="mt-5 w-3/4 rounded-lg p-2 text-center shadow"
          />
          <input
            placeholder="password-confirm"
            className="mt-5 w-3/4 rounded-lg p-2 text-center shadow"
          />
          <button
            id="registerbtn"
            style={{ backgroundColor: "#3C9379" }}
            className="btn-greenshadow mt-4 rounded-lg px-5 py-2 text-sky-50"
          >
            Register
          </button>
          <div className="mt-5 flex flex-row items-center justify-center">
            <div className=" text-gray-600">Do You Have Account?</div>
            <button
              onClick={() => {
                $("#register-container").hide();
                $("#auth-container").show(500);
              }}
              className="mx-2 rounded-lg bg-slate-400 p-2 text-slate-50"
            >
              Click Here
            </button>
          </div>
        </div>
      </div>

      <div className="me-auto flex text-3xl font-extrabold">
        <div>Ba</div>
        <div style={{ color: "#3C9379" }}>chira</div>
      </div>
      <div className="mx-auto flex w-5/12 justify-between">
        <Link to="/" className="font-bold text-sky-950">
          Home
        </Link>
        <Link to="/products" style={{ color: "#535A56" }}>
          Products
        </Link>
        <div style={{ color: "#535A56" }}>Categories</div>
        <div style={{ color: "#535A56" }}>Brands</div>
        <div style={{ color: "#535A56" }}>Pricing</div>
      </div>

      <div className="ms-auto flex items-center">
        {props.userloged ? (
          <>Wellcome</>
        ) : (
          <>
            <button
              onClick={() => {
                show("#auth-container");
              }}
              className="text-sky-950"
            >
              Login
            </button>
            <button
              id="registerbtn"
              onClick={() => {
                show("#register-container");
              }}
              style={{ backgroundColor: "#3C9379" }}
              className="btn-greenshadow ms-3 rounded-lg px-5 py-2 text-sky-50"
            >
              Register
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default TopMenu;
