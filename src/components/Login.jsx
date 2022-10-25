import React, {useState} from "react";
import '../assets/stylesheets/Login.css';
import Form from 'react-bootstrap/Form';
import { Button } from "react-bootstrap";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import {
    createUserWithEmailAndPassword, 
    updateProfile, 
    signInWithEmailAndPassword 
} from 'firebase/auth';

import {auth} from '../firebase-config';
import {Link, useNavigate} from "react-router-dom";

export default function Login() {
    const [loginEmail,setLoginEmail] = useState('');
    const [loginPassword,setLoginPassword] = useState('');
    const navigate = useNavigate();

    const login =  async (e) => {
        e.preventDefault()
        try {
            const user = await signInWithEmailAndPassword(
              auth,
              loginEmail,
              loginPassword
            );
            navigate("/home")
          } catch (error) {
            console.log(error.message);
          }
    }

    return(
        <div className="login-page">
                <div className="logo">
                    <img src={require('../assets/images/logo.png')} alt="" />
                    <div className="title">
                        <h1>Village Stories</h1>
                        <p>Share your Village88 Journey</p>
                    </div>
                </div>
                <div className="form-container">
                    <Form className="shadow login-form" onSubmit={(e) => login(e)}>
                    <h2>Village Stories</h2>
                    
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <FloatingLabel controlId="floatingInput" label="Email address">
                            <Form.Control type="email" placeholder="Enter email" onChange={(e) => setLoginEmail(e.target.value)} />
                        </FloatingLabel>
                    </Form.Group>
    
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <FloatingLabel controlId="floatingPassword" label="Password">
                            <Form.Control type="password" placeholder="Password" onChange={(e) => setLoginPassword(e.target.value)}/>
                        </FloatingLabel>
                    </Form.Group>
                    <Button variant="primary" type="submit" className="login-btn">
                        Log In
                    </Button>
                    <p className="text-center m-0 mt-3 mb-2">Need an account?</p>
                    <Link to="/signup">
                        <Button variant="success" className="signUp-btn">
                            Create new account
                        </Button>
                    </Link>
                    </Form>
                </div>
           </div>
    )
}