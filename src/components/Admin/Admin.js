import React, { useEffect, useState } from 'react';
import { Col, Container, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../logos/Group 1329.png'
import trash from '../../logos/trash-2 9.png'
const Admin = () => {
    const [volunteer, setVolunteer] = useState([]);

    const options = {  day: 'numeric', month: 'long',year: 'numeric' };

    useEffect(() => {
        fetch(' https://stark-plains-12330.herokuapp.com/getVolunteer')
        .then(res => res.json())
        .then(data => setVolunteer(data))
    },[volunteer])

    const deleteItem = (id) => {
        fetch(` https://stark-plains-12330.herokuapp.com/deleteItem/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }
    return (
        <div>
            <Container className="mt-3" fluid="md">
            <div className="container">
                <div className="row">
                    <div className="col-3 mr-3">
                        <Navbar.Brand className="mr-auto justify-content-center" href="#home">
                            <img src={logo} height="50" className="d-inline-block align-top" alt="logo" />
                        </Navbar.Brand>
                        
                    </div>
                    <div className="col-8 mt-3">
                        <div>
                            <h4>Volunteer Register List</h4>
                        </div>
                        <div className="mt-3">
                            <div class="alert alert-light" role="alert">
                                <Row>
                                    <Col xs={2}><h6>Name</h6></Col>
                                    <Col xs={4}><h6>Email ID</h6></Col>
                                    <Col xs={2}><h6>Registration Date</h6></Col>
                                    <Col xs={3}><h6>Volunteer List</h6></Col>
                                    <Col xs={1}><h6>Action</h6></Col>
                                </Row>
                            </div>
                            <div id="list">
                                {
                                    volunteer.map( user =>  <Row className="p-2">
                                                                <Col xs={2}><h6>{user.name}</h6></Col>
                                                                <Col xs={4}><h6>{user.email}</h6></Col>
                                                                <Col xs={2}>{(new Date(user.startDate).toLocaleDateString(undefined, options))}</Col>
                                                                <Col xs={3}><h6>{user.project}</h6></Col>
                                                                <Col xs={1}><button onClick={() => deleteItem(`${user._id}`)} className="trash"><img src={trash} height="25" className="d-inline-block align-top" alt="logo" /></button></Col>
                                                            </Row>) 
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
        </div>
    );
};

export default Admin;