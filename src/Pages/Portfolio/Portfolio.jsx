import { FaStar } from "react-icons/fa";
import port1 from "../../assets/poert1.png"
import port2 from "../../assets/port2.png"
import port3 from "../../assets/port3.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
export default function Portfolio({toggleTheme,theme}) {
     const images = [port1, port2, port3]
      const [index, setIndex] = useState(null);
   function getCurrentImage(e) {
        const clickedImg = e.target.closest(".group").querySelector("img");
        if (!clickedImg) return;

        const src = clickedImg.getAttribute("src");
        const selectedIndex = images.findIndex((image) => image === src);

        if (selectedIndex !== -1) {
            setIndex(selectedIndex);
            document.querySelector(".overlay")?.classList.remove("hidden");
        }
    }

    function backToMain(e){
        if(e.target !== e.target.closest(".overlay").querySelector("img")){
            document.querySelector(".overlay").classList.add("hidden");
            setIndex(null);
        } else {
            document.querySelector(".overlay").classList.remove("hidden");
        }
    }
    useEffect(() => {
    document.title = "Portfolio";
  })

  return <>
   <div className={`mt-[6rem]  min-h-[calc(95vh-64px)] relative  ${theme} dark:bg-gray-700 `}>
     <div className="container mx-auto pt-10 pb-10">
        <div className="flex flex-col  items-center justify-center text-gray-700 dark:text-white">
            <h2 className="text-3xl sm:text-5xl font-bold mb-5 uppercase">Portfolio Component</h2>
            <p className="text-gray-700 text-xl relative before:absolute before:w-[80px] before:h-[4px] dark:before:bg-white dark:after:bg-white dark:text-white before:bg-gray-700 before:left-[40px] before:top-[9px] after:absolute after:w-[80px] after:h-[4px] after:bg-gray-700 after:right-[40px] after:top-[9px]"><FaStar /></p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-6 my-5">
            <div className="rounded-md relative group  w-[90%] mx-auto sm:w-full  cursor-pointer shadow-2xl"> 
                <div className="absolute bg-maingreen top-0 left-0 bottom-0 right-0 rounded-md flex justify-center items-center text-white text-9xl opacity-0 group-hover:opacity-[0.9] invisible group-hover:visible transition-all duration-500 " onClick={getCurrentImage}> <FontAwesomeIcon icon={faPlus} />  
                </div>
                <img className="rounded-md" src={port1} alt="Port1" />
            </div>
            <div className="rounded-md relative group  w-[90%] mx-auto sm:w-full  cursor-pointer shadow-2xl">
                <div className="absolute bg-maingreen top-0 left-0 bottom-0 right-0 rounded-md flex justify-center items-center text-white text-9xl opacity-0 group-hover:opacity-[0.9] invisible group-hover:visible transition-all duration-500 " onClick={getCurrentImage}>  <FontAwesomeIcon icon={faPlus} />  </div>
                <img className="rounded-md" src={port2} alt="Port2" />
            </div>
            <div className="rounded-md relative group w-[90%] mx-auto sm:w-full cursor-pointer">
                <div className="absolute bg-maingreen top-0 left-0 bottom-0 right-0 rounded-md flex justify-center items-center text-white text-9xl opacity-0 group-hover:opacity-[0.9] invisible group-hover:visible transition-all duration-500 " onClick={getCurrentImage}>  <FontAwesomeIcon icon={faPlus} />  </div>
                <img className="rounded-md" src={port3} alt="Port3" />
            </div>
            <div className="rounded-md relative group w-[90%] mx-auto sm:w-full   cursor-pointer shadow-2xl">
                <div className="absolute bg-maingreen top-0 left-0 bottom-0 right-0 rounded-md flex justify-center items-center text-white text-9xl opacity-0 group-hover:opacity-[0.9] invisible group-hover:visible transition-all duration-500 " onClick={getCurrentImage}>  <FontAwesomeIcon icon={faPlus} /> </div>
                <img className="rounded-md" src={port1} alt="Port1" />
            </div>
            <div className="rounded-md relative group  w-[90%] mx-auto sm:w-full  cursor-pointer shadow-2xl">
                <div className="absolute bg-maingreen top-0 left-0 bottom-0 right-0 rounded-md flex justify-center items-center text-white text-9xl opacity-0 group-hover:opacity-[0.9] invisible group-hover:visible transition-all duration-500 " onClick={getCurrentImage}>  <FontAwesomeIcon icon={faPlus} />  </div>
                <img className="rounded-md" src={port2} alt="Port2" />
            </div>
            <div className="rounded-md relative group w-[90%] mx-auto sm:w-full   cursor-pointer shadow-2xl">
                <div className="absolute bg-maingreen top-0 left-0 bottom-0 right-0 rounded-md flex justify-center items-center text-white text-9xl opacity-0 group-hover:opacity-[0.9] invisible group-hover:visible transition-all duration-500 " onClick={getCurrentImage}>  <FontAwesomeIcon icon={faPlus} />  </div>
                <img className="rounded-md" src={port3} alt="Port3" />
            </div>
        </div>
     </div>
    
   </div>
    {index !== null && (
        <div className="overlay  left-0 bottom-0 right-0 top-0 fixed bg-gray-400/60 z-20 flex justify-center items-center" onClick={backToMain}>
        <img className="sm:w-[40%] w-[95%] lg:w-[50%] rounded-md mx-auto" src={images[index]} alt="Image" />
    </div>
    )}
  
  </>
}
