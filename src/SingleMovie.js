import "./SingleMovie.css";
import { useEffect, useState } from "react";
import Movie from "./Movie";
import { useParams } from "react-router-dom";


const SingleMovie = () => {
    let { id } = useParams();
    const [imdbData, setimdbData] = useState([]);
    const showFullDetails = async () =>{
        const imdbIdUrl = `https://omdbapi.com/?i=${id}&apikey=233f54be`;
        try {
            const response = await fetch(imdbIdUrl);
            const result = await response.json();
            setimdbData(result);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(()=>{
        showFullDetails()
    },[]);

        return ( 
        <div className="single-container">
            <div className="single-card">
                <div className="single-content">
                    <div className="single-upper">
                        <img  className="small-img" src={imdbData.Poster} alt="" />
                        <div className="single-upper-content">
                            <h2 className="single-heading">{imdbData.Title}</h2>
                            <p className="single-rating">{imdbData.imdbRating}/10</p>
                            <p className="single-year">{imdbData.Year}</p>
                            <p className="single-time">{imdbData.Runtime}</p>
                            <p className="single-genre">{imdbData.Genre}</p>
                        </div>
                    </div>
                    <div className="single-lower">
                        <p className="single-summary">{imdbData.Plot}</p>
                    </div>
                    <a href={`https://www.imdb.com/title/${imdbData.imdbID}`}><i className="fa-brands fa-imdb single-backBtn" /></a>
                </div>
                <div className="single-img">
                    <img className="big-img" src={imdbData.Poster} alt="" />
                </div>
            </div>
        </div>
    );
}
 
export default SingleMovie;