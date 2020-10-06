import React, { useContext } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CategoryContext} from '../../App';

import './Home.css'
const Home = (props) => {
    const [work , setWork] = useContext(CategoryContext);
    const { img, description } = props.category;

   
    return (
        <div className="display">
            <Link to = "/register">
            <Card  
                style={{
                    width: "14rem",
                    margin: "10px",
                    background: "#421FCF",
                    color: "#fff",
                    textDecoration: "none"
                }}
                onClick = { () => setWork(props.category)}
                >
                <Card.Img variant="top" src={img} className="img"/>
                <Card.Body style={{textDecoration: "none"}}>
                    <Card.Title >{description}</Card.Title>
                </Card.Body>
            </Card>
            </Link>
        </div>
    
    );
};

export default Home;