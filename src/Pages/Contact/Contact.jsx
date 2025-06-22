import { useEffect } from "react";
import { FaStar } from "react-icons/fa";

export default function Contact({toggleTheme,theme}) {
     function isInputTouched(e) {
      if(e.target.value !== "") {
        e.target.previousElementSibling.classList.remove("opacity-0")
        e.target.previousElementSibling.classList.add("opacity-100","visible","top-[-15px]","transition-all","duration-500","ease-in-out")
      } else {
        e.target.previousElementSibling.classList.add("top-1")
        e.target.previousElementSibling.classList.remove("opacity-100","top-[-15px]","visible") 
        e.target.previousElementSibling.classList.add("opacity-0") 
      }
    }

    useEffect(() => {
        document.title = "Contact";
      })
  return <>
      <div className={`mt-[6rem]  min-h-[calc(95vh-64px)] relative ${theme} dark:bg-gray-700   `}>
         <div className="container mx-auto pt-10 ">
            <div className="flex flex-col  items-center justify-center text-gray-700 dark:text-white">
                <h2 className="sm:text-5xl text-3xl  font-bold mb-5 uppercase">Contact Section</h2>
                <p className="text-gray-700 text-xl relative before:absolute before:w-[80px] dark:before:bg-white dark:after:bg-white dark:text-white before:h-[4px] before:bg-gray-700 before:left-[40px] before:top-[9px] after:absolute after:w-[80px] after:h-[4px] after:bg-gray-700 after:right-[40px] after:top-[9px]"><FaStar /></p>
            </div>
            <div>
              <form className="flex flex-col gap-4 shadow-md rounded-2xl p-5 space-y-1 dark:text-white">
               <div className="flex flex-col relative">
                 <label htmlFor="name" className="px-2 absolute text-green-400 top-1 opacity-0 invisible">Your Name:</label>
                  <input className="border-b-2  peer border-green-400/70 outline-none py-3 px-2 rounded-md placeholder:text-gray-700/70 dark:placeholder:text-gray-300" onInput={isInputTouched} type="text" placeholder="Your Name" name="name" />
               </div>
                <div className="flex flex-col relative">
                  <label htmlFor="age" className="px-2 absolute text-green-400 top-1 opacity-0 invisible">Your Age:</label>
                  <input className="border-b-2  peer border-green-400/70 outline-none py-3 px-2 rounded-md placeholder:text-gray-700/70 dark:placeholder:text-gray-300" onInput={isInputTouched} type="text" placeholder="Your Age" name="age"  />
                </div>
                <div className="flex flex-col relative">
                  <label htmlFor="email" className="px-2 absolute text-green-400 top-1 opacity-0 invisible">Your Email:</label>
                   <input className="border-b-2  peer border-green-400/70 outline-none py-3 px-2 rounded-md placeholder:text-gray-700/70 dark:placeholder:text-gray-300" onInput={isInputTouched} type="email" placeholder="Your Email" name="email" />
                </div>
               <div className="flex flex-col relative">
                 <label htmlFor="password" className="px-2 absolute text-green-400 top-1 opacity-0 invisible">Your Password:</label>
                 <input className="border-b-2  peer border-green-400/70 outline-none py-3 px-2 rounded-md placeholder:text-gray-700/70 dark:placeholder:text-gray-300" onInput={isInputTouched} type="password" placeholder="Your Password" name="password" />
               </div>

                <button className="bg-maingreen mt-2 text-white py-3 rounded-md w-fit px-4 mx-auto cursor-pointer hover:bg-green-700/70 transition-colors duration-300">Send Message</button>
              </form>
            </div>

         </div>
       </div>
  
  
  </>
}
