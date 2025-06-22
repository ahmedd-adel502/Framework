import { useEffect } from "react";
import { FaStar } from "react-icons/fa";

export default function About({toggleTheme,theme}) {
  useEffect(() => {
      document.title = "About";
    })
  return (
   <div className={`mt-[6rem] text-center min-h-[calc(95vh-64px)] bg-maingreen flex justify-center items-center flex-col ${theme}`}>
          <div className="container mx-auto">
                <h2 className="sm:text-4xl text-3xl font-bold uppercase text-white mb-4">About Component</h2>
            <div className="flex  items-center justify-center mb-6">
                <p className="text-white text-xl relative before:absolute before:w-[80px] before:h-[4px] before:bg-white before:left-[40px] before:top-[9px] after:absolute after:w-[80px] after:h-[4px] after:bg-white after:right-[40px] after:top-[9px]"><FaStar /></p>
            </div>
            <div className="text-white flex justify-center gap-4">
                <p className="sm:w-[40%] w-full px-4 text-left">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                <p className="sm:w-[40%] w-full px-4 text-left">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
          </div>
   
    </div>
  )
}
