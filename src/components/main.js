import React, {useState, useEffect} from "react";
import DataButtons from "./DataButtons";
import KnownFor from "./KnownFor";
import Person from "./person";
import ImagesFor from "./ImagesFor";
import { auth } from "../auth";

function Main(){
    const url = "https://api.themoviedb.org/3/search/person";
    const searchString = "?query=tom";
    
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

export default Main;