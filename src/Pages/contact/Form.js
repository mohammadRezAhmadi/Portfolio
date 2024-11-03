import React  , {useState}from "react";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import HrAnime from "../../Components/hrAnimation/HrAnime";
import './form.css'
export default function Form() {


    const [list, setList] = useState([
      {title: "AGE" , src:'./icons/user.svg'},
      {title: "FRELANCE" , src:'./icons/bullseye.svg'},
      {title: "PHONE" , src:'./icons/alternate-phone.svg'},
      {title: "RESIDENCE" , src:'./icons/apartment.svg'},
      {title: "ADDRESS" , src:'./icons/alternate-map-marker.svg'},
      {title: "E-Mail" , src:'./icons/paper-plane.svg'}
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
    <div className="flex flex-col relative z-20">
      <HrAnime title="LET’S TALK" head="Contact" />
      <div className="flex flex-col lg:flex-row space-x-0 lg:space-x-6">
        <div className="flex flex-col basis-1/2">
<form>
  <div className="relative z-0 w-full mb-5 outline outline-1 outline-border rounded-xl p-5  border-white group">
      <input type="email" name="floating_email" id="floating_email" className="block px-0 w-full text-sm text-form_text bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-form_base peer" placeholder=" " required />
      <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-form_text  duration-300 bg-base transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]  rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-[10px] peer-focus:text-form_base peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:z-10">FULLNAME</label>
  </div>
  <div className="relative z-0 w-full mb-5 outline outline-1 outline-border rounded-xl p-5  border-white group">
      <input type="email" name="floating_email" id="floating_email" className="block px-0 w-full text-sm text-form_text bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-form_base peer" placeholder=" " required />
      <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-form_text duration-300 bg-base transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]  rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-[10px] peer-focus:text-form_base peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:z-10">EMAILADDRESS</label>
  </div>

    <label for="message" className="block mb-2 text-xs font-medium text-title">Your message</label>
    <textarea id="message" rows="4" className="block p-2.5 w-full text-xs text-form_text outline-none bg-base rounded-xl border border-border  focus:border-form_base duration-300  " placeholder="Leave a comment..."></textarea>
  

</form>

        </div>
        <div className="basis-1/2  border-[1px] rounded-xl border-border p-7 mt-5 lg:mt-0 bg-base">
        <div className="flex flex-col">
          <h1 className="text-title text-sm">MohammadReza Ahmadi</h1>
          <h3 class="bg-gradient-to-r text-[10px] from-f1 via-f2 inline-block toto-f2 text-transparent bg-clip-text">
          FRONTEND-DEVELOPER
          </h3>
        </div>
        <div className="flex flex-row mt-3">
            <ul>
                {
                    list.map(data =>(
                        <li className="text-[11px] leading-7 text-title font-bold">
                          {/* <img src={data.src} className="inline w-3 bg-red-600 bg-clip-text text-transparent"/> */}
                            {`${data.title}:`}
                            </li>
                    ))
                }
            </ul>
            <ul className="ml-2">
            {
                    listTwo.map(data =>(
                        <li className="text-[10px] leading-7 text-white">
                            {data}
                            </li>
                    ))
                }
            </ul>
        </div>
        </div>
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
