import { useState } from "react";
import Movie from "./Movie";
import "./Movie.css";
import Search from "./Search";


const Home = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [noMovieFound, setNoMovieFound] = useState(false);

    const fetchApi = async (InputData) => {
        const url = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${InputData}`;

        try {
            setNoMovieFound(false);
            setIsLoading(true);
            const response = await fetch(url);
            const result = await response.json();
            console.log(result);
            const {Search, Response} = result;
            setData(Search);

            if(Response === "False"){
                setNoMovieFound(true);
                setIsLoading(false);
            }

        } catch (error) {
            console.error(error);
        }
        setIsLoading(false);
    }
    if(noMovieFound === false)
        return(
        <>
        <Search fetchApi={fetchApi}/>
        {isLoading ? <div className="loader-container">
                    <i className="fa-solid fa-spinner fa-spin"></i>
                </div> : <div className="my-container">
            < Movie data={data} />
        </div> }
        </>
        );
    else{
        return(
        <>
            <Search fetchApi={fetchApi}/>
            <div className="noMovieFound">
                <img src="https://miro.medium.com/v2/resize:fit:800/1*hFwwQAW45673VGKrMPE2qQ.png" alt="" />
            </div>
        </>
            
        );
    }
}
 
export default Home;