import React,{useState} from "react";
import '../assets/stylesheets/Suggestion.css'
import { AiOutlineUserAdd }from 'react-icons/ai'

export default function Explore(){
    return(
        <>
            <div className="suggestion-wrap">
                <div className="suggestion-container shadow-sm">
                    <div className="head">
                        <p className="title">Suggested For You</p>
                        <p className="text-primary">See all</p>
                    </div>
                    <div className="suggestion-section">
                        <div className="suggested-villagers">
                            <img className="suggestion-avatar" src={require('../assets/images/suggestion-avatars/anya.webp')} alt="avatar" />
                            <div className="suggestion-detail">
                                <p className="name">Anya Forger</p>
                                <p className="name-sub">Suggested for you</p>
                            </div>
                            <div className="add-icon"><AiOutlineUserAdd/></div>
                        </div>
                        <div className="suggested-villagers">
                            <img className="suggestion-avatar" src={require('../assets/images/suggestion-avatars/yor.webp')} alt="avatar" />
                            <div className="suggestion-detail">
                                <p className="name">Yor Forger</p>
                                <p className="name-sub">Suggested for you</p>
                            </div>
                            <div className="add-icon"><AiOutlineUserAdd/></div>
                        </div>
                        <div className="suggested-villagers">
                            <img className="suggestion-avatar" src={require('../assets/images/suggestion-avatars/lloyd.webp')} alt="avatar" />
                            <div className="suggestion-detail">
                                <p className="name">Lloyd Forger</p>
                                <p className="name-sub">Suggested for you</p>
                            </div>
                            <div className="add-icon"><AiOutlineUserAdd/></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}