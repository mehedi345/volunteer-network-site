import React from 'react';
import { Card } from 'react-bootstrap';
import Header from '../Header/Header';
import './Home.css'
const Home = (props) => {
    const { img, description } = props.category;
    return (
    
        
        <div className="display">
            <Card 
                style={{
                    width: "14rem",
                    margin: "10px",
                    background: "#421FCF",
                    color: "#fff",
                }}>
                <Card.Img variant="top" src={img} className="img"/>
                <Card.Body>
                    <Card.Title>{description}</Card.Title>
                </Card.Body>
            </Card>
        </div>
    
    );
};

export default Home;