import { useState } from "react";
import Movie from "./Movie";
import "./Movie.css";
import Search from "./Search";


const Home = () => {
    const [data, setData] = useState([]);
    const fetchApi = async (InputData) => {
        const url = `http://www.omdbapi.com/?apikey=233f54be&s=${InputData}`;

        try {
            const response = await fetch(url);
            const result = await response.json();
            console.log(result);
            const {Search} = result;
            const {Response} = result;
            if(Response)
                setData(Search);
                

        } catch (error) {
            console.error(error);
        }
    }
    return(
    <>
    <Search fetchApi={fetchApi}/>
    <div className="my-container">
        < Movie data={data} />
    </div>
    </>
    )
}
 
export default Home;