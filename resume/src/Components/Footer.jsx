import { useContext, useEffect, useState } from "react";
import SpeechBubbleSVG from "../svg/SpeechBubbleSVG";
import { MdiGithub } from "../icon/github";
import { EntypoSocialLinkedinWithCircle } from "../icon/LinkedIn";
import { IcBaselineTelegram } from "../icon/Telegram";
import { BxBxlGmail } from "../icon/Gmail";
import { MdiInstagram } from "../icon/instagram";
import { MaterialSymbolsArrowBackRounded } from "../icon/Arrow";
import { AlertContext } from "../utilities/AlertContext";

function Footer(){

    const [LanguageFa, setLanguageFa] = useState(() => {
      const stored = localStorage.getItem("LanguageFa");
      return stored ? JSON.parse(stored) : false;
    });
    const { showAlert } = useContext(AlertContext);


    useEffect(() => {
        localStorage.setItem("LanguageFa", JSON.stringify(LanguageFa));
      }, [LanguageFa]);

      
    const handleCopy = (textToCopy) => {
        navigator.clipboard.writeText(textToCopy)
          .then(() => showAlert("Email successfully copied!", "success"))
          .catch(err => showAlert("Error copying email!", "error"));
      };

    const handleCopyFa = (textToCopy) => {
    navigator.clipboard.writeText(textToCopy)
        .then(() => showAlert("!آدرس ایمیل با موفقیت کپی شد", "success"))
        .catch(err => showAlert("!خطا در کپی کردن آدرس ایمیل", "error"));
    };


    const handleLangurageChanger = () => {
        setLanguageFa((prev) => !prev);
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
    
                <div className="w-1/3 relative z-50 bg-neutral-800">
                    <div className="avatar w-24 h-24 absolute bottom-7 left-5 border-2 border-solid border-white rounded-full hover:scale-110 transition-all duration-150">
                        <img src="/images/My_Avatar.png" alt="My Avatar" />
                    </div>
                    <div>
                        <SpeechBubbleSVG className="w-96 h-60 absolute right-2 top-8 " />
                    </div>
                </div>
                <div className="w-1/3 px-3 py-5">
                {!LanguageFa ? 
                
                    <h1 className="text-2xl font-bold text-neutral-50" dir="rtl" style={{fontFamily : "Vazir"}}>
                            در شبکه‌های اجتماعی من را دنبال کنید
                    </h1>
                : 
                    <h1 className="text-2xl font-bold text-neutral-50" style={{fontFamily : "Vazir"}}>
                                Find me on social media        
                    </h1>
                }

                {!LanguageFa ?     
                    <ul className="flex flex-col text-3xl text-neutral-50 gap-3 py-3 pl-3 w-full">
                        <li className="flex flex-col hover:underline relative " dir="rtl">
                            <a href="https://t.me/Opera_9" className="w-[120%] h-full absolute opacity-100 -translate-x-11 hover:translate-x-20 transition-all duration-200 z-30">
                                <div className="absolute left-0 flex">
                                    <MaterialSymbolsArrowBackRounded className="rotate-180"/><span className="text-xs flex px-2 items-center">Opera_9@</span>
                                </div>
                            </a>
                            <div className="flex items-center bg-neutral-800 relative z-10 gap-3 ">
                                <IcBaselineTelegram/>
                                <p className="text-base">پروفایل من در تلگرام</p>  
                            </div>
                        </li>
                        <li className="flex flex-col hover:underline relative " dir="rtl">
                            <a href="https://github.com/ehsan1401" className="w-[120%] h-full absolute opacity-100 -translate-x-11 hover:translate-x-20 transition-all duration-200 z-30">
                                <div className="absolute left-0 flex">
                                    <MaterialSymbolsArrowBackRounded className="rotate-180"/><span className="text-xs flex px-2 items-center">ehsan1401@</span>
                                </div>
                            </a>
                            <div className="flex items-center bg-neutral-800 relative z-10 gap-3 ">
                                <MdiGithub/>
                                <p className="text-base">پروفایل من در گیتهاب</p>  
                            </div>
                        </li>
                        <li className="flex flex-col hover:underline relative " dir="rtl">
                            <a href="https://www.linkedin.com/in/ehsan-jangjo" className="w-[120%] h-full absolute opacity-100 -translate-x-11 hover:translate-x-20 transition-all duration-200 z-30">
                                <div className="absolute left-0 flex">
                                    <MaterialSymbolsArrowBackRounded className="rotate-180"/><span className="text-xs flex px-2 items-center">ehsan-jangjo</span>
                                </div>
                            </a>
                            <div className="flex items-center bg-neutral-800 relative z-10 gap-3 ">
                                <EntypoSocialLinkedinWithCircle/>
                                <p className="text-base">پروفایل من در لینکدین</p>  
                            </div>
                        </li>
                        <li className="flex flex-col hover:underline relative " dir="rtl">
                            <a href="https://www.instagram.com/eh3anjangjo/" className="w-[120%] h-full absolute opacity-100 -translate-x-14 hover:translate-x-20 transition-all duration-200 z-30">
                                <div className="absolute left-0 flex">
                                    <MaterialSymbolsArrowBackRounded className="rotate-180"/><span className="text-xs flex px-2 items-center">eh3anjangjo@</span>
                                </div>
                            </a>
                            <div className="flex items-center bg-neutral-800 relative z-10 gap-3 ">
                                <MdiInstagram/>
                                <p className="text-base">پروفایل من در اینستاگرام</p>  
                            </div>
                        </li>

                        <li className="flex flex-col hover:underline relative" dir="rtl">
                            <button onClick={()=>{handleCopyFa("ehsan.good1382@gmail.com")}} className="w-[150%] h-full absolute opacity-100 -translate-x-10 hover:translate-x-60 transition-all duration-200 z-30">
                                <div className="absolute left-0 top-0 flex">
                                    <MaterialSymbolsArrowBackRounded className="rotate-180"/><span className="text-xs flex px-2 items-center">ehsan.good1382@gmail.com</span>
                                </div>
                            </button>
                            <div className="flex items-center bg-neutral-800-800 relative z-10 gap-3 ">
                                <BxBxlGmail/>
                                <p className="text-base">آدرس ایمیل من</p>
                            </div>
                        </li>
                    </ul>
                : 
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
                }


                </div>
                <div className="w-1/3 bg-neutral-800 relative z-50 px-3 py-5">
                {!LanguageFa ? 
                    <h1 className="text-2xl font-bold text-neutral-50 pr-10" dir="rtl" style={{fontFamily : "Vazir"}}>ابزار‌ها</h1>
                    :
                    <h1 className="text-2xl font-bold text-neutral-50" style={{fontFamily : "Vazir"}}>Tools</h1>
                }
                    <div className="py-5 flex justify-center">
                        {LanguageFa ? 
                                <div className="flex relative border-2 border-white border-solid w-72 h-14 bg-neutral-500 rounded-2xl overflow-hidden"
                                style={{fontFamily:'Vazir'}}
                                >
                                    <button
                                    onClick={handleLangurageChanger}
                                    className="w-1/4 hover:w-[105%] transition-all duration-200 h-full absolute left-0 z-20 bg-neutral-900">
                                        <div className="w-full h-full bg-neutral-100 rounded-r-2xl">
                                            <span className="flex justify-center items-center h-full font-bold text-neutral-900">
                                                Fa
                                            </span>
                                        </div>
                                    </button>
                                    <div className="w-3/4 h-full bg-neutral-100 absolute right-0 z-10" >
                                        <div className="w-full h-full bg-neutral-900">
                                            <span className="flex justify-center items-center h-full font-bold text-neutral-100">
                                                Web Language : En
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            :
                                <div className="flex relative border-2 border-white border-solid w-72 h-14 bg-neutral-500 rounded-2xl overflow-hidden"
                                style={{fontFamily:'Vazir'}}
                                >

                                    <div className="w-3/4 h-full bg-neutral-900 absolute left-0-0 z-10" >
                                        <div className="w-full h-full bg-neutral-100">
                                            <span className="flex justify-center items-center h-full font-bold">
                                                زبان وبسایت: فارسی
                                            </span>
                                        </div>
                                    </div>
                                    <button 
                                    onClick={handleLangurageChanger}
                                    className="w-1/4 hover:w-[100%] transition-all duration-200 h-full absolute right-0 z-20 bg-neutral-100">
                                        <div className="w-full h-full bg-neutral-900 rounded-l-2xl">
                                            <span className="flex justify-center items-center h-full font-bold text-neutral-100">
                                                انگلیسی
                                            </span>
                                        </div>
                                    </button>
                                </div>
                        }

                    </div>
                </div>
            </div>
        
        </>
    )
}
export default Footer;
