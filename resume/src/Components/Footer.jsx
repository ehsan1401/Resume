import { useContext, useEffect, useState } from "react";
import { MdiGithub } from "../icon/github";
import { EntypoSocialLinkedinWithCircle } from "../icon/LinkedIn";
import { IcBaselineTelegram } from "../icon/Telegram";
import { BxBxlGmail } from "../icon/Gmail";
import { MdiInstagram } from "../icon/instagram";
import { MaterialSymbolsArrowBackRounded } from "../icon/Arrow";
import { AlertContext } from "../utilities/AlertContext";
import { useLanguage } from "../utilities/LanguageContext";
import TypingEffect from "../utilities/TypingEffect";
import SpeechBubbleBox from "../svg/SpeechBubbleSVG";




function Footer(){

    const [LanguageFa, setLanguageFa] = useState(() => {
      const stored = localStorage.getItem("LanguageFa");
      return stored ? JSON.parse(stored) : false;
    });
    const { showAlert } = useContext(AlertContext);
    const { languageFa, toggleLanguage } = useLanguage();


    const text = "من احسان جنگجو هستم، توسعه‌دهنده‌ی فرانت‌اند با تمرکز روی Next.js و Tailwind. دانشجوی مهندسی کامپیوترم و به یادگیری و پیشرفت علاقه دارم.";
    const text2 = "I'm Ehsan Jangjo, a front-end developer focused on Next.js and Tailwind CSS. I'm a computer engineering student, passionate about learning and growth."
    


    useEffect(() => {
        localStorage.setItem("LanguageFa", JSON.stringify(LanguageFa));
        toggleLanguage(LanguageFa);
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
            <div className='bg-Palette-Light-first w-full h-72 flex'>
    
                <div className="w-1/3 relative z-50 bg-Palette-Light-first flex justify-center items-center gap-3">
                    <div className="relative">
                        <div className="avatar w-20 h-20 border-2 border-solid border-white rounded-full hover:scale-110 transition-all duration-150 absolute -bottom-8 -left-8 z-50">
                            <img src="/images/My_Avatar.png" alt="My Avatar" />
                        </div>
                        {/* check latar for justify text here  */}

                        {/* <SpeechBubbleSVG className="w-96 h-60 absolute right-2 top-8 " /> */}
                        <SpeechBubbleBox className="w-80 h-min-40 bg-white px-7 pb-10">
                            <TypingEffect text={languageFa ? text2 : text} lang={languageFa ? 'en' : 'fa'} speed={20} />
                        </SpeechBubbleBox>

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
                            <div className="flex items-center bg-Palette-Light-first relative z-10 gap-3 ">
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
                            <div className="flex items-center bg-Palette-Light-first relative z-10 gap-3 ">
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
                            <div className="flex items-center bg-Palette-Light-first relative z-10 gap-3 ">
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
                            <div className="flex items-center bg-Palette-Light-first relative z-10 gap-3 ">
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
                            <div className="flex items-center bg-Palette-Light-first relative z-10 gap-3 ">
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
                            <div className="flex items-center bg-Palette-Light-first relative z-10 gap-3 ">
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
                            <div className="flex items-center bg-Palette-Light-first relative z-10 gap-3 ">
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
                            <div className="flex items-center bg-Palette-Light-first relative z-10 gap-3 ">
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
                <div className="w-1/3 bg-Palette-Light-first relative z-50 px-3 py-5">
                {!LanguageFa ? 
                    <h1 className="text-2xl font-bold text-neutral-50 pr-10" dir="rtl" style={{fontFamily : "Vazir"}}>ابزار‌ها</h1>
                    :
                    <h1 className="text-2xl font-bold text-neutral-50" style={{fontFamily : "Vazir"}}>Tools</h1>
                }
                    <div className="py-5 flex justify-center">
                        {LanguageFa ? 
                                <div className="flex relative border-2 border-white border-solid w-72 h-14 bg-Palette-Light-second rounded-2xl overflow-hidden"
                                style={{fontFamily:'Vazir'}}
                                >
                                    <button
                                    onClick={handleLangurageChanger}
                                    className="w-1/4 hover:w-[105%] transition-all duration-200 h-full absolute left-0 z-20 bg-Palette-Light-second">
                                        <div className="w-full h-full bg-Palette-Light-fourth rounded-r-2xl">
                                            <span className="flex justify-center items-center h-full font-bold text-Palette-Light-first">
                                                Fa
                                            </span>
                                        </div>
                                    </button>
                                    <div className="w-3/4 h-full bg-Palette-Light-fourth absolute right-0 z-10" >
                                        <div className="w-full h-full bg-Palette-Light-second">
                                            <span className="flex justify-center items-center h-full font-bold text-neutral-100">
                                                Web Language : En
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            :
                                <div className="flex relative border-2 border-white border-solid w-72 h-14 bg-Palette-Light-second rounded-2xl overflow-hidden"
                                style={{fontFamily:'Vazir'}}
                                >

                                    <div className="w-3/4 h-full bg-Palette-Light-second absolute left-0-0 z-10" >
                                        <div className="w-full h-full bg-Palette-Light-fourth">
                                            <span className="flex justify-center items-center h-full font-bold text-Palette-Light-first">
                                                زبان وبسایت: فارسی
                                            </span>
                                        </div>
                                    </div>
                                    <button 
                                    onClick={handleLangurageChanger}
                                    className="w-1/4 hover:w-[100%] transition-all duration-200 h-full absolute right-0 z-20 bg-Palette-Light-fourth">
                                        <div className="w-full h-full bg-Palette-Light-second rounded-l-2xl">
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
