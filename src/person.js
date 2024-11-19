import React, { useEffect, useState } from "react";
import { auth } from "./auth";

function PersonOfInterest({ name, pictureUrl }) {
  return (
      <div className="card">
      <img src={pictureUrl} alt={name.name} />
      <div className="descriptions">
        <h2>{name.name}</h2>
        <h2>{name.known_for_department}</h2>
      </div>
      </div>
  );
}

function Databutton({data, handleClick}){
  return(
    <div className="load">
      {data.map((person, i) => (
        <button className="load" key={i} onClick={() => handleClick(i)}>{i+1}</button>
      ))}
    </div>
  );
};

  function KnownFor({data}){
    return (
      <div>
        {data.map((p, i) => (
          <div key={i} className="card">
            <span><h3>{p.title}{p.name}</h3> {p.release_date} <i className="rating">{parseFloat(p.vote_average.toFixed(1))}</i></span>
            <p>{p.overview}</p>
          </div>
          
        ))}
      </div>
    );
  }



  function Person() {
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

    const [data, setData] = useState([]);
    useEffect(() => {
      fetch(url + searchString, options)
        .then((res) => res.json())
        .then((data) => setData(data.results))
        .catch((err) => console.log(err));
    });

    const [index, setIndex] = useState(0);

    const filterdData = data.filter(item => item.profile_path);
    const currPerson = filterdData[index];
    
    const handleClick = (i) => {
      setIndex(i);
    }

    const handleClickNext = () => {
      if(index < filterdData.length -1){
        setIndex(index +1);
      }else{
        setIndex(0);
      }
    };
    
    const handleClickPrevious = () =>{
      if(index > 0){
        setIndex(index -1)
      }else{
        setIndex(filterdData.length - 1)
      }
    }

    return(
      <div className="App">
      
      {currPerson ? (
        <div key={currPerson.id} >
          <PersonOfInterest name={currPerson} pictureUrl={imagePath + currPerson.profile_path}/>
            <KnownFor data={currPerson.known_for}/>
        </div>
      ) : (<p>No Results</p>)}
      <div>
        <span id="next-prev"> Next & Previous:
        <button className="load" onClick={handleClickPrevious}>Previous</button> 
        <button className="load" onClick={handleClickNext}>Next</button>
        </span>
      </div>
      
      <div id="pagination">
        <Databutton data={filterdData} handleClick={handleClick}/>
      </div>
      </div>
    )

  }

export default Person;
