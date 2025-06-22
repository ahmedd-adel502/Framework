import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, NavLink } from "react-router";
export default function Navbar({toggleTheme,theme}) {
  const[show,setShow]=useState(false)
    
     useEffect(() => {
    function handleScroll() {
        const nav = document.querySelector(".nav");
      {window.scrollY >= 100 ? nav.classList.replace("py-8","py-4") : nav.classList.replace("py-4","py-8")} 
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
    
    
  return <>
    <nav className={`bg-gray-700 px-4 shadow-xl fixed top-0 left-0 right-0 navbar z-10 ${theme} dark:bg-gray-900`} >
        <div className="nav container py-9 sm:py-8 px-2 mx-auto flex justify-between text-white transition-all duration-300 ease-in-out">
            <div className="flex items-center">
                <h1 className="text-xl sm:text-2xl font-bold uppercase"><Link to="/">Start Framework</Link></h1>
            </div>
            <ul className="lg:flex justify-center items-center gap-6 text-xl nav-links *:font-bold hidden">
                <NavLink className={({isActive})=>(isActive ? "active":"")} to="/"><li>Home</li></NavLink>
                <NavLink className={({isActive})=>(isActive ? "active":"")} to="/about"><li>About</li></NavLink>
                <NavLink className={({isActive})=>(isActive ? "active":"")} to="/portfolio"><li>Portfolio</li></NavLink>
                <NavLink className={({isActive})=>(isActive ? "active":"")} to="/contact"><li>Contact</li></NavLink>
            </ul>
             <button className="text-3xl font-bold cursor-pointer sm:hidden" onClick={()=>setShow(!show)}><RxHamburgerMenu /></button>
             <button className="text-2xl flex justify-center items-center cursor-pointer" onClick={toggleTheme}>
               {theme==='light'?
               ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                </svg>):
                     (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-yellow-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                </svg>)
            }
            </button>
        </div>
    </nav>
    {show ? <nav className="bg-gray-700 mt-[6rem] sm:hidden fixed px-4 left-0 right-0 z-10 top-1 ">
       <ul className="flex flex-col justify-center py-3 px-3 text-white  gap-6 text-xl nav-links *:font-bold *:w-fit">
              <NavLink className={({isActive})=>(isActive ? "active":"")} to="/"><li>Home</li></NavLink>
              <NavLink className={({isActive})=>(isActive ? "active":"")} to="/about"><li>About</li></NavLink>
              <NavLink className={({isActive})=>(isActive ? "active":"")} to="/portfolio"><li>Portfolio</li></NavLink>
              <NavLink className={({isActive})=>(isActive ? "active":"")} to="/contact"><li>Contact</li></NavLink>
        </ul>
    </nav>:""}
  
  </>
}
