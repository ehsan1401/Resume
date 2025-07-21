import './App.css';

import Slider from './Components/Slider';
import Footer from './Components/Footer';
import Header from './Components/Header';
import MainPage from './Components/MainPage';
import { useContext, useState } from 'react';
import { MyContext } from './utilities/MyContext';
import { Button, Dropdown, FloatButton } from 'antd';
import { MaterialSymbolsFormatListBulleted } from './icon/menu';
function App() {

 
  const [showSlider, setshowSlider] = useState(false);
  const { value, setValue } = useContext(MyContext);

  function showSliderHandler(){
      setshowSlider(!showSlider)
      setValue(showSlider)
  }


  const items= [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="#">
          1st menu item
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="#">
          2nd menu item
        </a>
      ),
    },
    {
      key: '3',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="#">
          3rd menu item
        </a>
      ),
    },
  ];

  return (
    <div className="App ">
      
      <main className="grid md:flex flex-row overflow-hidden h-screen">
        <div className={`${value? `md:w-3/4 w-full` : `w-full`} md:h-full p-7 md:pt-20 pt-28 transition-all transform duration-300 bg-cover bg-no-repeat md:bg-left bg-[-600px_0px] `}
        style={{ backgroundImage: "url('/images/Wallpeaper_GPU.png')"}}
        >
          <Header />
          <MainPage/>
        </div>

        <aside className={`${value ? `w-1/4` : `w-0`} h-full transition-all transform duration-300 hidden md:block`}>
          <Slider />
        </aside>

      </main>
      <div className='hidden md:inline'>
        <FloatButton className='scale-125 hover:scale-150 transition-all duration-250 hover:-rotate-180' type="default" icon={<MaterialSymbolsFormatListBulleted/>} onClick={showSliderHandler} />
      </div>
      <div className='md:hidden'>
        <Dropdown menu={{ items }} placement="topRight" arrow>
          <FloatButton className='scale-125 hover:scale-150 transition-all duration-250 hover:-rotate-180' type="default" icon={<MaterialSymbolsFormatListBulleted/>}/>
        </Dropdown>
      </div>
      <Footer />
    </div>

  );
}

export default App;
