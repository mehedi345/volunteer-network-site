import React, { useContext, useEffect, useState } from 'react';
import { Button, Col, Container, Media, Nav, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../logos/Group 1329.png';


const EventTask = () => {
    const [item, setItem] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const options = {  day: 'numeric', month: 'long',year: 'numeric' };

    useEffect(() => {
        fetch(' https://stark-plains-12330.herokuapp.com/user?email='+loggedInUser.email, {
            method: 'GET',
            headers: { 
                'Content-Type' : 'application/json',
                authorization : `Bearer ${sessionStorage.getItem('token')}`
            }
        })
        .then(res => res.json())
        .then(data => setItem(data))
    },[item])

    const deleteProject = (id) => {
        console.log(id)
        fetch(`http://localhost:5000/deleteData/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }
    return (
        <Container fluid="md">
            <Navbar bg="transparent" expand="lg">
                <Navbar.Brand className="mr-auto justify-content-center" href="#home">
                    <img src={logo} height="50" className="d-inline-block align-top" alt="logo"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Link to="/home" className="mr-4 link" >Home</Link>
                        <Link  className="mr-4 link" >Donation</Link>
                        <Link  to="/eventTasks" className="mr-4 link" >Events</Link>
                        <Link  className="mr-4 link" >Blog</Link>
                    </Nav>
                        <h5 className="mt-2">{loggedInUser.name}</h5>
                    
                    <Button variant="dark">Admin</Button>
                </Navbar.Collapse>
            </Navbar>
            <Row>
                { item.map(data => <Col>
                                            <Media className="m-3 p-3 d-sm-flex">
                                                <img width={200}  height={200} className="p-3 mr-1" src={data.img} alt="..." />
                                                <Media.Body className="p-3">
                                                    <h5>{data.description}</h5>
                                                    <h5>{(new Date(data.startDate).toLocaleDateString(undefined, options))}</h5>
                                                    <Button onClick={() => deleteProject(`${data._id}`)} className="mr-3 mt-5" variant="danger">Cancel</Button>
                                                </Media.Body>
                                            </Media>
                                        </Col>)
                }
            </Row>
        </Container>
    );
};

export default EventTask;