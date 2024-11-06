import React, { useState } from "react";
import './leftSide.css'
import Ping from "./Ping";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import ChartPie from './ChartPie'
import { englishData } from "./englishData";
import { persianData } from './persianData'
import Socials from "./Socials";
import DownloadIcon from '@mui/icons-material/Download';

Chart.register(CategoryScale);
export default function LeftSide() {
  const [chartData, setChartData] = useState({
    datasets: [
      {
        label: "English",
        data: englishData.map((data) => data.userGain),
        backgroundColor: [
          "#20202A"
        ],
        borderColor: "#FFCB05",
        borderWidth: 2,
        weight: 1,
        spacing: 30,
        rotation: 270
      }
    ]
  });
  const [chartDataTwo, setChartDataTwo] = useState({
    datasets: [
      {
        label: "persian",
        data: persianData.map((data) => data.userGain),
        backgroundColor: [
          "#20202A"
        ],
        borderColor: "#FFCB05",
        borderWidth: 2,
        rotation: 270,
      }
    ]
  });

  const [list, setList] = useState([
    "AGE",
    "FRELANCE",
    "PHONE",
    "RESIDENCE",
    "ADDRESS",
    "E-Mail",
  ]);
  const [listTwo , setListTwo] = useState([
    "20",
    "Available",
    "+98 9966799381",
    "IRAN",
    "Mashhad",
    "Mohammadahmadicoder@gmail.com"
  ])
  return (
    <div className="flex flex-col">
      <img src="mhmrez.jpg" className="w-full z-0 rounded-2xl" />
      <div className="z-10 -mt-6 flex flex-col">
        <img src="Vector.png" />
        <div className="bg-base -mt-6 pt-8 rounded-b-lg">
          <div className="flex flex-row justify-center items-center sm:justify-start sm:items-start">
            <ul className="list-image-none mr-4 ">
              {list.map((title) => (
               <li className="text-[10px] leading-7 bg-gradient-to-r from-f1 to-f2 text-transparent bg-clip-text">
              <img src="listStyle.png" className="mr-3 hidden sm:inline-flex"/>
                  {`${title}:`}
                </li>
              ))}
            </ul>
            <ul className="text-wrap">
           
              <li className="text-white text-xs leading-7">20</li>
              <li className="text-white text-xs leading-7 inline-flex">
              <Ping/>
                Available
              </li>
              <li className="text-white text-xs leading-7">+98 9966799381</li>
              <li className="text-white text-xs leading-7">IRAN</li>
              <li className="text-white text-xs leading-7">Mashhad</li>
              <li className="text-white text-xs leading-7">Mohammadahmadicoder@gmail.com</li>
            </ul>
          </div>
          <hr color="#3D3D4A" className="w-[90%] opacity-20 my-6 mx-auto"/>
          <div className="flex flex-row justify-center space-x-10 items-center">
          <ChartPie chartData={chartData} />
          <ChartPie chartData={chartDataTwo} />
          </div>
          <Socials/>
          <a role="button" download={"Cv"} href="/cv/CV.pdf" className="rounded-b-lg text-center text-sm text-[#211F1F] block py-3 bg-gradient-to-r from-f1 to-f2" >
          <DownloadIcon/>
          Download Cv</a>
        </div>
      </div>
    </div>
  );
}
