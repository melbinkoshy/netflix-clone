import React from 'react'
import '../styles/Row.css'
import axios from '../axios'
function Row({title,fetchURL,isLargeRow=false}) {
  const base_url="https://image.tmdb.org/t/p/original/"
  const [movies,setMovies]=React.useState([])
  React.useEffect(()=>{
    async function fetchData(){
      try{
        const request=await axios.get(fetchURL);
      setMovies(request.data.results);
      }
      catch(error){
        console.log(error)
      }
    }
    fetchData()
  },[fetchURL]);

  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className='row_posters'>
        {movies.map((movie) =>(
          ((isLargeRow && movie.poster_path) || 
          (!isLargeRow && movie.backdrop_path))&&(
            <img 
          className={`row_poster ${isLargeRow && "row_posterLarge"}`}
          key={movie.id}  
          src={`${base_url}${
            isLargeRow?movie.poster_path:movie.backdrop_path
          }`} alt={movie.name}/>
          )

          
        ))}
      </div>
      
    </div>
  )
}

export default Row
