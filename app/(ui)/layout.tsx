import { ReactNode } from "react";
import Nave from "../components/Navebar/Nave";
import Footer from "../components/Footer/Footer";
import cookie from 'js-cookie'
import ProtectRoute from "../components/commen/ProtectRoute";
 
function layout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div className="p-1  ">
      <Nave />
      <ProtectRoute/>
      {children}
      <Footer />
    </div> 
  ); 
} 

export default layout;
 