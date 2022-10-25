import React, {useState} from 'react';
import SignUp from './SignUp.jsx'
import Login from './Login.jsx'
import MainFeed from './Main-feed.jsx'
import Profile from './Profile.jsx'
import '../assets/stylesheets/Login.css';
import '../assets/stylesheets/App.css'
import { BrowserRouter as Router, Switch, Routes, Route, Link } from 'react-router-dom';

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase-config";

export default function App(){

    const [user, setUser] = useState({});

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
      });

    return (
        <Router>
            <Routes>
                <Route path="/" element={<SignUp/>}/>
                <Route exact path="/signup" element={<SignUp/>}/>
                <Route exact path="/signin" element={<Login/>}/>
                <Route exact path='/profile' element={<Profile user={user}/>}></Route>
                <Route exact path='/home' element={<MainFeed  user={user}/>}></Route>
            </Routes>
        </Router>
    )
}