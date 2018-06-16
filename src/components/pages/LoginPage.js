/**
 * Created by akaur on 6/16/18.
 */
import React from "react";
import LoginForm from "../forms/LoginForm";

class LoginPage extends React.Component {
    submit = data => console.log(data);

    render() {
        return(
        <div className ="ui container">
                <h1>Opt USA Login</h1>
            <LoginForm submit={this.submit} />
        </div>
    );
    }
}

export default LoginPage;