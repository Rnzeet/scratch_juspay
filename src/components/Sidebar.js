import React, { useEffect, useState } from "react";
import Icon from "./Icon";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { key_pressed, backdrop1, loudness, message, randomPosition } from "./data";
import PreviewArea from "./PreviewArea";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import {rootActions} from "../redux/action";

function Sidebar(props) {
  const { moveCharacter } = props;
  const handleDragStart = (event, text) => {
    event.dataTransfer.setData('text', text);
  }
  const keyPressed = key_pressed[0];
  const backDrop1 = backdrop1[0];
  const loudNess = loudness[0];
  const messageBroad = message[0];
  const randomPos = randomPosition[0];

  var a=10;
  var b=-180;
  var c=0;
  const handleClick = (props) => {
  a=a+10;
  b=b+15
  c=c+15

    moveCharacter(props)
  }
  return (
    <div className="w-60 flex-none h-full overflow-y-auto flex flex-col items-start p-2 border-r border-gray-200">
      <div className="font-bold"> {"Events"} </div>
      <div draggable={true} style={{clipPath: 'polygon(0% 0%, 22% 18%, 55% 15%, 50% 0%, 100% 0%, 100% 75%, 60% 75%,48% 100%,30% 100%, 20% 74%, 0% 74%)'}}
        onDragStart={(event) => handleDragStart(event, "When  clicked")}>
        <div className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        >
          {"When"}
          <Icon name="flag" size={15} className="text-green-600 mx-2" />
          {"clicked"}
        </div>
      </div>
      <div draggable={true}style={{clipPath: 'polygon(0% 0%, 22% 18%, 5% 15%, 0% 0%, 100% 0%, 100% 92%, 50% 92%,40% 100%,20% 100%, 16% 92%, 0% 92%)'}}
        onDragStart={(event) => handleDragStart(event, "When key Pressed")} className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-3 my-2 text-sm cursor-pointer">
        {"When "}
        <Dropdown options={key_pressed} value={keyPressed} placeholder="select option" className="text-xs" />
        {"key pressed"}
      </div>

      <div draggable={true}style={{clipPath: 'polygon(0% 0%, 22% 18%, 5% 15%, 0% 0%, 100% 0%, 100% 92%, 50% 92%,40% 100%,20% 100%, 16% 92%, 0% 92%)'}}
        onDragStart={(event) => handleDragStart(event, "When this sprite clicked")} className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"When this sprite clicked"}
      </div>
      <div draggable={true} style={{clipPath: 'polygon(0% 0%, 22% 18%, 5% 15%, 0% 0%, 100% 0%, 100% 92%, 50% 92%,40% 100%,20% 100%, 16% 92%, 0% 92%)'}}
        onDragStart={(event) => handleDragStart(event, "When backdrop switches to")} className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-3 my-2 text-sm cursor-pointer">
        {"When backdrop switches to"}
        <Dropdown options={backdrop1} value={backDrop1} placeholder="select option" className="text-xs" />
      </div>
      <div draggable={true} style={{clipPath: 'polygon(0% 0%, 22% 18%, 5% 15%, 0% 0%, 100% 0%, 100% 92%, 50% 92%,40% 100%,20% 100%, 16% 92%, 0% 92%)'}}
        onDragStart={(event) => handleDragStart(event, "When >10")} className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-4 my-1 text-sm cursor-pointer">
        {"When "}
        <Dropdown options={loudness} value={loudNess} placeholder="select option" className="text-xs" />
        {">"}
        <div className="mx-2 py-1 px-2 bg-white rounded-md text-black" >{"10"}</div>
      </div>
      <div draggable={true} style={{clipPath: 'polygon(0% 0%, 22% 18%, 5% 15%, 0% 0%, 100% 0%, 100% 92%, 50% 92%,40% 100%,20% 100%, 16% 92%, 0% 92%)'}}
        onDragStart={(event) => handleDragStart(event, "When I receive")} className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-3 my-1 text-sm cursor-pointer">
        {"When I receive"}
        <Dropdown options={message} value={messageBroad} placeholder="select option" className="text-xs" />
      </div>
      <div draggable={true} style={{clipPath: 'polygon(0% 0%, 22% 18%, 5% 15%, 0% 0%, 100% 0%, 100% 92%, 50% 92%,40% 100%,20% 100%, 16% 92%, 0% 92%)'}}
        onDragStart={(event) => handleDragStart(event, "broadcast")} className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-3 my-1 text-sm cursor-pointer">
        {"broadcast"}
        <Dropdown options={message} value={messageBroad} placeholder="select option" className="text-xs" />
      </div>
      <div draggable={true} style={{clipPath: 'polygon(0% 0%, 22% 18%, 5% 15%, 0% 0%, 100% 0%, 100% 92%, 50% 92%,40% 100%,20% 100%, 16% 92%, 0% 92%)'}}
        onDragStart={(event) => handleDragStart(event, "broadcast")} className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-4 my-2 text-sm cursor-pointer">
        {"broadcast"}
        <Dropdown options={message} value={messageBroad} placeholder="select option" className="text-xs" />
      </div>





      <div className="font-bold"> {"Motion"} </div>
      <button draggable={true} style={{clipPath: 'polygon(0% 0%, 22% 18%, 5% 15%, 0% 0%, 100% 0%, 100% 92%, 50% 92%,40% 100%,20% 100%, 16% 92%, 0% 92%)'}}
        onDragStart={(event) => handleDragStart(event, "Move 10 steps")} onClick={() =>{ handleClick(`ml-${a}`)}} className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-3 my-2 text-sm cursor-pointer after:content-['*'] after:bg-red-500 after:px-2 after:py-2 after:my-2 before:content-['*'] before:bg-red-500 before:px-1 before:py-1 before:my-1" >
        {"Move "}
        <div className="mx-2 py-1 px-2 bg-white rounded-md text-black " >{"10"}</div>{"steps"}
      </button>
      <button draggable={true}
        onDragStart={(event) => handleDragStart(event, "Turn 15 degrees")} onClick={() =>{ handleClick(` transform rotate-${b}`)}} className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-3 my-2 text-sm cursor-pointer">
        {"Turn "}
        <Icon name="undo" size={15} className="text-white mx-2" />
        <div className="mx-2 py-1 px-2 bg-white rounded-md text-black" >{"15"}</div> {"degrees"}
      </button>
      <button draggable={true}
        onDragStart={(event) => handleDragStart(event, "Turn 15 degrees")}  onClick={() =>{ handleClick(`transform rotate-${c} `)}} className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-3 my-2 text-sm cursor-pointer">
        {"Turn "}
        <Icon name="redo" size={15} className="text-white mx-2" />
        <div className="mx-2 py-1 px-2 bg-white rounded-md text-black" >{"15"}</div> {"degrees"}
      </button>
      <button draggable={true}
        onDragStart={(event) => handleDragStart(event, "go to Select option")} onClick={() =>{ handleClick(`mx-${Math.floor(Math.random())} my-${Math.floor(Math.random())}`)}} className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-3 my-2 text-sm cursor-pointer">
        {"go to"}
        <Dropdown options={randomPosition} value={randomPos} placeholder="select option" className="text-xs" />
      </button>
      <button draggable={true}
        onDragStart={(event) => handleDragStart(event, "go tox:")} onClick={() =>{ handleClick(`mx-0 my-0`)}} className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"go to x:"}  <div className="mx-2 py-1 px-2 bg-white rounded-md text-black" >{"0"}</div> {"y"} <div className="mx-2 py-1 px-2 bg-white rounded-md text-black" >{"0"}</div>
      </button>
      <button draggable={true}
        onDragStart={(event) => handleDragStart(event, "Point in direction")}  onClick={() =>{ handleClick(`transform rotate-0`)}} className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"Point in direction"}  <div className="mx-2 py-1 px-2 bg-white rounded-md text-black" >{"90"}</div>
      </button>
      <button draggable={true}
        onDragStart={(event) => handleDragStart(event, "change x by 10")}  onClick={() =>{ handleClick(`mx-${a}`)}} className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"change x by"}  <div className="mx-2 py-1 px-2 bg-white rounded-md text-black" >{"10"}</div>
      </button>
      <div draggable={true}
        onDragStart={(event) => handleDragStart(event, "change y by 10")}  onClick={() =>{ handleClick(`my-${a}`)}} className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"change y by "}  <div className="mx-2 py-1 px-2 bg-white rounded-md text-black" >{"10"}</div>
      </div>



      <div className="font-bold"> {"Looks"} </div>
      <div draggable={true}
        onDragStart={(event) => handleDragStart(event, "say hello")} className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"say"}   <div className="mx-2 py-1 px-2 bg-white rounded-md text-black" >{"Hello!"}</div> {"for"}   <div className="mx-2 py-1 px-2 bg-white rounded-md text-black" >{"2"}</div>{" seconds"}
      </div>
      <div draggable={true}
        onDragStart={(event) => handleDragStart(event, "say hello")} className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"say"}  <div className="mx-2 py-1 px-2 bg-white rounded-md text-black" >{"Hello!"}</div>
      </div>
      <div draggable={true}
        onDragStart={(event) => handleDragStart(event, "think him for")} className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"think"}  <div className="mx-2 py-1 px-2 bg-white rounded-md text-black" >{"Hmm"}</div>{"for"}  <div className="mx-2 py-1 px-2 bg-white rounded-md text-black" >{"2"}</div> {"seconds"}
      </div>
      <div draggable={true}
        onDragStart={(event) => handleDragStart(event, "think him")} className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"think"}
        <div className="mx-2 py-1 px-2 bg-white rounded-md text-black" >{"Hmm"}</div>
      </div>
      <div draggable={true}
        onDragStart={(event) => handleDragStart(event, "change size by 10")} className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"change size by"}
        <div className="mx-2 py-1 px-2 bg-white rounded-md text-black" >{"10"}</div>
      </div>


      <div className="font-bold"> {"Controls"} </div>
      <div draggable={true}
        onDragStart={(event) => handleDragStart(event, "Wait 1 seconds")} className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"wait"}
        <div className="mx-2 py-1 px-2 bg-white rounded-md text-black" >{"1"}</div>
        {"seconds"}
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    // getCharacterPosition: rootSelectors.getCharacterPosition(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ...bindActionCreators(rootActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);