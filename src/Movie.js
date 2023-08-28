import { Link } from "react-router-dom";
import "./Movie.css";

const Movie = ({data}) => {
    const newData = data.filter((values) => {
        return (values.Poster !== "N/A");
    })
        return(
            <>
            {
            newData.map((results)=>{
            const {Title, Year, imdbID, Poster} = results;
            const imgNotFound = "https://www.masflair.com/wp-content/themes/consultix/images/no-image-found-360x250.png";
            const imgNotFoundSmall = "https://static.thenounproject.com/png/3674271-200.png";
            return (
                <Link to={`movie/${imdbID}`} key={imdbID}>
                    <div className="my-card">
                        <img src={Poster || imgNotFound} alt="" className="my-big-img" />
                        <div className="my-img-text-container">
                            <img src={Poster || imgNotFoundSmall} alt="" className="my-small-img" />
                            <div className="my-heading-rating">
                                <p className="my-heading">{Title}</p>
                                <p className="my-rating">{Year}</p>
                            </div>
                        </div>
                        <div className="my-card-content">
                            <p className="my-release-year">Released</p>
                            <p className="my-genre">Genre</p>
                            <p className="my-country">Country</p>
                        </div>
                        <div className="my-card-content card-values">
                            <p className="my-release-year">{Year}</p>
                            <p className="my-genre">{imdbID}</p>
                            <p className="my-country">USA</p>
                        </div>
                    </div>
                </Link>
                );
        })}
            </>
        )
    
}

export default Movie;