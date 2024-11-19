import React from "react";

function DataButtons({data, handleClick}){
    return(
        <div className="pagination">
            {data.map((p, i) => (
                <button key={i} onClick={()=>handleClick(i)}>{i+1}</button>
            ))}
        </div>
    );
    
}

export default DataButtons;