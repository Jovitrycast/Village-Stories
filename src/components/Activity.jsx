import React from "react";
import '../assets/stylesheets/Activities.css'
export default function Activities() {
    return(
        <div className="activities">
            <div className="activity-card shadow-sm">
                <div className="head">
                    <p className="title">Activity</p>
                    <p className="text-primary">See all</p>
                </div>
                <p className="stories-about-you">Stories With You</p>
                <div className="mentions">
                    <img className="mentions-img" src={require('../assets/images/uploaded-images/spiral dots-01.png')} alt="" />
                    <div className="details-mention">
                        <p className="mention-title">Mentions</p>
                        <p className="mention-sub">2 stories mentioned you</p>
                        <p className="mention-sub text-primary">45 minutes ago</p>
                    </div>
                </div>
                <p className="title">New</p>
                <div className="activity">
                    <img className="activity-avatar" src={require('../assets/images/suggestion-avatars/yor.webp')} alt="avatar" />
                    <div className="activity-detail">
                        <p className="name">Yor Forger</p>
                        <p className="activity-content">Liked your story</p>
                        <p className="activity-content text-primary">30 minutes ago</p>
                    </div>
                </div>
            </div>
        </div>
    )
}