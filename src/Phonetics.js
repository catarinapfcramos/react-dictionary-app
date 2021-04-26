import React from "react";

export default function Phonetics(props) {
   
    function playAudio() {
        const phoneticsAudio = new Audio(props.phonetic.audio);
        phoneticsAudio.play();
    }

    return(
        <div className="Phonetics">     
           <i className="fas fa-volume-up play-icon" onClick={playAudio}></i>
           <span>{" "}{props.phonetic.text}</span>  
        </div>
    );
}