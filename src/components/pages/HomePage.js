/**
 * Created by akaur on 6/16/18.
 */
import React from "react";
import {Link} from "react-router-dom";

const HomePage = () =>(
    <div>
        <h1>Home Page</h1>
        <Link to="/login">Login</Link>

    </div>
);

export default HomePage;