import React from "react";
import './App.css';
import BtnDisplay from "./Components/BtnDisplay"
import Display from "./Components/Display";
import { useState } from "react";

function App() {
  const [time,setTime] =useState({s:0, m:0, h:0});
  const [interv,setInterv]= useState();
  const [status,setStatus]= useState(0);
// notstarted=0
// started=1
// pause=2


  const Start=() => {
    Run();
    setStatus(1);
    setInterv(setInterval(Run,500));
  };

  var updatedS= time.s,updatedM= time.m,updatedH= time.h;

  const Run=() => {
    if (updatedM === 60){
      updatedH++;
      updatedM=0;
    }
    if (updatedS=== 60){
      updatedM++;
      updatedS=0;
    }
    // if (updatedMs=== 1000){
    //   updatedS++;
    //   updatedMs=0;
    // }
    updatedS++;
    return setTime({s:updatedS, m:updatedM, h:updatedH});
  };
  const Stop=() => {
    clearInterval(interv);
    setStatus(2);
  };
  const Reset=() => {
    clearInterval(interv);
    setStatus(0);
    setTime({s:0, m:0, h:0});
  };
  const Resume=() => Start();

  return (
      <div className='clock-holder'>
        <div className='stopwatch'>
          <Display time={time}/>
        </div>
        <div className='control'>
        <BtnDisplay status={status} Resume={Resume} Reset={Reset} Stop={Stop} Start={Start}/>
        </div>

      </div>
  );
}

export default App;
