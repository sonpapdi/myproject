import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const User = () => {
    const [user, setUser] = useState({
        companyname: "", gstno: "", panno: "", emailid: "", website: "", phoneno: "", faxno: "", contactperson: "", contactpersondesignation: "", statename: "", cityname: "",
        invoiceaddress: "", notes: "", invoicesource: "", assignto: "",
    });
    const { id } = useParams();
    useEffect(() => {
        loadUser();
    }, []);
    const loadUser = async () => {
        const res = await axios.get(`http://localhost:8001/leadmaster${id}`);
        setUser(res.data);
    };
    return (
        <div className="container py-4">
            <Link className="btn btn-primary" to="/">
                back to Home
      </Link>
            <h1 className="display-4">User Id: {id}</h1>
            <hr />
            <ul className="list-group w-50">
                <li className="list-group-item">name: {user.companyname}</li>
                <li className="list-group-item">gstno: {user.gstno}</li>
                <li className="list-group-item">panno: {user.panno}</li>
                <li className="list-group-item">emailid: {user.emailid}</li>
                <li className="list-group-item">website: {user.website}</li>
                <li className="list-group-item">phoneno: {user.phoneno}</li>
                <li className="list-group-item">faxno: {user.faxno}</li>
                <li className="list-group-item">contactperson: {user.contactperson}</li>
                <li className="list-group-item">contactpersondesignation: {user.contactpersondesignation}</li>
                <li className="list-group-item">statename: {user.statename}</li>
                <li className="list-group-item">cityname: {user.cityname}</li>
                <li className="list-group-item">invoiceaddress: {user.invoiceaddress}</li>
                <li className="list-group-item">notes: {user.notes}</li>
                <li className="list-group-item">invoicesource: {user.invoicesource}</li>
                <li className="list-group-item">assignto: {user.assignto}</li>
            </ul>
        </div>
    );
};

export default User;