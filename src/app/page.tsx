import Image from "next/image";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import Services from "./Components/Services";
import WhyUs from "./Components/WhyUs";
import HowWork from "./Components/HowWork";
import MobileNav from "./Components/MobileNav";
import Contact from "./Components/Contact";
export default function Home() {
  return (
   <div className="min-h-full min-w-full overflow-x-hidden">
   <Navbar/>
   <MobileNav/>
   <Main/>
   <Services/>
   <WhyUs/>
   <HowWork/>
   <Contact/>
   </div>
   
  );
}
