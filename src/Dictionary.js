import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary(){
    const [word, setWord] = useState("");

    function handleResponse(response) {
        console.log(response.data[0]);
    }
    
    function handleSubmit(event){
        event.preventDefault();
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`;
        axios.get(apiUrl).then(handleResponse);
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