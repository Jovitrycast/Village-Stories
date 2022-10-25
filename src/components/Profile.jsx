import React from "react";
import '../assets/stylesheets/Profile.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {BiEdit} from 'react-icons/bi'
import {MdOutlineManageAccounts,MdLogout} from 'react-icons/md'
import {FiSettings} from 'react-icons/fi'
import {BsThreeDots} from 'react-icons/bs'
import { faHeart,faImage, faFaceSmile,faComment } from "@fortawesome/free-regular-svg-icons";
import { Form,Button,InputGroup } from "react-bootstrap";
import Home from './Home.jsx'
import Footer from './Footer.jsx'

import {signOut} from "firebase/auth";
import {auth} from '../firebase-config';
import {useNavigate} from "react-router-dom";

export default function Profile(props){
    const navigate = useNavigate();
    console.log('current user name is', props.user);
    const logout = async () => {
        await signOut(auth);
        navigate('/signin');
      };
    return (
        <>
        <Home user={props.user}/>
        <div className="profile-page">
            <div className="profile-section">
                <div className="profile-container shadow-sm">
                    <img src={props.user.photoURL} alt="" className="profile-page-avatar"/>
                    <div className="profile-details">
                        <p className="profile-name">{props.user.displayName}</p>
                        <div className="profile-stats">
                            <p><span>2</span> Posts</p>
                            <p><span>100</span> Followers</p>
                            <p><span>25</span> Following</p>
                        </div>
                    </div>
                </div>
                <div className="profile-menu shadow-sm">
                    <ul>
                        <li><span className="option-icon"><BiEdit/></span>Edit Profile</li>
                        <li><span className="option-icon"><MdOutlineManageAccounts/></span>  Account Settings</li>
                        <li><span className="option-icon"><FiSettings/></span>Manage Post</li>
                        <li onClick={() => logout()}><span className="option-icon"><MdLogout/></span>Log Out</li>
                    </ul>
                </div>
            </div>
            <div className="profile-post">
            <div className="create-post shadow-sm">
                <Form className="w-100">
                    <div className="type-content">
                        <img className="avatar" src={props.user.photoURL} alt="" />
                            <InputGroup>
                                <Form.Control className="input-post" type="text" placeholder="Tell us about your village adventure"/>
                            </InputGroup>
                    </div>
                    <div className="preview-post">
                       {/* {imagePreview}  */}
                    </div>
                    <div className="create-post-actions">
                        <Form.Label className="m-0 d-flex" htmlFor="upload-image"><FontAwesomeIcon className="upload-icon" icon={faImage}/></Form.Label>
                        <Form.Control className="upload-image" id="upload-image" type="file"/>
                        <FontAwesomeIcon icon={faFaceSmile}/>
                        <Button className="post-btn" type="submit" variant="primary" size="sm">Post</Button>
                    </div>
                </Form>
            </div>

                <div className="post shadow-sm">
                    <div className="author">
                        <img className="profile-post" src={props.user.photoURL} alt="" />
                        <p className="name">{props.user.displayName}</p>
                        <BsThreeDots className="dot-menu"/>
                    </div>
                    <img className="img-post" src={require('../assets/images/uploaded-images/Wolf-01.png')} alt="" />
                    <div className="details">
                        <FontAwesomeIcon className="post-icon" icon={faHeart} />
                        <FontAwesomeIcon className="post-icon" icon={faComment} />
                        <p><span className="name">Jovit Castillo </span> Sample caption, sample post</p>
                        <p className="time">8 HOURS AGO</p>
                    </div>
                    <Form>
                    <InputGroup className="w-100" controlid="comment">
                        <Form.Control className="input-comment" type="text" placeholder="Add a comment..."/>
                        <Button variant="">post</Button>
                    </InputGroup>
                    </Form>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}