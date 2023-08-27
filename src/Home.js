import { useState } from "react";
import Movie from "./Movie";
import "./Movie.css";
import Search from "./Search";


const Home = () => {
    const [data, setData] = useState([]);
    const fetchApi = async (InputData) => {
        const url = `https://moviesdatabase.p.rapidapi.com/titles/search/title/${InputData}?exact=false&titleType=movie`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '1eac9d21e0mshe3ad9e998479329p121858jsnb97af688a1a6',
                'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
            }
        };
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result);
            
            const {results} = result;
            setData(results);
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    }
    return(
    <>
    <Search fetchApi={fetchApi}/>
    <div className="container">
        < Movie data={data} />
    </div>
    </>
    )
}
 
export default Home;