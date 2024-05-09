import myLogo from "../assets/Vector1.svg";
import frame from "../assets/Frame1.svg";
import frame2 from '../assets/Frame2.svg'
function MainComp() {
    let points = '9 + 6 + 7x - 2x - 3';

    const darkArea = ()=>{
        console.log('hello')
    }
    return (
        <>
            <div className="flex justify-center gap-16 my-16 flex-wrap">
                <a href="/" className="underline underline-offset-8 decoration-2">
                    Study
                </a>
                <a href="/">Quiz</a>
                <a href="/">Test</a>
                <a href="/">Game</a>
                <a href="/">Others</a>
            </div>

            <div className="w-1/3 h-80 bg-blue-500 text-center mx-auto rounded-3xl min-w-80">
                <div className="flex justify-between py-4 px-10">
                    <button onClick={darkArea}><img src={myLogo} alt="light" /></button>
                    <button><img src={frame} alt="sound" /></button>
                </div>

                <div className="flex justify-center items-center ">
                    <h1 className="py-20 text-2xl font-semibold text-slate-50">{points}</h1>
                </div>
            </div>

            <div className="flex justify-center mt-5">
                <img src={frame2} alt="" className="w-96"/>
            </div>
        </>
    );
}
export default MainComp;
