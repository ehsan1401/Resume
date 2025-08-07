



// work on skill page - 10% compelete



import { Progress } from "antd";
import { MdiGithub } from "../../icon/github";
import { useLanguage } from "../../utilities/LanguageContext";

function Skills() {
    const { languageFa } = useLanguage();
    
  const AllSkills = [
    {
      skillEN: "Frontend Development",
      skillFa:"توسعه وبسایت - سمت کاربر (فرانت اند)",
      percentage: 80,
      icon: <MdiGithub className="text-blue-500 text-xl" />,
    }
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
            className="w-[95%] p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col gap-4"
            >
            <div className="flex items-center gap-3">
                {skill.icon}
                <h2 className={`text-lg font-semibold text-gray-800 w-full ${languageFa ? `text-left` : `text-right`}`}>
                    {
                        languageFa ? `${skill.skillEN}` : `${skill.skillFa}`
                    }
                </h2>
            </div>
            <div className="flex gap-3" style={{fontFamily: `${languageFa ? "Vazir" : "Lalezar"}`}}>
                <span>مهارت: </span>
                <Progress percent={skill.percentage} strokeColor="#1677ff" />
            </div>
            </div>
        ))}
        </div>
    </div>
  );
}

export default Skills;


