import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";
import Dashboard from "@/components/Dashboard";
import Blogs from "@/components/Blogs";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const[dash,setDash] = useState(true)
  const[pro,setPro] = useState(false)
  const[con,setCon] = useState(false)


  const handleDashboard=()=>{
    setDash(true)
    setPro(false)
    setCon(false)
  }


  const handleContact=()=>{
    setCon(true)
    setDash(false)
    setPro(false)
  }


  return (
    <div className="w-[100%] h-[auto] flex flex-wrap gap-8">
      <div className=" sm:w-[100%]  md:w-[300px] h-[100%] flex items-center flex-col md:sticky top-20 ">
        <div>
          <button onClick={handleDashboard} className="w-[270px] p-3  bg-blue-400 rounded-lg m-1 mt-7 shadow-2xl text  text-white text-[18px] font-bold duration-500 hover:shadow-none">Dashboard</button>
        </div>
     
        <div>
          <button onClick={handleContact} className="w-[270px] p-3  bg-blue-400 rounded-lg m-1 shadow-2xl text text-white text-[18px] font-bold duration-500 hover:shadow-none">Blogs</button>
        </div>
      </div>
      <div className="w-[72vw] h-[100%]">

      {
          dash && <Dashboard />
      }

   

      {
        con && <Blogs />
      }


      </div>
    </div>
  );
}
