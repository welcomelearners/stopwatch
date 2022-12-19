import React from "react";

function BtnDisplay(props) {
  return (
    <div>
    {(props.status===0) ?
    <button className="stopwatch-btn stopwatch-btn-light" onClick={props.Start}> Start</button> : ""}
    {(props.status===1) ?
    <div>
        <button className="stopwatch-btn stopwatch-btn-red" onClick={props.Stop}> Stop</button> 
        <button className="stopwatch-btn stopwatch-btn-red" onClick={props.Reset}> Reset</button> 
     </div> 
     : ""}
      {(props.status===2) ?
    <div>
        <button className="stopwatch-btn stopwatch-btn-red" onClick={props.Resume}> Resume</button> 
        <button className="stopwatch-btn stopwatch-btn-red" onClick={props.Reset}> Reset</button> 
     </div> 
     : ""}
     
    </div>
  );
}

export default BtnDisplay;
