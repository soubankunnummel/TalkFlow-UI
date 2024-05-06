import { ReactNode } from "react";
import Nave from "../components/Navebar/Nave";
import Footer from "../components/Footer/Footer";
 
function layout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div className="">
      <Nave />
      {children}
      <Footer />
    </div> 
  ); 
} 

export default layout;
 