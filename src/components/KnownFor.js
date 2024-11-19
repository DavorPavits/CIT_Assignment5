import React from "react";

function KnownFor({data}){
    return(
        
        <div>
            <h2>Known Movies</h2>
            {data.map((p,i) => (
                <div key={i}>
                    <span><i><h3>{p.title}{p.name}</h3> Release Date:{p.release_date?.slice(0, 4)} Rating:{parseFloat(p.vote_average.toFixed(1))}</i></span>
                    <p>{p.overview}</p>
                </div>
            ))}
        </div>
    );
}

export default KnownFor;