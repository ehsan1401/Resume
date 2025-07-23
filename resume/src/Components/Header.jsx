import { useState } from "react";


function Header(){
  const items= ["Home" , "About Me" , "experince", "Crypto"];

  return(
      <div className="bg-transparent bg-opacity-20 absolute top-0 left-0 z-50 w-full text-center text-xs md:text-lg">
          <ul className="flex md:gap-20 gap-5 justify-center items-center py-5 text-Palette-Light-first"> 
            {items.map((item)=>{
              return(
                <li className="hover:text-Palette-Light-third hover:underline hover:scale-105 transition-all duration-300 cursor-pointer">{item}</li>
              )
            })}
          </ul>


      </div>
  )
}
export default Header;