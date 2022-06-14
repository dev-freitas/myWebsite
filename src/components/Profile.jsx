import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import me from '../images/AvatarMaker.png'
function Profile() {

    return (
        <div className='profile-container'>
            <div>
                <img className='profile-img' src={me} alt=""/>
                <h2>Fabio Freitas</h2>
                <h1>Web Developer</h1>
            </div>
            <div>
                <div>
                    <h2>A bit about me</h2>
                    <p>I am a self-taught front end web developer. After working many years as a construction/ refurbishment specialist on my own company which I built from scratch, I decided it was time for a change. Since then, I've been studying and applying myself to become a web developer. It's been a tough journey but I was transformed along the way. Not only I became a competent web developer but I discovered soft skills, such as, attention to detail, ability to focus, problem solving, and others, that I didn't know I had. I am excited to announce that I am open for business.</p>
                </div>
                <div className='portfolio-items'>
                    <i><FaHtml5 /></i>
                    <i><FaCss3Alt /></i>
                    <i><FaReact /></i>
                    <i><SiJavascript /></i>
                </div>
            </div>
        </div>
  )
}

export default Profile
