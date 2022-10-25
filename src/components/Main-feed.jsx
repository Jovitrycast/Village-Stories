import React from "react";
import Activities from "./Activity.jsx";
import Suggestion from "./Suggestion.jsx";
import Feed from "./Feed.jsx";
import Explore from "./Explore.jsx";
import Home from "./Home.jsx";
import Footer from "./Footer.jsx";
import '../assets/stylesheets/Main-feed.css'
export default function(props) {
    console.log('props user', props.user)
    return(
        <>
            <Home user={props.user}/>
            <div className="main">
                <div className="left-panel">
                    <Explore user={props.user}/>
                </div>
                <Feed user={props.user}/>
                <div className="right-panel">
                    <Activities/>
                    <Suggestion/>
                    <div className="responsive-explore">
                        <Explore/>
                    </div>
                    <Footer/>
                </div>
            </div>
        </>
    )
}