import React, { useState } from "react";
import '../assets/stylesheets/Login.css'
import Form from 'react-bootstrap/Form';
import { Button } from "react-bootstrap";
import {
    createUserWithEmailAndPassword, 
    updateProfile, 
    signInWithEmailAndPassword 
} from 'firebase/auth';
import {auth, storage} from '../firebase-config';
import {Link, useNavigate } from "react-router-dom";
import { ref, uploadBytes, getDownloadURL} from 'firebase/storage';

export default function SignUp() {
    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [registerEmail,setRegisterEmail] = useState('');
    const [registerPassword,setRegisterPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const [avatar,setAvatar] = useState(null);
    const register = async (e) => {
        e.preventDefault()
        try{
            const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
            console.log('user logged',user);
            if(avatar !== null){
                const imageRef = ref(storage, `avatars/${user.user.email}`)
                uploadBytes(imageRef, avatar).then(
                    async snapshot =>{
                        const downloadURL = await getDownloadURL(imageRef);
    
                        await updateProfile(auth.currentUser, {
                            photoURL: downloadURL
                        })
                    }
                );
            }
            updateProfile(auth.currentUser, {
                displayName: `${firstName} ${lastName}`
            })
            navigate("/home")
        }catch (error) {
                console.log(error.message)
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
                <Form className="shadow login-form" onSubmit={(e) => register(e)}>
                    <h2>Join Village Stories</h2>
                    <Form.Group className="mb-3">
                        <Form.Control type="text" placeholder="First name" onChange={(e) => setFirstName(e.target.value)}/>
                    </Form.Group>
    
                    <Form.Group className="mb-3">
                        <Form.Control type="text" placeholder="Last name" onChange={(e) => setLastName(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="text" placeholder="Email" onChange={(e) => setRegisterEmail(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Control type="password" placeholder="Password" onChange={(e) => setRegisterPassword(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Control type="password" placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)}/>
                    </Form.Group>
                    <Form.Label>Upload Avatar</Form.Label>
                    <Form.Group className="mb-3">
                        <Form.Control type="file" onChange={(e) => setAvatar(e.target.files[0])}/>
                    </Form.Group>

                    <Button variant="success" type="submit" className="login-btn">
                        Sign Up
                    </Button>
                    <p className="text-center m-0 mt-3 mb-2">Already have an account?</p>
                    <Link to="/signin">
                        <Button variant="primary" className="login-btn">
                            Sign In
                        </Button>
                    </Link>
                </Form>
            </div>
        </div>
    )
}