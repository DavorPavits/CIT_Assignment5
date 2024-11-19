import React,{useState, useEffect} from "react";
import { auth } from "../auth";


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

export default ImagesFor;