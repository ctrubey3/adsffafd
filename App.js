import './App.css';
import Block from "./components/Block";
import Blocks from "./components/Blocks";
import Block2 from "./components/Block2";
import Block3 from "./components/Block3";
import Rectangle from "./components/Rectangle";
import style from "./components/core/style";
import React from "react";


function App() {
  return (

      <div className="App">
        <Rectangle clk={""}/>
        <Rectangle clk={""}/>
        <Rectangle clk={""}/>
        <Block style={style.block}/>
        <Blocks props={"color"}/>
        <Block2 style={style.blocks}/>
        <Blocks props={"color"}/>
        <Block3 style={style.blockers}/>
        <Blocks props={"color"}/>
      </div>
  );
}

export default App;
