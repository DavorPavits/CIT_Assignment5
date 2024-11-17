import React, {useState, useEffect} from "react";
import { auth } from "./auth";

function Movie(){
const url = 'https://api.themoviedb.org/3/discover/movie';
  const imagePath = 'https://image.tmdb.org/t/p/w1280'
  const options = {
    method: 'GET',
    headers: {
      accept: 'applicaiton/json',
      Authorization: auth
    }
  };
  
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(url, options)
    .then(res => res.json())
    .then(data => setData(data.results))
    .catch(err => console.log(err));
  },[]);
  

  return(
      
      <div className='App'>
        {/**Header  */}
        <header className='App-header'>
          <h1>Movies</h1>
        </header>
        
        <div>
          <div className='movie-container'>
            {data.map(m => (
              <div key={m.id}>
                <div className='card'>
                  <img src={imagePath + m.poster_path} alt={m.title} />
                  <div className='descriptions'>
                    <h2>{m.title}</h2>
                    <span className='info'> ({m.release_date})
                         <span className='rating'>{parseFloat(m.vote_average.toFixed(1))}</span>
                    </span>
                    <p>{m.overview}</p>
                    <button>
                      <i className='fab fa-youtube'></i>
                      Play trailer on youtube
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/**Footer  */}
        <footer className='App-footet'>
          <p>&copy; 2024 Movie Database. All rights reserved.</p>
          <p>Created by Group3_CITS</p>
        </footer>
    </div>
  );
}


export default Movie;