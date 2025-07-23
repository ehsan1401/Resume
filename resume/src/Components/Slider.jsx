import { useContext } from "react";
import { MyContext } from "../utilities/MyContext";
import TypingEffect from "../utilities/TypingEffect";


function Slider(){


    const root = window.document.documentElement;
    root.classList.add('dark');



    const { value, setValue } = useContext(MyContext);
    const text = "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.";
   
    const text2 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos necessitatibus officiis amet inventore, exercitationem, esse ipsa iusto ex reprehenderit aut cumque aliquam fugiat vero veniam soluta blanditiis expedita, similique accusamus."
    return(
        <>
            <div className='bg-Palette-Light-first dark:bg-Palette-Dark-fourth h-full w-full py-8 px-5'>
                <div className="w-full h-full border-2 border-lime-600 border-solid text-white p-2">
                    {value && 
                        // <TypingEffect text={text} lang="fa" speed={20} />
                        <TypingEffect text={text2} lang="en" speed={20} />
                    }



                </div>
            </div>
        
        </>
    )
}
export default Slider;