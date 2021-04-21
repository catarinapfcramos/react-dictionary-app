import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary(){
    const [word, setWord] = useState("");

    function handleSubmit(event){
        event.preventDefault();
        alert(word);
    }
    function searchWord(event){
        event.preventDefault();
        setWord(event.target.value);
    }
    return (
    <div className="Dictionary">
        <form onSubmit={handleSubmit}>
          <input type="search" className ="search-form" placeholder="Search for a word" onChange={searchWord}/>
          <input type="submit" className ="btn btn-secondary btn-sm search-button" value="Search" />
        </form>
    </div>
    )
}