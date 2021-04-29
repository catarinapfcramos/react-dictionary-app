import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props){
    const [word, setWord] = useState(props.defaultWord);
    const [results, setResults] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const [photos, setPhotos] = useState(null);

    function handleDictionaryResponse(response) {
        setResults(response.data[0]);
    }
    function handlePexelsResponse(response) {
        setPhotos(response.data.photos);
    }
    
    function search() {
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`;
        axios.get(apiUrl).then(handleDictionaryResponse);
        
        let pexelsApiKey = "563492ad6f91700001000001e0076fc7ba044ea2aeabc6bfb142c4c0";
        let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${word}`;
        let headers = { Authorization: `Bearer ${pexelsApiKey}`};
        axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);

    }
    function handleSubmit(event){
        event.preventDefault();  
        search();
    }
    function searchWord(event){
        event.preventDefault();
        setWord(event.target.value);
    }
    function load() {
        setLoaded(true);
        search();
    }

    if (loaded){
         return (
            <div className="Dictionary">
                <section>
                <h1> What word do you want to look for?</h1>
                <form className="form" onSubmit={handleSubmit}>
                <input type="search" className ="search-form" placeholder="Search for a word" onChange={searchWord}/>
                </form>
                <div className="hint">suggested words: car, flower, water, blue </div>
                </section>
                <Results results={results} />
                <Photos photos={photos} results={results}/>
            </div>
            )
    } else {
       load();
       return "Loading..";
    }
}