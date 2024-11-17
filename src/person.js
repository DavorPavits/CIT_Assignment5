import React, { useEffect, useState } from "react";
import { auth } from "./auth";

function Actor({ name, pictureUrl }) {
  return (
    <>
      <img src={pictureUrl} alt={name.name} />
      <div className="descriptions">
        <h2>{name.name}</h2>
        <h2>{name.known_for_department}</h2>
      </div>
    </>
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
  }, []);

  return (
    <div className="App">
      <div className="movie-container">
        {data.length > 0 ? (
          data.map((p) => (
            <div key={p.id}>
                
              <div className="card">
                <Actor name={p} pictureUrl={imagePath + p.profile_path} />
              </div>
            </div>
          ))
        ) : (
          <p>No Results Found;</p>
        )}
      </div>
    </div>
  );
}

export default Person;
