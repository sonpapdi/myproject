import React from 'react';
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from "axios";
import '../css/Leadmaster.css';
// import { Button, Table, Form, Row, Col } from 'react-bootstrap';
import { Redirect, useHistory } from 'react-router-dom';

const Leadmaster = () => {
    let history = useHistory();
    const [user, setUser] = useState({
        companyname: "", gstno: "", panno: "", emailid: "", website: "", phoneno: "", faxno: "", contactperson: "", contactpersondesignation: "",
        statename: "", cityname: "", invoiceaddress: "", notes: "", invoicesource: "", assignto: ""
    });
    const { companyname, gstno, panno, emailid, website, phoneno, faxno, contactperson, contactpersondesignation, statename, cityname, invoiceaddress, notes, invoicesource, assignto } = user;

    const onInputChange = e => {

        setUser({ ...user, [e.target.name]: e.target.value })
        console.log(e.target.val);
    };
    const onsubmit = async e => {
        e.preventDefault();
        await Axios.post("http://localhost:8001/leadmaster", user);
        history.push("/Leadmasterview");
    };

    // const [employeeList, setEmployeeList] = useState([]);    
    return (
        <div className="wrapper">
            <div className="form-wrapper">
                <form className="form" onSubmit={e => onsubmit(e)}>
                    <h1>Lead User</h1>
                    <div className="companyname">
                        <label htmlFor="companyname">companyName</label>
                        <input
                            type="text"
                            name="companyname"
                            value={companyname}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="gstno">
                        <label htmlFor="gstno">GSTNo</label>
                        <input

                            type="text"
                            name="gstno"
                            // className="form-input"
                            value={gstno}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="panno">
                        <label htmlFor="panno">panno</label>
                        <input
                            // placeholder="panno"
                            type="text"
                            name="panno"
                            // className="form-input"
                            value={panno}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="emailid">
                        <label htmlFor="emailid">Emailid</label>
                        <input
                            type="text"
                            name="emailid"
                            value={emailid}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="website">
                        <label htmlFor="website"> WebSite</label>
                        <input
                            // placeholder="website"
                            type="text"
                            name="website"
                            // className="form-input"
                            value={website}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="phoneno">
                        <label htmlFor="phoneno">phoneno</label>
                        <input
                            // placeholder="phonenumber"
                            type="number"
                            name="phoneno"
                            // className="form-input"
                            value={phoneno}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="faxno">
                        <label htmlFor="faxno">faxno</label>
                        <input
                            // placeholder="faxno"
                            type="number"
                            name="faxno"
                            // className="form-input"
                            value={faxno}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="contactperson">
                        <label htmlFor="contactperson">contactperson</label>
                        <input
                            // placeholder="contactperson"
                            type="text"
                            name="contactperson"
                            // className="form-input"
                            value={contactperson}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="contactpersondesignation">
                        <label htmlFor="contactpersondesignation"> contactpersondesignation</label>
                        <input
                            // placeholder="contactpersondesignation"
                            type="text"
                            name="contactpersondesignation"
                            // className="form-input"
                            value={contactpersondesignation}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="statename">
                        <label htmlFor="statename">statename</label>
                        <input
                            // placeholder="statename"
                            type="text"
                            name="statename"
                            // className="form-input"
                            value={statename}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="cityname">
                        <label htmlFor="cityname">cityname</label>
                        <input
                            // placeholder="cityname"
                            type="text"
                            // onChange={(event) => {
                            //     setCityName(event.target.value);
                            // }}
                            name="cityname"
                            // className="form-input"
                            value={cityname}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="invoiceaddress">
                        <label htmlFor="invoiceaddress">invoiceaddress</label>
                        <input
                            // placeholder="invoiceaddress"
                            type="text"
                            name="invoiceaddress"
                            // className="form-input"
                            value={invoiceaddress}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="notes">
                        <label htmlFor="notes">notes</label>
                        <input
                            // placeholder="notes"
                            type="text"
                            name="notes"
                            className="form-input"
                            value={notes}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="invoicesource">
                        <label htmlFor="invoicesource">invoicesource</label>
                        <input
                            // placeholder="invoicesource"
                            type="text"
                            name="invoicesource"
                            className="form-input"
                            value={invoicesource}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="assignto">
                        <label htmlFor="assignto">assignto</label>
                        <input
                            type="text"
                            // onChange={(event) => {
                            //     setAssignTo(event.target.value);
                            // }}
                            name="assignto"
                            className="form-input"
                            value={assignto}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="createAccount">
                        <button>Add User</button>
                    </div>
                </form>
            </div>
        </div >

    );
}
export default Leadmaster;