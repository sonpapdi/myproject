import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import '../css/LeadmasterView.css';
import { Link } from 'react-router-dom';
import LeadmasterUpdate from './LeadmasterUpdate'

const LeadmasterView = () => {
    const [users, setUser] = useState([]);
    useEffect(() => {
        const GetData = async () => {
            const result = await axios('http://localhost:8001/leadmaster');
            setUser(result.data);
            console.log(result.data)
        };
        GetData();

    }, []);

    //     loadUsers();
    // }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:8001/leadmaster");
        setUser(result.data.reverse());
        console.log(result.data)
    };

    const deleteUser = async id => {
        await axios.delete(`http://localhost:8001/leadmaster/${id}`);
        loadUsers();
    };

    return (
        <div className="wrapper">
            <div className="form-wrapper">
                <div >
                    <h1>Lead User</h1>
                    <td>
                        <button onClick={loadUsers}>Show Employees</button>
                    </td>
                    <Link className="btn btn-outline-pramary" to="/Leadmaster"> Add User</Link>

                    <div className="table-container">
                        <div className="py-4">
                            <h1>Home Page</h1>

                            <table class="table border shadow">
                                <thead class="thead-dark">
                                    <tr>
                                        <th>#</th>
                                        <th>companyname  </th>
                                        <th>gstno </th>
                                        <th>panno </th>
                                        <th>emailid </th>
                                        <th>website </th>
                                        <th>phoneno </th>
                                        <th>faxno </th>
                                        <th>contactperson </th>
                                        <th>contactpersondesignation </th>
                                        <th>statename </th>
                                        <th>cityname </th>
                                        <th>invoiceaddress </th>
                                        <th>notes </th>
                                        <th>invoicesource </th>
                                        <th>assignto </th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map((user, index) => (
                                        <tr>
                                            <th scope="row">{index + 1}</th>
                                            <td >{user.companyname}</td>
                                            <td> {user.gstno}</td>
                                            <td> {user.panno}</td>
                                            <td> {user.emailid}</td>
                                            <td> {user.website}</td>
                                            <td> {user.phoneno}</td>
                                            <td> {user.faxno}</td>
                                            <td> {user.contactperson}</td>
                                            <td> {user.contactpersondesignation}</td>
                                            <td> {user.statename}</td>
                                            <td> {user.cityname}</td>
                                            <td> {user.invoiceaddress}</td>
                                            <td> {user.notes}</td>
                                            <td> {user.invoicesource}</td>
                                            <td> {user.assignto}</td>
                                            <td>
                                                <Link class="btn btn-primary mr-2" to={`/users/${user.id}`}>
                                                    View
                                                 </Link>
                                            </td>

                                            <td>
                                                <Link
                                                    class="btn btn-outline-primary mr-2"
                                                    to={`/leadmasterupdate/edit/${user.id}`}
                                                >
                                                    Edit
                                                 </Link>

                                            </td>
                                            <td>
                                                <Link
                                                    class="btn btn-danger"
                                                    onClick={() => deleteUser(user.id)}
                                                >
                                                    Delete
                                                  </Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    );
}

export default LeadmasterView;