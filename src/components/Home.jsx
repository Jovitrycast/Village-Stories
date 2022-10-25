import React from "react";
import '../assets/stylesheets/Home.css'
import Navbar from 'react-bootstrap/Navbar';
import { Form,InputGroup} from "react-bootstrap";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons"
import {Routes,Route,Link} from 'react-router-dom';
import {AiOutlineHome, AiOutlinePlusSquare, AiOutlineHeart} from 'react-icons/ai'
import MainFeed from './Main-feed.jsx';
import Profile from './Profile.jsx'

export default function Home(props) {

    return (
        <>
            <header>
                <Navbar className="nav-bar">
                    <Navbar.Brand className="brand"><img className="brand-logo" src={require('../assets/images/logo.png')} alt="" />Village Stories</Navbar.Brand>
                    <InputGroup className="search">
                        <InputGroup.Text controlid="inputGroup-sizing-sm" className="search-icon"><FontAwesomeIcon icon={faMagnifyingGlass} /></InputGroup.Text>
                        <Form.Control
                        aria-label="Search"
                        aria-describedby="inputGroup-sizing-sm"
                        className="input-search"
                        placeholder="Search for topics, villagers, stories..."
                        />
                    </InputGroup>
                    <div className="navs">
                    <Link to="/home" className='links'><AiOutlineHome/></Link>
                    <Link to="" className='links'><AiOutlinePlusSquare/></Link>
                    <Link to="" className='links'><AiOutlineHeart/></Link>
                    <Link to="/profile" className='links'><img className="nav-profile" src={props.user.photoURL} alt="" /></Link> 
                    </div>
                </Navbar>
            </header>
                <Routes>
                    <Route exact path='/home' element={<MainFeed/>}></Route>
                    <Route exact path='/profile' element={<Profile setlogIn={props.setlogIn}/>}></Route>
                </Routes>
        </>
    )
}