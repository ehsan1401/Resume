import { useLanguage } from "../utilities/LanguageContext";



function Header(){

  const HeaderItems = [
    {
      name: "Home",
      FAvalue: "خـــانه",
      ENvalue: "Home",
      param: "Home"
    },
    {
      name: "About Me",
      FAvalue: "درباره من",
      ENvalue: "About Me",
      param: "About-Me"
    },
    {
      name: "experince",
      FAvalue: "تجربیات",
      ENvalue: "experince",
      param: "experince"
    },
    {
      name: "Crypto",
      FAvalue: "ارز دیجیتال",
      ENvalue: "Crypto",
      param: "Crypto"
    },

  ];
  
  const { languageFa } = useLanguage();


  const setSearchParam = (key, value) => {
    const url = new URL(window.location.href);
    url.searchParams.set(key, value);
    window.history.pushState({}, '', url);
  };
  

  return(
      <div className="bg-transparent bg-opacity-20 absolute top-0 left-0 z-50 w-full text-center text-xs md:text-lg">
          <ul className="flex md:gap-20 gap-5 justify-center items-center py-5 text-Palette-Light-first"> 
            {HeaderItems.map((item)=>{
              return(
                <li 
                  className={`hover:text-Palette-Light-third hover:underline hover:scale-105 transition-all duration-300 cursor-pointer  ${languageFa ? '' : 'text-2xl font-semibold'}`}
                  key={item.name}
                  style={{fontFamily: `${languageFa ? "Vazir" : "Parand"}`}}
                  onClick={()=>{setSearchParam('page', item.param.toString())}}
                >
                  {
                    !languageFa ? item.FAvalue : item.ENvalue
                  }
                </li>
              )
            })}
          </ul>


      </div>
  )
}
export default Header;