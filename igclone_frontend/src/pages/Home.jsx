import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
    return (
        <div>
            <button>
                <Link to="/signin">Sign In Page</Link>
            </button>{" "}
            <button>
                <Link to="/signup">Sign Up Page</Link>
            </button>
        </div>
    );
};
