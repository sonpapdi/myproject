
import Axios from "axios";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

// import { CardBody, Input } from "reactstrap";

function ProductItem(props) {
    // const { handleChange, values, handleSubmit, errors } = useForm(validate);
    const [inquiry, setInquiry] = useState({
        Inquiryno: "", Date: "", Contactperson: "", Assignto: "", Product: "", Productno: "", Price: "", Disc: "",
        Oty: "", CGST: "", SGST: "", IGST: "", Total: "", Unit: "", Description: ""
    })

    // const [employeeList, setEmployeeList] = useState([]);

    const apiUrl = "";
    const insertemployee = (e) => {
        e.preventDefault();
        debugger;
        const data = {
            Inquiryno: inquiry.Inquiryno, Date: inquiry.Date, Contactperson: inquiry.Contactperson, Assignto: inquiry.Assignto,
            Product: inquiry.Product, Productno: inquiry.Productno, Price: inquiry.Price, Disc: inquiry.Disc, Oty: inquiry.Oty, CGST: inquiry.CGST,
            SGST: inquiry.SGST, IGST: inquiry.IGST, Total: inquiry.Total, Unit: inquiry.Unit, Description: inquiry.Description
        }
        Axios.post(apiUrl, data)
            .then((result) => {
                props.history.push('/InquiryList')
            });
    }
    const onChange = (e) => {
        e.persist();
        debugger;
        setInquiry({ ...inquiry, [e.target.name]: e.target.value });
    }

    return (

        <div className="Container">

            <nav className="btn btn-warning navbar navbar-expand-lg navheader">

                <div className="collapse navbar-collapse" >

                    <ul className="navbar-nav mr-auto">

                        <li className="nav-item">

                            <Link to={'/Createemployee'} className="nav-link">Add Employee</Link>

                        </li>

                        <li className="nav-item">

                            <Link to={'/inquirtlist'} className="nav-link">Employee List</Link>

                        </li>

                    </ul>

                </div>

            </nav>
            <br />
            <div className="app flex-row align-items-center">

                <Container>

                    <Row className="justify-content-center">

                        <Col md="12" lg="10" xl="8">
                            <Card className="mx-4">
                                <CardBody className="p-4">
                                    <Form onSubmit={insertemployee}>
                                        <h1>Register</h1>
                                        <InputGroup className="mb-3"   >
                                            <Input type="text" name="Inquiryno" id="Inquiryno" placeholder="Inquiryno" value={inquiry.Inquiryno} onChange={onChange}></Input>
                                        </InputGroup>
                                        <InputGroup className="mb-3"   >
                                            <Input type="text" className="Date" id="Date" placeholder="Date" value={inquiry.Date} onChange={onChange}></Input>
                                        </InputGroup>
                                        <InputGroup className="mb-3"   >
                                            <Input type="text" name="Contactperson" id="Contactperson" placeholder="Contactperson" value={inquiry.Contactperson} onChange={onChange}></Input>
                                        </InputGroup>
                                        <InputGroup className="mb-3"   >
                                            <Input type="text" name="Assignto" id="Assignto" placeholder="Assignto" value={inquiry.Assignto} onChange={onChange}></Input>
                                        </InputGroup>
                                        <InputGroup className="mb-3"   >
                                            <Input type="text" name="Product" id="Product" placeholder="Product" value={inquiry.Product} onChange={onChange}></Input>
                                        </InputGroup>
                                        <InputGroup className="mb-3"   >
                                            <Input type="text" name="Productno" id="Productno" placeholder="Productno" value={inquiry.Productno} onChange={onChange}></Input>
                                        </InputGroup>
                                        <InputGroup className="mb-3"   >
                                            <Input type="text" name="Price" id="Price" placeholder="Price" value={inquiry.Price} onChange={onChange}></Input>
                                        </InputGroup>
                                        <InputGroup className="mb-3"   >
                                            <Input type="text" name="Disc" id="Disc" placeholder="Disc" value={inquiry.Disc} onChange={onChange}></Input>
                                        </InputGroup>
                                        <InputGroup className="mb-3"   >
                                            <Input type="text" namr="Oty" id="Oty" placeholder="Oty" value={inquiry.Oty} onChange={onChange}></Input>
                                        </InputGroup>
                                        <InputGroup className="mb-3"   >
                                            <Input type="text" name="CGST" id="CGST" placeholder="CGST" value={inquiry.CGST} onChange={onChange}></Input>
                                        </InputGroup>
                                        <InputGroup className="mb-3"   >
                                            <Input type="text" name="SGST" id="SGST" placeholder="SGST" value={inquiry.SGST} onChange={onChange}></Input>
                                        </InputGroup>
                                        <InputGroup className="mb-3"   >
                                            <Input type="text" name="IGST" id="IGST" placeholder="IGST" value={inquiry.IGST} onChange={onChange}></Input>
                                        </InputGroup>
                                        <InputGroup className="mb-3"   >
                                            <Input type="text" name="Total" id="Total" placeholder="Total" value={inquiry.Total} onChange={onChange}></Input>
                                        </InputGroup>

                                        <InputGroup className="mb-3"   >
                                            <Input type="text" name="Unit" id="Unit" placeholder="Unit" value={inquiry.Unit} onChange={onChange}></Input>
                                        </InputGroup>

                                        <InputGroup className="mb-3"   >
                                            <Input type="text" name="Description" id="Description" placeholder="Description" value={inquiry.Description} onChange={onChange}></Input>
                                        </InputGroup>




                                        <CardFooter className="p-4">

                                            <Row>

                                                <Col xs="12" sm="6">

                                                    <Button type="submit" className="btn btn-info mb-1" block><span>Save</span></Button>

                                                </Col>

                                                <Col xs="12" sm="6">

                                                    <Button className="btn btn-info mb-1" block><span>Cancel</span></Button>

                                                </Col>

                                            </Row>

                                        </CardFooter>


                                    </Form>

                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>

            </div>
        </div>
    );
}
export default ProductItem;