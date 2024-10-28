import React from "react";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import HrAnime from "../../Components/hrAnimation/HrAnime";
import { TypeAnimation } from "react-type-animation";

export default function Resume() {
  return (
    <div className="flex flex-col">
      <div className="resume min-h-[301px]">
        <HrAnime title="FRONTEND-DEVELOPER" head="MohammadReza Ahmadi" />
        <TypeAnimation
         cursor={true} 
         className={"text-desc text-lg pt-7 w-[92%] md:w-[80%]"}
         sequence={[`I am Mohammad Raza Ahmadi, a front-end developer with four years of
          self-taught experience in this field. As a developer, I specialize in
          building visually stunning and highly responsive websites and
          applications. I am committed to writing high-quality code and
          constantly optimizing development processes. Trust my expertise and
          creativity.`, 800]}
        />
      </div>
      <Link
        to="/skills"
        className="z-20 p-3 sm:p-4 text-xs sm:text-sm sm:w-[200px] rounded-lg  bg-gradient-to-t from-f1 to-f2 text-center text-[#010101] font-bold mt-32 "
      >
        MORE NEWS <ArrowForwardIcon />
      </Link>
    </div>
  );
}
