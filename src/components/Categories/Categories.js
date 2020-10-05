import React, { useContext, useEffect, useState } from 'react';
import { CategoryContext } from '../../App';
import Header from '../Header/Header';
import Home from '../Home/Home';
import './Categories.css'
const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://stark-plains-12330.herokuapp.com/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className="display">
            <Header />
            <h2>I Grow Helping People in NEED!</h2>
             <form action="">
                 <input type="search"  placeholder="Search" className="search"/>
                 
             </form>
            {
                categories.map(category => <Home key={category.id} category={category}></Home>)
            }
        </div>
    );
};

export default Categories;