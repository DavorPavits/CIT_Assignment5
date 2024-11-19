import React, {useEffect, useState} from "react";
import { auth } from "../auth";

function Main(){
    const url = "https://api.themoviedb.org/3/search/person";
    const searchString = "?query=tom";
    const imagePath = "https://image.tmdb.org/t/p/w500";
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: auth,
      },
    };

    //fetch Persons
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(url + searchString, options)
        .then(res => res.json())
        .then(data => setData(data.results))
        .catch(err=>console.log(err))
    }, []);
    
    //Set Index
    const [index, setIndex] = useState(0);
    const handleClick = (i) =>{
        setIndex(i);
    }

    //Set person to render
    const currPerson = data[index];
    return(
        <div className="App">
            {currPerson  ? 
            <div key={currPerson.Id}>
                <Person name={currPerson}/>
                <ImagesFor currId={currPerson.id}/>
                <KnownFor data={currPerson.known_for}/>
            </div>
            : 
            (<p>No results</p>)}
            <DataButtons data={data} handleClick={handleClick}/>
        </div>
    );
}

function Person({name}){
    return(
        <div>
            <h1>{name.name}</h1>
            <span>Known for: {name.known_for_department}</span>
        </div>
    );
}

function DataButtons({data, handleClick}){
    return(
        <div className="pagination">
            {data.map((p, i) => (
                <button key={i} onClick={()=>handleClick(i)}>{i+1}</button>
            ))}
        </div>
    );
    
}

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

function ImagesFor({currId}){
    const url = 'https://api.themoviedb.org/3/person/'
    const id = currId
    const f = '/images'
    
    const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: auth,
        },
      };

      const [profiles, setProfiles] = useState([]);
      useEffect(() => {
          fetch(url+id+f, options)
          .then(res => res.json())
          .then(profiles => setProfiles(profiles.profiles))
          .catch(err=>console.log(err))
      }, [options, id]);
    
    
      const baseUrl = 'https://image.tmdb.org/t/p/w45'
      return (
        <div className="image-container">
            {profiles?.map((p ,i)=> (
                <div key={i} className="image-item">
                    <img 
                    key={p.file_path}
                    src={baseUrl + p.file_path}
                    alt={p.name}/>
                </div>
            ))}
        </div>
      );
}

export default Main;