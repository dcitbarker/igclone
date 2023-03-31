import React from "react";
import "../index.css";
import { Link } from "react-router-dom";
const appStore = require("../assets/appStore.png");
const playStore = require("../assets/playStore.png");
const facebook = require("../assets/facebook.png");
const iglogo = require("../assets/ig-logo.png");

export const Signin = () => {
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
                    <div className="mx-auto mt-1">
                        <input
                            className="text-sm border-gray-light bg-neutral-200"
                            type="text"
                            placeholder="Phone number, username or email"
                        />
                    </div>
                    <div className="mx-auto mt-3">
                        <input
                            className="text-sm border-gray-light bg-neutral-200"
                            type="text"
                            placeholder="Password"
                        />
                    </div>
                    <div className="login-button-box mt-2 mx-auto">
                        <button className="login-button">Login</button>
                    </div>
                    <div className="lines-box">
                        <div className="line-1"></div>
                        <div className="or-box">OR</div>
                        <div className="line-2"></div>
                    </div>
                    <div className="fb-box">
                        <span>
                            <img
                                src={facebook}
                                alt="facebook"
                                className="facebook-logo"
                            />
                        </span>
                        <p className="fb-link">Log in with Facebook</p>
                    </div>
                    <div className="mx-auto text-sm mt-5">
                        <p className="text-xs">Forgotten your password?</p>
                    </div>
                </div>
                <div className="flex flex-col mx-auto mt-3 border rounded-sm border-gray-light pl-4 pr-4 pb-4 pt-4 w-80">
                    <p>
                        <span className="text-sm">Don't have an account? </span>
                        <span className="sign-up-span text-sky-600 font-bold text-sm">
                            <Link to="SignUp">Sign up</Link>
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
