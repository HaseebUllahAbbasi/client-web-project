import React from "react";
import './Extra.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const ExtraScreen = () => {
    return (
    <div>
    <hr></hr>
            <div className="container-fluid     ">
            <div className="row ">
                <div className="col-md-3 offset-md-1  " id="extra_enjoy">
                    <h1 id="" class="our-story-card-title" data-uia="animation-card-title">Enjoy on your TV.</h1>
                    <h2 id="" class="our-story-card-subtitle" data-uia="our-story-card-subtitle">Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h2>
                </div>
                <div className="col-md-3">
                    <img alt="" class="our-story-card-img" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" data-uia="our-story-card-img" style={{height:"20rem"}}></img>
                    
                </div>
                <div className="col-md-3">
                <div class="our-story-card-animation">
                        <div class="our-story-card-animation-text">
                        <video class="our-story-card-video" autoplay="1" playsinline="1" muted="0" loop="1"><source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" type="video/mp4"/></video>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    </div>)

}
export default ExtraScreen;