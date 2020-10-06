import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { CategoryContext, UserContext } from '../../App';
import logo from '../../logos/Group 1329.png';
import './Register.css';

const Register = () => {
    const [loggedInUser] = useContext(UserContext);
    const [work, setWork] = useContext(CategoryContext);
    const history = useHistory();
    const { register, handleSubmit } = useForm();
  
    const onSubmit = (data) => {
        const newInfo = { ...loggedInUser, ...data, ...work};
       
        fetch(" https://stark-plains-12330.herokuapp.com/addInfo", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newInfo),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            });
        history.push("/event");
    };
    return (
        <div>
            <div className="area">
                <img src={logo} style={{ height: "80px", marginLeft:"400px"}} alt="" />
                <div className="register-area">
                    <h2>Register as a Volunteer</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input name="fullName" defaultValue={loggedInUser.name} ref={register} className="control"/>
                        <br />
                        <input  name="email" defaultValue={loggedInUser.email} ref={register} className="control"/>
                        <br />
                        <input name="date" className="control" type="date" defaultValue="test" ref={register}/>
                        <br />
                        <input name="Description"  placeholder="Description" ref={register} className="control"/>
                        <br />
                        <input  name="volunteerName" defaultValue={work.description} ref={register} className="control"/>
                        <br />
                        <Button style={{ width: "100%" }} type="submit" size="lg" block>
                            Submit
                      </Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;