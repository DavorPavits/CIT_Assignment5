import React from "react";

function KnownFor({data}){
    
    const imagePath = 'https://image.tmdb.org/t/p/w1280'

    return(
        
        <div>
            <h2>Known Movies</h2>
            <div className="image-container">
            {/* {data.map((p,i) => (
                <div key={i} className="card">
                    <span className="info" ><i><h3>{p.title}{p.name}</h3> Release Date:{p.release_date?.slice(0, 4)} Rating:{parseFloat(p.vote_average.toFixed(1))}</i></span>
                    <p>{p.overview}</p>
                </div>
            ))} */}


            {data.map(m => (
              <div key={m.id}>
                <div className='card'>
                  <img src={imagePath + m.poster_path} alt={m.title} />
                  <div className='descriptions'>
                    <h2>{m.title}</h2>
                    <span className='info'> Realesed:{m.release_date?.slice(0,4)}  <strong className='rating'>{parseFloat(m.vote_average.toFixed(1))}</strong>
                    </span>
                    <p>{m.overview}</p>
                  </div>
                </div>
              </div>
            ))}
            </div>
        </div>
    );
}

export default KnownFor;