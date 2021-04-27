import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
   
    function playAudio() {
        const phoneticsAudio = new Audio(props.phonetic.audio);
        phoneticsAudio.play();
    }

    return(
        <div className="Phonetics">     
           <i className="fas fa-volume-up play-icon" onClick={playAudio}></i>
           <span className="text">{" "}{props.phonetic.text}</span>  
        </div>
    );
}