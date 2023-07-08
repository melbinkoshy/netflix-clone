  import React from 'react'
  import '../styles/Banner.css'
  import axios from '../axios';
  import requests from '../request';
  function Banner() {
    const [movie,setMovie]=React.useState([]);
    React.useEffect(()=>{
      async function fetchData(){
        const request =await axios.get(requests.fetchNetflixOriginals );
        setMovie(
          request.data.results[
            Math.floor(Math.random()*request.data.results.length-1)
          ]
        )
        return request;
      }
      fetchData();
    },[])
    function truncate(string,n){
        return string?.length >n?string.substr(0,n-1)+'...':string;

    }
    return (
      <header className='banner'
              style={{
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundSize: "cover",
                backgroundPosition: "cover center"
              }}>
        <div className="banner-contents">
          <h1 className="banner-title">
            {movie?.title||movie?.name||movie?.original_name}
          </h1>
          <div className="banner-buttons">
            <button className='banner-button'>Play</button>
            <button className='banner-button'>My List</button>
          </div>
          <div className="banner-description">
            {truncate(movie?.overview,150)}
          </div>
        </div>
        <div className="banner-fadebottom">

        </div>
      </header>
    )
  }
  
  export default Banner
  