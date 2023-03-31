import React from "react";
import { Route, Routes } from "react-router-dom";
import { Signin } from "./pages/Signin";
import SignUp from "./pages/SignUp";
import { Home } from "./pages/Home";

export const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Signin />} />
                <Route path="signup" element={<SignUp />} />
                <Route path="home" element={<Home />} />
            </Routes>
        </>
    );
};
