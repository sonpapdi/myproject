import '../css/ProductItem.css';
import Axios from "axios";
import { useState } from "react";
import React from 'react';
import useForm from './useForm';
import validate from './validateInfo';
import { Button, Table, Form, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function ProductItem() {
    const { handleChange, values, handleSubmit, errors } = useForm(validate);
    const [ShotName, setShotName] = useState("");
    const [BrandName, setBrandName] = useState("");
    const [Code, setCode] = useState("");
    const [Name, setName] = useState("");
    const [Unit, setUnit] = useState([]);
    const [Qty, setQty] = useState([]);
    const [SRate, setSRate] = useState([]);
    const [PRate, setPRate] = useState([]);
    const [HSNCD, setHSNCD] = useState([]);
    const [CGST, setCGST] = useState([]);
    const [SGST, setSGST] = useState([]);
    const [IGST, setIGST] = useState([]);
    const [employeeList, setEmployeeList] = useState([]);
    const addProductsmaster = () => {
        Axios.post("http://localhost:8001/Productsmaster", {
            ShotName: ShotName,
            BrandName: BrandName,
            Code: Code,
            Name: Name,
            Unit: Unit,
            Qty: Qty,
            SRate: SRate,
            PRate: PRate,
            HSNCD: HSNCD,
            CGST: CGST,
            SGST: SGST,
            IGST: IGST,

        }).then(() => {
            setEmployeeList([
                ...employeeList,
                {
                    ShotName: ShotName,
                    BrandName: BrandName,
                    Code: Code,
                    Name: Name,
                    Unit: Unit,
                    Qty: Qty,
                    SRate: SRate,
                    PRate: PRate,
                    HSNCD: HSNCD,
                    CGST: CGST,
                    SGST: SGST,
                    IGST: IGST,
                },
            ]);
        });
    };
    const getlogin = () => {
        Axios.get("http://localhost:8000/Productsmaster").then((response) => {
            setEmployeeList(response.data);
        });
    };

    return (
        <div className="wrapper">
            <div className="form-wrapper">
                <form className="form" onSubmit={handleSubmit}>
                    <h1>Product Master</h1>
                    <div className="ShotName">
                        <label htmlFor="ShotName">ShotName</label>
                        <input
                            id="ShotName"
                            type="text"
                            name="ShotName"
                            className="form-input"
                            placeholder="Enter Your ShotName"
                            value={values.ShotName}
                            onChange={handleChange}
                        />
                        {errors.ShotName && <p>{errors.ShotName}</p>}
                    </div>

                    <div className="BrandName">
                        <label htmlFor="BrandName">BrandName</label>
                        <input
                            id="BrandName"
                            type="BrandName"
                            name="BrandName"
                            className="form-input"
                            placeholder="Enter Your BrandName"
                            value={values.BrandName}
                            onChange={handleChange}
                        />
                        {errors.BrandName && <p>{errors.BrandName}</p>}
                    </div>

                    <div className="Code">
                        <label htmlFor="Code">Code</label>
                        <input
                            id="Code"
                            type="Code"
                            name="Code"
                            className="form-input"
                            placeholder="Enter Your Code"
                            value={values.Code}
                            onChange={handleChange}
                        />
                        {errors.Code && <p>{errors.Code}</p>}
                    </div>

                    <div className="Name">
                        <label htmlFor="Name">Name</label>
                        <input
                            id="Name"
                            type="Name"
                            name="Name"
                            className="form-input"
                            placeholder="Enter Your  Name"
                            value={values.Name}
                            onChange={handleChange}
                        />
                        {errors.Name && <p>{errors.Name}</p>}
                    </div>

                    <div className="Unit">
                        <label htmlFor="Unit">Unit</label>
                        <input
                            id="Unit"
                            type="Unit"
                            name="Unit"
                            className="form-input"
                            placeholder="Enter Your Unit"
                            value={values.Unit}
                            onChange={handleChange}
                        />
                        {errors.Unit && <p>{errors.Unit}</p>}
                    </div>

                    <div className="Qty">
                        <label htmlFor="Qty">Qty</label>
                        <input
                            id="Qty"
                            type="Qty"
                            name="Qty"
                            className="form-input"
                            placeholder="Enter Your  Qty"
                            value={values.Qty}
                            onChange={handleChange}
                        />
                        {errors.Qty && <p>{errors.Qty}</p>}
                    </div>

                    <div className="SRate">
                        <label htmlFor="SRate">SRate</label>
                        <input
                            id="SRate"
                            type="SRate"
                            name="SRate"
                            className="form-input"
                            placeholder="Enter Your SRate"
                            value={values.SRate}
                            onChange={handleChange}
                        />
                        {errors.SRate && <p>{errors.SRate}</p>}
                    </div>

                    <div className="HSNCD">
                        <label htmlFor="HSNCD">HSNCD</label>
                        <input
                            id="HSNCD"
                            type="HSNCD"
                            name="HSNCD"
                            className="form-input"
                            placeholder="Enter Your  HSNCD"
                            value={values.HSNCD}
                            onChange={handleChange}
                        />
                        {errors.HSNCD && <p>{errors.HSNCD}</p>}
                    </div>

                    <div className="CGST">
                        <label htmlFor="CGST">CGST</label>
                        <input
                            id="CGST"
                            type="CGST"
                            name="CGST"
                            className="form-input"
                            placeholder="Enter Your CGST"
                            value={values.CGST}
                            onChange={handleChange}
                        />
                        {errors.CGST && <p>{errors.CGST}</p>}
                    </div>

                    <div className="SGST">
                        <label htmlFor="SGST">SGST</label>
                        <input
                            id="SGST"
                            type="SGST"
                            name="SGST"
                            className="form-input"
                            placeholder="Enter Your  SGST"
                            value={values.SGST}
                            onChange={handleChange}
                        />
                        {errors.SGST && <p>{errors.SGST}</p>}
                    </div>

                    <div className="IGST">
                        <label htmlFor="IGST">IGST</label>
                        <input
                            id="IGST"
                            type="IGST"
                            name="IGST"
                            className="form-input"
                            placeholder="Enter IGST"
                            value={values.IGST}
                            onChange={handleChange}
                        />
                        {errors.IGST && <p>{errors.IGST}</p>}
                    </div>
                    <div className="createAccount">
                        {/* <Button type="submit" onClick={addProductsmaster}>SingIn</Button> */}

                        <table>
                            <th>
                                <div className="Viewbtn">
                                    <Button onClick={getlogin}>View</Button>
                                </div>
                            </th>
                            <th>
                                <div className="savebtn">
                                    <Button onClick={getlogin}>Save</Button>
                                </div>
                            </th>
                            <th>
                                <Button onClick={getlogin}>Update</Button>
                            </th>
                            <th>
                                <Button onClick={getlogin}>Delete</Button>
                            </th>
                            <th>
                                <Button onClick={getlogin}>Exit</Button>
                            </th>
                        </table>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default ProductItem;