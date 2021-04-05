
// import "./App.css";
import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/LeadmasterUpdate.css';
import axios from "axios";
import { Button, Table, Form, Row, Col } from 'react-bootstrap';
import { useHistory, useParams } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import LeadmasterView from './LeadmasterView';

const LeadmasterUpdate = () => {
    // const [employeeList, setEmployeeList] = useState([]);

    let history = useHistory();
    const { id } = useParams();

    const [user, setUser] = useState({
        companyname: "", gstno: "", panno: "", emailid: "", website: "", phoneno: "", faxno: "", contactperson: "", contactpersondesignation: "", statename: "", cityname: "",
        invoiceaddress: "", notes: "", invoicesource: "", assignto: "",
    });
    const {
        companyname,
        gstno,
        panno,
        emailid,
        website,
        phoneno,
        faxno,
        contactperson,
        contactpersondesignation,
        statename,
        cityname,
        invoiceaddress,
        notes,
        invoicesource,
        assignto } = user;

    console.log('companyname', companyname);

    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        loadUser();
    }, []);


    const onSubmit = async e => {
        e.preventDefault();
        await axios.put(`http://localhost:8001/leadmaster/${id}`, user);
        history.push("/LeadmasterView");

    };
    const loadUser = async () => {
        const result = await axios.get(`http://localhost:8001/leadmaster/${id}`);
        // console.log(result.data, 'tittal'); //outputs correct total
        setTimeout(() => {
            setUser(result.data[0]);
        }, 10);
    };

    return (
        <div className="wrapper">
            <div className="form-wrapper">
                <form onSubmit={e => onSubmit(e)}>
                    <div className="companyname">
                        <label htmlFor="companyname">companyName</label>
                        <input
                            // placeholder="CompanyName"
                            type="text"
                            name="companyname"
                            value={companyname}
                            onChange={e => onInputChange(e)}
                        />
                    </div>

                    <div className="gstno">
                        <label htmlFor="gstno">GSTNo</label>
                        <input
                            // placeholder="gstno"
                            type="text"
                            name="gstno"
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
                            value={panno}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    {/* <div className="row"> */}
                    <div className="emailid">
                        <label htmlFor="emailid">emailid</label>
                        <input
                            // placeholder="emailid"
                            type="text"
                            value={emailid}
                            name="emailid"
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="website">
                        <label htmlFor="website">WebSite</label>
                        <input
                            // placeholder="website"
                            type="text"
                            value={website}
                            name="website"
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    {/* </div> */}

                    <div className="phoneno">
                        <label htmlFor="phoneno">phoneno</label>
                        <input
                            // placeholder="phonenumber"
                            type="number"
                            value={phoneno}
                            name="phoneno"
                            onChange={e => onInputChange(e)}
                        />
                    </div>

                    <div className="faxno">
                        <label htmlFor="faxno"> faxno</label>
                        <input
                            // placeholder="faxno"
                            type="number"
                            value={faxno}
                            name="faxno"
                            onChange={e => onInputChange(e)}
                        />
                    </div>

                    <div className="contactperson">
                        <label htmlFor="contactperson">contactperson</label>
                        <input
                            // placeholder="contactperson"
                            type="text"
                            value={contactperson}
                            name="contactperson"
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="contactpersondesignation">
                        <label htmlFor="contactpersondesignation"> contactpersondesignation</label>
                        <input
                            // placeholder="contactpersondesignation"
                            type="text"
                            value={contactpersondesignation}
                            name="contactpersondesignation"
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="statename">
                        <label htmlFor="statename">statename</label>
                        <input
                            // placeholder="statename"
                            type="text"
                            value={statename}
                            name="statename"
                            onChange={e => onInputChange(e)}
                        />
                    </div>

                    <div className="cityname">
                        <label htmlFor="cityname">cityname</label>
                        <input
                            // placeholder="cityname"
                            type="text"
                            value={cityname}
                            name="cityname"
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="invoiceaddress">
                        <label htmlFor="invoiceaddress">invoiceaddress</label>
                        <input
                            // placeholder="invoiceaddress"
                            type="text"
                            value={invoiceaddress}
                            name="invoiceaddress"
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="notes">
                        <label htmlFor="notes">notes</label>
                        <input
                            // placeholder="notes"
                            type="text"
                            value={notes}
                            name="notes"
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="invoicesource">
                        <label htmlFor="invoicesource">invoicesource</label>
                        <input
                            // placeholder="invoicesource"
                            type="text"
                            value={invoicesource}
                            name="invoicesource"
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="assignto">
                        <label htmlFor="assignto">assignto</label>
                        <input
                            type="text"
                            value={assignto}
                            name="assignto"
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <button className="btn btn-warning btn-block">Update User</button>
                </form>
            </div>

        </div>

    );
};
export default LeadmasterUpdate;