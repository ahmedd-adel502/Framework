import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import homeImg from "../../assets/avataaars.svg"
import { FaStar } from "react-icons/fa";
import { useEffect } from "react";
export default function Home({toggleTheme,theme}) {
  useEffect(() => {
    document.title = "Home";
  })
  return (
    <div className={`mt-[6rem] text-center min-h-[calc(95vh-64px)] bg-maingreen flex justify-center items-center flex-col ${theme} `}>
        <div className="home-img w-[15%] mx-auto mb-8">
            <img className="w-full" src={homeImg} alt="avatar" />
        </div>
        <h2 className="text-4xl font-bold uppercase text-white mb-4">Start Framework</h2>
       <div className="flex flex-col items-center justify-center">
         <p className="text-white text-xl relative before:absolute before:w-[80px] before:h-[4px] before:bg-white before:left-[40px] before:top-[9px] after:absolute after:w-[80px] after:h-[4px] after:bg-white after:right-[40px] after:top-[9px]"><FaStar /></p>
        <p className="text-[17px] text-white mt-6">Graphic Artist - Web Designer - Illustrator</p>
       </div>

    </div>
  )
}
