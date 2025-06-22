import { faFacebook, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons/faGlobe";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer({toggleTheme,theme}) {
  return <>
   <div className={`bg-gray-700 text-white ${theme} dark:bg-gray-900`}>
     <div className="container mx-auto py-20 grid grid-cols-1 gap-12 sm:grid-cols-3">
        <div className="space-y-4 text-center shadow-2xl py-3 sm:shadow-none sm:py-0">
            <h2 className="text-3xl font-bold uppercase mb-0">Location</h2>
            <span className="block my-2">2215 John Daniel Drive</span>
            <p>Clark, MO 65243</p>
        </div>
        <div className="space-y-4 text-center shadow-2xl py-3 sm:shadow-none sm:py-0">
            <h2 className="text-3xl font-bold uppercase">Around the Web </h2>
            <ul className="flex justify-center items-center space-x-4">
                <a href="#"><li className="h-[40px] w-[40px] border border-white rounded-3xl flex justify-center items-center"><i className="text-2xl"><FontAwesomeIcon icon={faFacebook} /></i></li></a>
                <a href="#"><li className="h-[40px] w-[40px] border border-white rounded-3xl flex justify-center items-center"><i className="text-2xl"><FontAwesomeIcon icon={faTwitter} /></i></li></a>
                <a href="#"><li className="h-[40px] w-[40px] border border-white rounded-3xl flex justify-center items-center"><i className="text-2xl"><FontAwesomeIcon icon={faLinkedin} /></i></li></a>
                <a href="#"><li className="h-[40px] w-[40px] border border-white rounded-3xl flex justify-center items-center"><i className="text-2xl"><FontAwesomeIcon icon={faGlobe} /></i></li></a>
            </ul>
        </div>

        <div className="space-y-4 text-center shadow-2xl py-3 sm:shadow-none sm:py-0">
            <h3 className="text-3xl font-bold uppercase">about freelancer</h3>
            <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
        </div>
    </div>
    <div className="border-t border-gray-600 bg-gray-900 text-center py-5">
        <p>Copyright © Your Website 2025 by <strong><a href="https://web.facebook.com/ahmedadell502" target="_blank">Ahmed Adel</a></strong></p>
    </div>
   </div>
  </>
}
