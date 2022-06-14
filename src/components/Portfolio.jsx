import React from "react";
import agency from '../images/agency.png';
import githubfinder from '../images/githubfinder.png';
import bathSpa from '../images/bathClone.png';
import last from '../images/last.png';
import socialcard from '../images/socialcard.png';
import webset from '../images/webset.png';

function Portfolio() {

    return (
        <div className="portfolio-container" id="portfolio">
            <div className="portfolio-group">
                <a href="https://dev-freitas.github.io/webset/" className="item-card">
                    <img src={webset} alt="web" />
                    <p>Webset</p>
                </a>
                <a href="https://dev-freitas.github.io/Github-User-Finder/" className="item-card">
                    <img src={githubfinder} alt="web" />
                    <p>Github User Finder</p>
                </a>
                <a href="https://dev-freitas.github.io/Bath-Spa-Clone/" className="item-card">
                    <img src={bathSpa} alt="web" />
                    <p>Bath Spa Clone</p>
                </a>
                <a href="https://dev-freitas.github.io/last/" className="item-card">
                    <img src={last} alt="web" />
                    <p>Another Project</p>
                </a>
                <a href="https://dev155.d299p753gg2dmk.amplifyapp.com/" className="item-card">
                    <img src={socialcard} alt="web" />
                    <p>Social Card</p>
                </a>
                <a href="https://dev-freitas.github.io/aulascr/" className="item-card">
                    <img src={agency} alt="web" />
                    <p>Agency</p>
                </a>
            </div>
        </div>
  )
}

export default Portfolio
