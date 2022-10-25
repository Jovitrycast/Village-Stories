import React from "react";
import '../assets/stylesheets/Explore.css'

export default function Navs(){
    return(
        <div className="explore-card shadow-sm">
            <p className="topics-head">Topics</p>
            <ul>
                <li>#WebFundamentals</li>
                <li>#AdvancedPHP</li>
                <li>#AdvancedJavascript</li>
                <li>#FrontendTrack</li>
                <li>#BackendTrack</li>
            </ul>
        </div>
    )
}