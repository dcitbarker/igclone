import React from "react";
import "../index.css";
import { Link, useNavigate } from "react-router-dom";
const appStore = require("../assets/appStore.png");
const playStore = require("../assets/playStore.png");
const iglogo = require("../assets/ig-logo.png");

const SignUp = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("./Signin.jsx");
    };
    return (
        <div className="pb-10 container center mx-auto mt-5">
            <div className="flex flex-col  w-full">
                <div className="flex flex-col w-80 mx-auto border rounded-sm border-gray-light pl-5 pr-5 pb-5">
                    <div className="mx-auto mt-4 mb-2">
                        <img
                            src={iglogo}
                            alt="Instagram"
                            className="instagram-logo"
                        />
                    </div>
                    <div
                        className="mx-auto text-center mb-4 text-lg font-bold text-gray"
                        style={{ fontFamily: "Segoe UI" }}
                    >
                        Sign Up to see photos and videos from your friends.
                    </div>
                    <div className="login-button-box mt-2 mx-auto">
                        <button className="login-button h-10 border rounded-lg">
                            Log in with Facebook
                        </button>
                    </div>
                    <div className="lines-box">
                        <div className="line-1"></div>
                        <div className="or-box">OR</div>
                        <div className="line-2"></div>
                    </div>
                    <div className="mx-auto mt-1">
                        <input
                            className="text-sm border-gray-light bg-neutral-200"
                            type="text"
                            placeholder="Phone number or Email"
                        />
                    </div>
                    <div className="mx-auto mt-1">
                        <input
                            className="text-sm border-gray-light bg-neutral-200"
                            type="text"
                            placeholder="Full Name"
                        />
                    </div>
                    <div className="mx-auto mt-1">
                        <input
                            className="text-sm border-gray-light bg-neutral-200"
                            type="text"
                            placeholder="Username"
                        />
                    </div>
                    <div className="mx-auto mt-3">
                        <input
                            className="text-sm border-gray-light bg-neutral-200"
                            type="text"
                            placeholder="Password"
                        />
                    </div>
                    <div className="text-xs">
                        <p className=" mt-4 text-center">
                            People who use our service may have uploaded your
                            contact information. Learn More
                        </p>
                        <p className="mt-4 text-center">
                            By signing up, you agree to our Terms, Policy
                        </p>
                        <p>
                            <Link>Policy</Link> and <Link>Cookies Policy.</Link>
                        </p>
                    </div>
                    <div className="login-button-box mt-2 mx-auto">
                        <button className="login-button">Sign up</button>
                    </div>
                </div>
                <div className="flex flex-col mx-auto mt-3 border rounded-sm border-gray-light pl-4 pr-4 pb-4 pt-4 w-80">
                    <p className="text-center">
                        <span className="text-sm">Have an account? </span>
                        <span className="sign-up-span text-sky-600 font-bold text-sm">
                            <Link to="/signin">Login</Link>
                        </span>
                    </p>
                </div>
                <div className="mx-auto mt-5 text-sm">
                    <p>Get the app.</p>
                </div>
                <div className="flex flex-row mx-auto mt-2">
                    <div>
                        <img
                            src={appStore}
                            alt="AppStore"
                            className="app-store-image"
                        />
                    </div>
                    <div>
                        <img
                            src={playStore}
                            alt="PlayStore"
                            className="google-play-image"
                        />
                    </div>
                </div>
            </div>
            <div className=" justify-center text-center w-full text-xs text-gray mt-10 mx-auto">
                <span className=" pr-5 pb-5">
                    <Link>Meta</Link>
                </span>
                <span className=" pr-5">
                    <Link>About</Link>
                </span>
                <span className=" pr-5">
                    <Link>Blog</Link>
                </span>
                <span className=" pr-5">
                    <Link>Jobs</Link>
                </span>
                <span className=" pr-5">
                    <Link>Help</Link>
                </span>
                <span className=" pr-5">
                    <Link>API</Link>
                </span>
                <span className=" pr-5">
                    <Link>Privacy</Link>
                </span>
                <span className=" pr-5">
                    <Link>Terms</Link>
                </span>
                <span className=" pr-5">
                    <Link>Top Account</Link>
                </span>
                <span className=" pr-5">
                    <Link>Location</Link>
                </span>
                <span className=" pr-5">
                    <Link>Instagram Lite</Link>
                </span>
                <span className=" pr-5">
                    <Link>Contact</Link>
                </span>
            </div>
            <div className="w-full justify-center text-center mt-4 text-xs text-gray">
                2023 Instagram from Meta
            </div>
        </div>
    );
};

export default SignUp;
