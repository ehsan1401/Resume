

function MainPage(){
    const test = true ; 

    return(
        <div className="flex justify-center items-center w-full h-full">
            {/* <button onClick={showSliderHandler}>Show Slider</button> */}
            {test ? 
                <div className="bg-neutral-700/30 overflow-x-hidden overflow-y-scroll backdrop-blur-md w-full h-full rounded-2xl shadow-lg border border-white/10">
                
                </div>
                :
             <></>   
            }

        </div>
    )
}
export default MainPage;