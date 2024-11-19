import React from "react";


function Person({name}){
    return(
        <div>
            <h1>{name.name}</h1>
            <span>Known for: {name.known_for_department}</span>
        </div>
    );
}

export default Person;