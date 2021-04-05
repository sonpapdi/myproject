import '../css/Productsmaster.css';
import Axios from "axios";
import { useState } from "react";
import React from 'react';
import useForm from './useForm';
import validate from './validateInfo';
import { Button, Table, Form, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Productsmaster() {
    const { handleChange, values, handleSubmit, errors } = useForm(validate);

    const [Username, setusername] = useState("");
    const [Email, setemail] = useState("");
    const [Password, setpassword] = useState("");
    const [Password2, setpassword2] = useState("");
    const [employeeList, setEmployeeList] = useState([]);


    const addProductsmaster = () => {
        Axios.post("http://localhost:8001/Productsmaster", {

            Username: Username,
            Email: Email,
            Password: Password,
            Password2: Password2,
        }).then(() => {
            setEmployeeList([
                ...employeeList,
                {
                    Username: Username,
                    Email: Email,
                    Password: Password,
                    Password2: Password2,

                },
            ]);
        });
    };

    const getlogin = () => {
        Axios.get("http://localhost:8001/Productsmaster").then((response) => {
            setEmployeeList(response.data);
        });
    };

    return (
        <div className="wrapper">
            <div className="form-wrapper">
                <form className="form" onSubmit={handleSubmit}>
                    <h1>Create Account</h1>
                    <div className="username">
                        <label htmlFor="username">Username</label>
                        <input

                            id="username"
                            type="text"
                            name="username"
                            className="form-input"
                            placeholder="Enter Your UserName"
                            value={values.username}
                            onChange={handleChange}
                        />
                        {errors.username && <p>{errors.username}</p>}

                    </div>
                    <div className="email">
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            className="form-input"
                            placeholder="Enter Your Email"
                            value={values.email}
                            onChange={handleChange}
                        />
                        {errors.email && <p>{errors.email}</p>}

                    </div>
                    <div className="password">
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            type="password"

                            name="password"
                            className="form-input"
                            placeholder="Enter Your password"
                            value={values.password}
                            onChange={handleChange}
                        />
                        {errors.password && <p>{errors.password}</p>}
                    </div>
                    <div className="password2">
                        <label htmlFor="password2">Password</label>
                        <input
                            id="password2"
                            type="password"
                            name="password2"
                            className="form-input"
                            placeholder="Enter Your conform password"
                            value={values.password2}
                            onChange={handleChange}
                        />
                        {errors.password2 && <p>{errors.password2}</p>}
                    </div>
                    <div className="createAccount">
                        <Button type="submit" onClick={addProductsmaster}>SingIn</Button>
                        <Button onClick={getlogin}>Show Employees</Button>
                        <small>Already Have an Account?</small>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Productsmaster;