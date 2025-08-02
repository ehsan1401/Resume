import { useEffect, useState } from "react";
import Home from "./panels/Home";
import AboutMe from "./panels/AboutMe";
import Experince from "./panels/experince";
import Profile from "./panels/profile";
import Skills from "./panels/skills";
import WorkExperience from "./panels/WorkExperience";
import FrontEnd from "./panels/FrontEnd";
import Graphic from "./panels/Graphic";
import Portfolio from "./panels/Portfolio";
import { useLanguage } from "../utilities/LanguageContext";

function MainPage() {
  const test = true;
  const [pageParam, setPageParam] = useState(null);
  const { languageFa } = useLanguage();

  const getCurrentPage = () => {
    const params = new URLSearchParams(window.location.search);
    return params.get("page");
  };

  useEffect(() => {
    setPageParam(getCurrentPage());

    const handleLocationChange = () => {
      setPageParam(getCurrentPage());
    };

    const originalPushState = window.history.pushState;
    window.history.pushState = function (...args) {
      originalPushState.apply(this, args);
      window.dispatchEvent(new Event("pushstate"));
    };

    window.addEventListener("popstate", handleLocationChange);
    window.addEventListener("pushstate", handleLocationChange);

    return () => {
      window.removeEventListener("popstate", handleLocationChange);
      window.removeEventListener("pushstate", handleLocationChange);
    };
  }, []);

  const PanelItems = [
    {
        'name': "Home",
        'param' : 'Home',
        'component' : <Home/>
    },
    {
        'name': "About Me",
        'param' : 'About-Me',
        'component' : <AboutMe/>
    },
    {
        'name': "experince",
        'param' : 'experince',
        'component' : <Experince/>
    },
    {
        'name': "Profile",
        'param' : 'Profile',
        'component' : <Profile/>
    },
    {
        'name': "Technical Skills",
        'param' : 'Technical-Skills',
        'component' : <Skills/>
    },
    {
        'name': "Work Experience",
        'param' : 'Work-Experience',
        'component' : <WorkExperience/>
    },
    {
        'name': "Front-End",
        'param' : 'Front-End',
        'component' : <FrontEnd/>
    },
    {
        'name': "Graphic",
        'param' : 'Graphic',
        'component' : <Graphic/>
    },
    {
        'name': "Portfolio",
        'param' : 'Portfolio',
        'component' : <Portfolio/>
    },
  ]

  return (
    <div className="flex justify-center items-center w-full h-full">
      {pageParam ? (
        <div className="bg-neutral-100/90 overflow-x-hidden overflow-y-scroll backdrop-blur-md w-full h-full rounded-2xl shadow-lg">
        {PanelItems
        .filter((panelit) => panelit.param === pageParam)
        .map((panelit, index) => (
            <div key={index} className="w-full h-full">
              {panelit.component}
            </div>
        ))}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default MainPage;
