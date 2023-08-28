import { NavLink } from "react-router-dom";
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
            return (
                <NavLink to={`movie/${imdbID}`} key={imdbID}>
                    <div className="my-card">
                        <img src={Poster} alt="" className="my-big-img" />
                        <div className="my-img-text-container">
                            <img src={Poster} alt="" className="my-small-img" />
                            <div className="my-heading-rating">
                                <p className="my-heading">{Title}</p>
                                <p className="my-rating">{Year}</p>
                            </div>
                        </div>
                    </div>
                </NavLink>
                );
        })}
            </>
        )
    
}

export default Movie;