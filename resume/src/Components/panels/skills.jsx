
// work on skill page - 70% compelete

import { Progress } from "antd";
import { useLanguage } from "../../utilities/LanguageContext";
import { HTML5Logo } from "../Logo/HTML5Logo";
import { CssLogo } from "../Logo/CssLogo";
import { JavaScriptLogo } from "../Logo/JavaScriptLogo";
import { LogosTypescriptIcon } from "../Logo/TypeScript";
import { ReactLogo } from "../Logo/ReactLogo";
import { NextJsLogo } from "../Logo/NextJsLogo";
import { TailwindLogo } from "../Logo/TailwindLogo";
import { AntDesignLogo } from "../Logo/AntDesignLogo";
import { GitColorfulLogo } from "../Logo/GitColorfulLogo";
import { ResponsiveDesignLogo } from "../Logo/ResponsiveDesignLogo";
import { CppLogo } from "../Logo/CppLogo";
import { LogosPython } from "../Logo/PythonLogo";
import { NestJSLogo } from "../Logo/NestJsLogo";
import { SqlServerLogo } from "../Logo/SqlServerLogo";
import { PHPLogo } from "../Logo/PHPLogo";
import { NodeJsLogo } from "../Logo/NodeJsLogo";

function Skills() {
    const { languageFa } = useLanguage();
    
  const AllSkills = [
    {
      skillEN: "HTML - Markup Language",
      skillFa:"HTML زبان نشانه گذاری ",
      shortName : "HTML",
      percentage: 90,
      icon: <HTML5Logo className="text-xl" />,
    },
    {
      skillEN: "Css - Styling Language",
      skillFa:"CSS زبان استایل دهی",
      shortName : "CSS",
      percentage: 80,
      icon: <CssLogo className="text-xl" />,
    },
    {
      skillEN: "Java Script",
      skillFa:"جاوا اسکریپت - JavaScript",
      shortName : "JavaScript",
      percentage: 80,
      icon: <JavaScriptLogo className="text-xl" />,
    },
    {
      skillEN: "Type Script",
      skillFa:"تایپ اسکریپت - TypeScript",
      shortName : "TypeScript",
      percentage: 70,
      icon: <LogosTypescriptIcon className="text-xl" />,
    },
    {
      skillEN: "ReactJs - Js Framework",
      skillFa:"ری اکت جی اس - ReactJs - Js Framework",
      shortName : "ReactJs",
      percentage: 80,
      icon: <ReactLogo className="text-xl" />,
    },
    {
      skillEN: "NextJs - React Framework",
      skillFa:"نکست جی اس - NextJS - React Framework",
      shortName : "NextJs",
      percentage: 80,
      icon: <NextJsLogo className="text-xl" />,
    },
    {
      skillEN: "TailwindCss - Css Framework",
      skillFa:"تیلویند - TailwindCss - Css Framework",
      shortName : "TailwindCss",
      percentage: 90,
      icon: <TailwindLogo className="text-xl" />,
    },
    {
      skillEN: "Git & GitHub - Version Control",
      skillFa:"گیت & گیت هاب - کنترل نسخه - Git & GitHub",
      shortName : "Git & GitHub",
      percentage: 90,
      icon: <GitColorfulLogo className="text-xl" />,
    },
    {
      skillEN: "Ant Design - React UI Framework",
      skillFa:"آنت دیزاین - Ant Design - React UI Framework",
      shortName : "Ant Design",
      percentage: 95,
      icon: <AntDesignLogo />,
    },

  ];
  const OtherSkills = [
    {
      skillEN: "Responsive Web Design",
      skillFa:"طراحی وب ریسپانسیو - Responsive Web Design",
      shortName : "Responsive Design",
      percentage: 90,
      icon: <ResponsiveDesignLogo className="text-xl" />,
    },
    {
      skillEN: "SQL Server - Server Handling Language",
      skillFa:"SQL سرور  - SQL Server - Server Handling Language",
      shortName : "SQL Server",
      percentage: 20,
      icon: <SqlServerLogo className="text-xl" />,
    },
    {
      skillEN: "NestJS - Js Back-End Framework",
      skillFa:"نست جی اس - NestJS - Js Back-End Framework",
      shortName : "NestJS",
      percentage: 20,
      icon: <NestJSLogo className="text-xl" />,
    },
    {
      skillEN: "PHP - Back-End Programing Language",
      skillFa:"پی اچ پی - PHP - Back-End Programing Language",
      shortName : "PHP",
      percentage: 40,
      icon: <PHPLogo className="text-xl" />,
    },
    {
      skillEN: "NodeJs - JavaScript runtime environment",
      skillFa:"نود جی اس - NodeJs - JavaScript runtime environment",
      shortName : "NodeJs",
      percentage: 40,
      icon: <NodeJsLogo className="text-xl" />,
    },
    {
      skillEN: "C++ Programing Language",
      skillFa:" C++ زبان برنامه نویسی - Programing Language",
      shortName : "C++",
      percentage: 40,
      icon: <CppLogo className="text-xl" />,
    },
    {
      skillEN: "Python Programing Language",
      skillFa:" Python زبان برنامه نویسی - Programing Language",
      shortName : "Python",
      percentage: 50,
      icon: <LogosPython className="text-xl" />,
    },
  ];

  return (
    <div className="w-full px-10 py-10">
        <h1 
            className={`text-4xl w-full py-3 px-5 ${!languageFa ? `text-right` : `text-left`}`} 
            style={{fontFamily: `${languageFa ? "Vazir" : "Lalezar"}`}}
        > 
                {languageFa ? 'My Technical Skills' : 'مهارت های فنی من'}
        </h1>
        <div className="w-full flex flex-wrap flex-col gap-6 p-4 justify-center">
        {AllSkills.map((skill, index) => (
            <div
            key={index}
            className="w-[100%] p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col gap-4"
            >
            <div className="flex items-center gap-3">
                {languageFa ? skill.icon : null}
                <h2 className={`text-lg font-semibold text-gray-800 w-full ${languageFa ? `text-left` : `text-right`}`}>
                    {
                        languageFa ? `${skill.skillEN}` : `${skill.skillFa}`
                    }
                </h2>
                {!languageFa ? skill.icon : null}
            </div>
            <div className={`flex gap-3`} style={{fontFamily: `${languageFa ? "Vazir" : "Lalezar"}`}} dir={`${languageFa ? "ltr" : "rtl"}`}>
                {languageFa ? <span>Ability: </span> : <span>مهارت: </span>}
                <Progress percent={skill.percentage} strokeColor="#1677ff" />
            </div>
            </div>
        ))}
        </div>
        <h1 
            className={`text-4xl w-full py-3 px-5 ${!languageFa ? `text-right` : `text-left`}`} 
            style={{fontFamily: `${languageFa ? "Vazir" : "Lalezar"}`}}
        > 
                {languageFa ? 'My Other Skills' : 'دیگر مهارت های من'}
        </h1>
        <div className="w-full flex flex-wrap flex-col gap-6 p-4 justify-center">
          {OtherSkills.map((skill, index) => (
            <div
            key={index}
            className="w-[100%] p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col gap-4"
            >
            <div className="flex items-center gap-3">
                {languageFa ? skill.icon : null}
                <h2 className={`text-lg font-semibold text-gray-800 w-full ${languageFa ? `text-left` : `text-right`}`}>
                    {
                        languageFa ? `${skill.skillEN}` : `${skill.skillFa}`
                    }
                </h2>
                {!languageFa ? skill.icon : null}
            </div>
            <div className={`flex gap-3`} style={{fontFamily: `${languageFa ? "Vazir" : "Lalezar"}`}} dir={`${languageFa ? "ltr" : "rtl"}`}>
                {languageFa ? <span>Ability: </span> : <span>مهارت: </span>}
                <Progress percent={skill.percentage} strokeColor="#1677ff" />
            </div>
            </div>
        ))}
        </div>
    </div>
  );
}

export default Skills;


