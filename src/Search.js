import { useState } from "react";
import "./Search.css";
const Search = ({fetchApi}) => {
    const [InputData, setInputData] = useState('');
    return ( 
        <div className="search-container">
            <div className="search-box">
                <button className="btn-search" onClick={() => fetchApi(InputData)}><i className="fas fa-search"></i></button>
                <input type="text" className="input-search" 
                    placeholder="Search Movie..." onChange={(event) => setInputData(event.target.value)}></input>
            </div>
        </div>
     );
}
 
export default Search;