import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "./axios";
import requests from "./Request"  


function Banner(){
   const [movie, setMovie] = useState([]);

   useEffect(() =>{
    async function fetchData(){
        const request = await axios.get(requests.fetchNetflixOiginals);
        //const request = await axios.get(requests.fetchTrending);
        setMovie(
            request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
            ]
        );
        return request;
    }
    fetchData();
   }, []);
   console.log(movie);

    function truncate(string, n) {
         return string?.length > n ? string.substr(n, n-1) + '...' : string;
    }

    return (<header className = "banner" style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
        
    }}>
        <div className="banner__contents">
            <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
            <div className="banner__buttons">
                <button className="banner__button">play</button>
                <button className="banner__button">My List</button>
            </div>
            <h1 className="banner__description">
            {truncate(movie?.overview, 150)} 
            </h1>
        </div>
        <div className="banner--fadeBottom" />
    </header>
    )

}
export default Banner;