import { IconParkTwotoneGraphicStitchingFour } from "../icon/graphicIcon";
import { IxJavaScript } from "../icon/javaScriptIcon";
import { MaterialSymbolsAccountBox } from "../icon/profileIcon";
import { StreamlineInterfaceEditSwatchColorColorsDesignPaintingPaletteSampleSwatch } from "../icon/Sample";
import { MaterialSymbolsDeployedCodeAccount } from "../icon/skillIcon";
import { IxWorkCaseFilled } from "../icon/Work";
import { useLanguage } from "../utilities/LanguageContext";


function Slider(){


    const root = window.document.documentElement;
    root.classList.add('light');


    const { languageFa } = useLanguage();


    
    const DrawerItems = [
        {
            "name" : "Profile",
            "EnTitle" : "Profile",
            "FaTitle" : "نمایه شخصی",
            "param" : "Profile",
            "icon": <MaterialSymbolsAccountBox/>
        },
        {
            "name" : "Technical Skills",
            "EnTitle" : "Technical Skills",
            "FaTitle" : "مهارت های فنی",
            "param" : "Technical-Skills",
            "icon": <MaterialSymbolsDeployedCodeAccount/>
        },
        {
            "name" : "Work Experience",
            "EnTitle" : "Work Experience",
            "FaTitle" : "تجربیات کاری",
            "param" : "Work-Experience",
            "icon": <IxWorkCaseFilled/>
        },
        {
            "name" : "Front-End",
            "EnTitle" : "Front-End",
            "FaTitle" : "فرانت اند",
            "param" : "Front-End",
            "icon": <IxJavaScript/>
        },
        {
            "name" : "Graphic Design",
            "EnTitle" : "Graphic Design",
            "FaTitle" : "گرافیک",
            "param" : "Graphic",
            "icon": <IconParkTwotoneGraphicStitchingFour/>
        },
        {
            "name" : "Portfolio",
            "EnTitle" : "Portfolio",
            "FaTitle" : "نمونه کار‌ها",
            "param" : "Portfolio",
            "icon": <StreamlineInterfaceEditSwatchColorColorsDesignPaintingPaletteSampleSwatch/>
        },
    ]

    const itemParamHandler = (pageParam) => {
        const params = new URLSearchParams(window.location.search);
        params.set("page", pageParam);
        const newUrl = `${window.location.pathname}?${params.toString()}`;
        window.history.pushState({}, "", newUrl);
      };
      
      
    

    return(
            <>
            <div className="bg-white dark:bg-[#101010] h-full w-full relative overflow-hidden">

                <div className="absolute top-0 right-0 z-0">
                <div className="absolute w-[500px] h-[500px] dark:bg-[#292929] bg-[#e1f5f3] rounded-full -right-24 -top-32 blur-sm"></div>
                <div className="absolute w-[420px] h-[420px] dark:bg-[#3f3f3f] bg-[#caf3eb] rounded-full -right-20 -top-28 blur-sm"></div>
                <div className="absolute w-[320px] h-[320px] dark:bg-[#535353] bg-[#b6f0e4] rounded-full -right-11 -top-16 blur-sm"></div>
                </div>

        
                <div className="relative z-10">
                <div 
                    className="w-full h-60 bg-contain bg-left bg-no-repeat m-3"
                    style={{ backgroundImage: "url('/images/Me-and_code.png')"}}
                ></div>

                <ul className={`w-full h-auto px-8 py-3 flex flex-col gap-3 pt-5`}>
                    {DrawerItems.map((item, index) => (
                    <button 
                        key={index} 
                        className="p-2 hover:text-blue-500 overflow-hidden transition-all duration-200 hover:shadow-lg"
                        onClick={()=>{itemParamHandler(item.param)}}
                        
                    > 
                        {languageFa ? 
                            <div 
                                className="flex justify-start gap-3"
                                style={{fontFamily:"vazir"}}
                            >
                                <span className="flex justify-center items-center text-2xl">{item.icon}</span>
                                <span className="text-xl">{item.EnTitle}</span>
                                
                            </div>
                        : 
                            <div 
                                className="flex justify-end gap-3"
                                style={{fontFamily:"aban"}}
                            >
                                <span className="text-xl">{item.FaTitle}</span>
                                <span className="flex justify-center items-center text-2xl">{item.icon}</span>
                                
                                
                            </div>
                        }
                    </button>
                    ))}
                </ul>
                </div>

            </div>
            </>

    )
}
export default Slider;