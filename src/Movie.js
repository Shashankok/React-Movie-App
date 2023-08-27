import "./Movie.css";
const Movie = ({data}) => {
    const newData = data.filter((values) => {
        console.log(values.primaryImage+" this is img");
        return (values.primaryImage !== null && values.titleText !==null);
    })
        return(
            <>
            {
            newData.map((results)=>{
            const {url:imgUrl} = results.primaryImage || 1;
            const {text: movieTitle} = results.titleText || "No text";
            const {year} = results.releaseYear || "No Year";
            const imgNotFound = "https://www.masflair.com/wp-content/themes/consultix/images/no-image-found-360x250.png";
            const imgNotFoundSmall = "https://static.thenounproject.com/png/3674271-200.png";
            return (
                <div className="card">
                    <img src={imgUrl || imgNotFound} alt="" className="big-img" />
                    <div className="img-text-container">
                        <img src={imgUrl || imgNotFoundSmall} alt="" className="small-img" />
                        <div className="heading-rating">
                            <p className="heading">{movieTitle}</p>
                            <p className="rating">{year}</p>
                        </div>
                    </div>
                    <div className="card-content">
                        <p className="release-year">Released</p>
                        <p className="genre">Genre</p>
                        <p className="country">Country</p>
                    </div>
                    <div className="card-content card-values">
                        <p className="release-year">{year}</p>
                        <p className="genre">Drama</p>
                        <p className="country">USA</p>
                    </div>
                </div>
                );
        })}
            </>
        )
    
}

export default Movie;