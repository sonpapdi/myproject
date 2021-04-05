import React from 'react';
// import './App.css';
import Axios from "axios";
import { useState } from "react";
import { Link } from 'react-router-dom';
import '../css/Login.css';
import { Button, Table, Form, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Singup from './Singup';
import Navbar from '../components/Navbar';
// import BootstrapTable from 'react-bootstrap-table-next';
function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [employeeList, setEmployeeList] = useState([]);

    // const addlogin = () => {
    //     Axios.post("http://localhost:8001/login", {
    //         email: email,
    //         password: password,
    //     }).then(() => {
    //         setEmployeeList([
    //             ...employeeList,
    //             {
    //                 email: email,
    //                 password: password,
    //             },
    //         ]);
    //     });
    // };

    const getlogin = () => {
        Axios.get("http://localhost:8001/login").then((response) => {
            setEmployeeList(response.data);
            console.log(response, "aaa")
        });
    }
    return (
        <div className="App">
            <div className="information">
                <div class="row" className="Title">
                    Login user
                    </div>

                <div class='row' className="intext">

                    <label>Email:</label>
                    <input
                        type="text"
                        onChange={(event) => {
                            setEmail(event.target.value);
                        }}
                    />
                    <br />
                    <label>Password:</label>
                    <input
                        type="text"
                        onChange={(event) => {
                            setPassword(event.target.value);
                        }}
                    />
                </div>
            </div>

            {/* <button onClick={getlogin(email, password)}>Log in</button> */}
            <div>
                <button type="submit">Submit</button>
            </div>

        </div>

    );
}
export default Login;
