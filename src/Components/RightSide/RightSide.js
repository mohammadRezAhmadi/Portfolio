import React from "react";
import { Link } from "react-router-dom";
import "./rightSide.css";
import TabPages from "./TabPages";
export default function RightSide({children}) {
  return (
    <>
      <div className="core-side bg-base relative w-[100%] py-28 px-10 sm:px-16 rounded-2xl mt-7 md:mt-0 z-10 lg:overflow-hidden">
        <img className="bg-top z-10" src="/LayerRight.png"></img>
        <img className="bg-bottom z-10" src="/LayerRight.png"></img>
        {children}
      </div>
      <div className="tab-pages justify-center bg-select_box flex flex-row lg:flex-col mx-auto w-[90%] lg:w-[20%] h-auto lg:pl-16 py-12 space-y-16 lg:pr-4 my-auto rounded-3xl z-0" id="box-pages">
        <TabPages/>
      </div>
    </>
  );
}
