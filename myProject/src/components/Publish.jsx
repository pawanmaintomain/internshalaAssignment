import frame3 from '../assets/Frame3.svg';
import frame4 from '../assets/Frame4.svg';
function Publish() {
    return (
        <>
        <div className="flex justify-between px-20 flex-wrap">
            <button> <img src={frame3} alt="f3" className='w-44' /></button>
            <button> <img src={frame4} alt="f4" className='w-44' /></button>
        </div>

        </>
    )
}
export default Publish;