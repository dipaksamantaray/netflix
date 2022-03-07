import React from "react";
import Card from "./Components/Card";
import "./App.css";
import Sdata from "./Components/Sdata";



const ncard =(val)=>{
  return(
<Card
imgsrc = {val.imgsrc}
title={val.title}
sname={val.sname}
link={val.link}
/> 
  )
}


const App=()=>{

  return(
<div>
 <h1 className="heading_style">List  of top 5 NetFlix Series  in 2022</h1>
 {Sdata.map(ncard)}


</div>

  );
};
export default App; 