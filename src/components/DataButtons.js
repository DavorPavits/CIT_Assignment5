import React from "react";

function DataButtons({data, handleClick, currentIndex}){
    // return(
    //     <div className="pagination">
    //         {data.map((p, i) => (
    //             <button key={i} onClick={()=>handleClick(i)}>{i+1}</button>
    //         ))}
    //     </div>
    // );

    return (
        <div className="pagination">

            {/*Previous*/}
            {(<button onClick={() => (
                currentIndex > 0 ? handleClick(currentIndex-1) : handleClick(data.length -1))}>Previous</button>)}


            {/* First Button */}
            {currentIndex > 1 && (
                <button onClick={() => handleClick(0)}>{1}</button>
            )}

            {/* Dots Before Current */}
            {currentIndex > 2 && <span>...</span>}

            {/* Previous Neighbor */}
            {currentIndex > 0 && (
                <button onClick={() => handleClick(currentIndex - 1)}>
                    {currentIndex}
                </button>
            )}

            {/* Current Button */}
            <button className="current" disabled>{currentIndex + 1}</button>

            {/* Next Neighbor */}
            {currentIndex < data.length - 1 && (
                <button onClick={() => handleClick(currentIndex + 1)}>
                    {currentIndex + 2}
                </button>
            )}

            {/* Dots After Current */}
            {currentIndex < data.length - 3 && <span>...</span>}

            {/* Last Button */}
            {currentIndex < data.length - 2 && (
                <button onClick={() => handleClick(data.length - 1)}>
                    {data.length}
                </button>
            )}

            
            {(<button onClick={() => (
                currentIndex < data.length-1 ? handleClick(currentIndex + 1) : handleClick(0))}>Next</button>)}
        </div>
    );
    
}

export default DataButtons;