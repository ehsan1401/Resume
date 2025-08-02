import { MdiGithub } from "../../icon/github";
import { LineMdEmail, ShakingMailIcon, SimpleIconsGmail } from "../../icon/mailAnimation";
import { LineMdPhoneCallLoop } from "../../icon/Phone";
import { MdiTelegram, ShakingTelegramIcon, TelegramShakeIcon } from "../../icon/telegramShaking";
import { useLanguage } from "../../utilities/LanguageContext";



function Profile(){
    const { languageFa } = useLanguage();

    return(
        <div 
            className="w-full h-full relative bg-cover bg-no-repeat bg-center flex justify-center items-center " 
            style={{backgroundImage : 'url("/images/Background-profilePage.jpg")'}}
        >
            <div className="bg-white w-[70%] h-[85%] rounded-2xl shadow-md relative flex justify-center">
                
                <div 
                    className="image absolute -top-8 shadow-md bg-white w-40 h-40 rounded-full bg-cover bg-no-repeat bg-center"
                    style={{backgroundImage : 'url("/images/My_Profile-image.jpg")'}}
                ></div>
                <div className="absolute top-0 bg-opacity-15 h-32 w-full text-blue-500">
                    <a href="https://t.me/Opera_9" className="absolute right-8 top-8 text-4xl hover:scale-125 transition-all duration-300">
                        <MdiTelegram/>
                    </a>
                    <a href="https://github.com/ehsan1401" className="absolute left-8 top-8 text-4xl hover:scale-125 transition-all duration-300 ">
                        <MdiGithub/>
                    </a>
                </div>
                
                <div className="title flex flex-col text-center px-10">
                    <div className="w-full h-40"></div>
                    <h1 className="text-3xl">
                        {languageFa ? (
                            <span className="" style={{fontFamily:"vazir"}}> 
                                EHSAN JANGJOO
                            </span>
                        ) : (
                            <span className="" style={{fontFamily:"aban"}}>
                                احسان جنگجو
                            </span>
                        )}
                    </h1>
                      
                    <div className="description text-justify py-5" dir={`${languageFa ? `ltr`:`rtl`}`} style={{fontFamily:"vazir"}}>
                        { languageFa ? (
                            <div className="flex flex-col gap-1">
                                <p>Hi! I'm Ehsan Jangjo, a computer engineering student and front-end web developer.</p>
                                <p>I currently work part-time and remotely on web projects.</p>
                                <p>In addition to developing user interfaces, I also have solid experience in graphic design, video editing, and visual content creation.</p>
                                <p>My main focus is on building modern web interfaces using React.js, Next.js, TypeScript, and TailwindCSS.</p>
                                <p>I also work with tools like Photoshop, Premiere Pro, and Adobe XD.</p>
                                <p>I'm interested in freelance opportunities as well as full-time or part-time roles to enhance my skills and build a stronger portfolio.</p>


                            </div>
                        )
                        :
                        (
                            <div className="flex flex-col gap-2">
                                <p>سلام! من احسان جنگجو هستم، دانشجوی مهندسی کامپیوتر و توسعه‌دهنده‌ی فرانت‌اند وب.</p>
                                <p>به صورت پاره‌وقت و ریموت روی پروژه‌های وب کار می‌کنم و علاوه‌بر توسعه‌ی رابط کاربری، تجربه‌ی خوبی در طراحی گرافیک، تدوین و تولید محتوای بصری دارم.</p>

                                <p>تمرکز اصلی من روی توسعه‌ی رابط‌های مدرن وب با React.js، Next.js، TypeScript و TailwindCSS هست و در کنار اون با ابزارهایی مثل Photoshop، Premiere Pro و Adobe XD هم کار می‌کنم.</p>
                                <p>علاقه‌مندم در پروژه‌های فریلنسری یا تیم‌های تمام‌وقت/پاره‌وقت شرکت کنم تا مهارتم رو ارتقاء بدم و رزومه‌ی قوی‌تری بسازم.</p>
                            </div>

                        )
                        }
                    </div>
                </div>
  
            </div>

        </div>
    )
}

export default Profile ;