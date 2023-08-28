import "./SingleMovie.css";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";


const SingleMovie = () => {
    let { id } = useParams();
    const [imdbData, setimdbData] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const showFullDetails = async () =>{
        const imdbIdUrl = `https://omdbapi.com/?i=${id}&apikey=${process.env.REACT_APP_API_KEY}`;
        try {
            const response = await fetch(imdbIdUrl);
            const result = await response.json();
            setimdbData(result);
        } catch (error) {
            console.error(error);
        }
        setIsLoading(false);
    }
    useEffect(()=>{
        showFullDetails()
    },[]);

    if(!isLoading)
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
                    <NavLink to="/" className="back-btn">
                        <i class="fa-solid fa-circle-arrow-left single-backBtn"></i>
                    </NavLink>
                    <a target="_blank" href={`https://www.imdb.com/title/${imdbData.imdbID}`}><i className="fa-brands fa-imdb single-imdbBtn" /></a>
                </div>
                <div className="single-img">
                    <img className="big-img" src={imdbData.Poster} alt="" />
                </div>
            </div>
        </div>
    );
    else{
        return (
            <div className="loader-container">
                <i className="fa-solid fa-spinner fa-spin"></i>
            </div>
        );
    }
        
        
}
 
export default SingleMovie;