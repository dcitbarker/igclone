import React from "react";
import "../index.css";
const appStore = require("../assets/appStore.png");
const playStore = require("../assets/playStore.png");
const facebook = require("../assets/facebook.png");
const iglogo = require("../assets/ig-logo.png");

export const Signin = () => {
    return (
        <div className="pb-10 container center mx-auto mt-10">
            <div className="flex flex-col">
                <div className="flex flex-col mx-auto border border-gray pl-5 pr-5 pb-5">
                    <div className="mx-auto">
                        <img
                            src={iglogo}
                            alt="Instagram"
                            className="instagram-logo"
                        />
                    </div>
                    <div className="mx-auto mt-1">
                        <input
                            className="text-sm"
                            type="text"
                            placeholder="Phone number, username or email"
                        />
                    </div>
                    <div className="mx-auto mt-3">
                        <input
                            className=" text-sm"
                            type="text"
                            placeholder="Password"
                        />
                    </div>
                    <div className="login-button-box">
                        <button className="login-button">Login</button>
                    </div>
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
                <div className="forgotten-password-box">
                    <p className="forgotten-password-link">
                        Forgotten your password?
                    </p>
                </div>
            </div>
            <div className="box-2">
                <p>
                    Don't have an account?{" "}
                    <span className="sign-up-span">Sign Up</span>
                </p>
            </div>
            <div className="get-app-box">
                <p>Get the app.</p>
            </div>
            <div className="app-store-google-play-box">
                <img
                    src={appStore}
                    alt="AppStore"
                    className="app-store-image"
                />
                <img
                    src={playStore}
                    alt="PlayStore"
                    className="google-play-image"
                />
            </div>
        </div>
    );
};
