/**
 * Created by akaur on 6/16/18.
 */
import React from "react";
import {Link} from "react-router-dom";

const HomePage = () =>(
    <div className ="ui container">
        <h1>Ashutosh Kaur </h1>
        <Link to="/login">Login</Link>

    </div>
);

export default HomePage;