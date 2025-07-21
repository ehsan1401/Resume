import { useContext, useState } from "react";
import SpeechBubbleSVG from "../svg/SpeechBubbleSVG";
import { MdiGithub } from "../icon/github";
import { EntypoSocialLinkedinWithCircle } from "../icon/LinkedIn";
import { IcBaselineTelegram } from "../icon/Telegram";
import { BxBxlGmail } from "../icon/Gmail";
import { MdiInstagram } from "../icon/instagram";
import { MaterialSymbolsArrowBackRounded } from "../icon/Arrow";
import { AlertContext } from "../utilities/AlertContext";

function Footer(){

    const [Language , setLanguage] = useState();
    const { showAlert } = useContext(AlertContext);

    const handleCopy = (textToCopy) => {
        navigator.clipboard.writeText(textToCopy)
          .then(() => showAlert("!ایمیل با موفقیت کپی شد", "success"))
          .catch(err => showAlert("!خطا در کپی کردن متن", "error"));
      };


    return(
        <>
        
            <div className='bg-neutral-800 w-full h-72 flex'>
                {/* <div>
                    {Language ==="Fa" ? 
                        <button className="bg-red-500" onClick={()=>setLanguage('En')}>English</button>
                        :
                        <button className="bg-red-500" onClick={()=>setLanguage('Fa')}>Farsi</button>
                    }
                </div> */}
    
                <div className="w-1/3 relative">
                    <div className="avatar w-24 h-24 absolute bottom-7 left-5 border-2 border-solid border-white rounded-full hover:scale-110 transition-all duration-150">
                        <img src="/images/My_Avatar.png" alt="My Avatar" />
                    </div>
                    <div>
                        <SpeechBubbleSVG className="w-96 h-60 absolute right-2 top-8 " />
                    </div>
                </div>
                <div className="w-1/3 px-3 py-5">
                    <h1 className="text-2xl font-bold text-neutral-50" style={{fontFamily : "Vazir"}}>Find me on social media</h1>
                    <ul className="flex flex-col text-3xl text-neutral-50 gap-3 py-3 pl-3 w-full">
    
    
                        <li className="flex flex-col hover:underline relative ">
                            <a href="https://t.me/Opera_9" className="w-[120%] h-full absolute opacity-100 translate-x-11 hover:-translate-x-20 transition-all duration-200 z-30">
                                <div className="absolute right-0 flex">
                                    <MaterialSymbolsArrowBackRounded/><span className="text-xs flex px-2 items-center">@Opera_9</span>
                                </div>
                            </a>
                            <div className="flex items-center bg-neutral-800 relative z-10 gap-3 ">
                                <IcBaselineTelegram/>
                                <p className="text-base">My Telgram Profile</p>  
                            </div>
                        </li>
    
                        <li className="flex flex-col hover:underline relative ">
                            <a href="https://github.com/ehsan1401" className="w-[120%] h-full absolute opacity-100 translate-x-11 hover:-translate-x-20 transition-all duration-200 z-30">
                                <div className="absolute right-0 flex">
                                    <MaterialSymbolsArrowBackRounded/><span className="text-xs flex px-2 items-center">@ehsan1401</span>
                                </div>
                            </a>
                            <div className="flex items-center bg-neutral-800 relative z-10 gap-3 ">
                                <MdiGithub/>
                                <p className="text-base">My github Profile</p>  
                            </div>
                        </li>
    
                        <li className="flex flex-col hover:underline relative ">
                            <a href="https://www.linkedin.com/in/ehsan-jangjo" className="w-[120%] h-full absolute opacity-100 translate-x-11 hover:-translate-x-20 transition-all duration-200 z-30">
                                <div className="absolute right-0 flex">
                                    <MaterialSymbolsArrowBackRounded/><span className="text-xs flex px-2 items-center">ehsan-jangjo</span>
                                </div>
                            </a>
                            <div className="flex items-center bg-neutral-800 relative z-10 gap-3 ">
                                <EntypoSocialLinkedinWithCircle/>
                                <p className="text-base">My Linkedin Profile</p>  
                            </div>
                        </li>
    
                        <li className="flex flex-col hover:underline relative ">
                            <a href="https://www.instagram.com/eh3anjangjo/" className="w-[120%] h-full absolute opacity-100 translate-x-11 hover:-translate-x-20 transition-all duration-200 z-30">
                                <div className="absolute right-0 flex">
                                    <MaterialSymbolsArrowBackRounded/><span className="text-xs flex px-2 items-center">@eh3anjangjo</span>
                                </div>
                            </a>
                            <div className="flex items-center bg-neutral-800 relative z-10 gap-3 ">
                                <MdiInstagram/>
                                <p className="text-base">My Instagram Profile</p>  
                            </div>
                        </li>
    
    
                        <li className="flex flex-col hover:underline relative ">
                            <button onClick={()=>{handleCopy("ehsan.good1382@gmail.com")}} className="w-[150%] h-full absolute opacity-100 translate-x-10 hover:-translate-x-60 transition-all duration-200 z-30">
                                <div className="absolute right-0 top-0 flex">
                                    <MaterialSymbolsArrowBackRounded/><span className="text-xs flex px-2 items-center">ehsan.good1382@gmail.com</span>
                                </div>
                            </button>
                            <div className="flex items-center bg-neutral-800-800 relative z-10 gap-3 ">
                                <BxBxlGmail/>
                                <p className="text-base">My Gmail Addres</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="w-1/3 bg-neutral-800 relative z-50 px-3 py-5">
                    <h1 className="text-2xl font-bold text-neutral-50" style={{fontFamily : "Vazir"}}>Tools</h1>
                </div>
            </div>
        
        </>
    )
}
export default Footer;
