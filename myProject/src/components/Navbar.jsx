import myLogo from "../assets/Component img.svg";

function Navbar() {

  return (
    <>
      <header className="px-20 py-5 ">
        <a href="">
          <img src={myLogo} alt="logo" />
        </a>
         <nav className='hidden md:flex justify-end'>
            <ul className='flex gap-x-10 -mt-9 '>
                <li className=''><a href="/">Home</a></li>
                <li><a href="/">Flashcard</a></li>
                <li><a href="/">Contact</a></li>
                <li><a href="/">FAQ</a></li>
                <div className='bg-blue-500 -mt-1 w-28 text-center rounded-2xl flex justify-center items-center'><button className=' text-slate-50 font-bold'>Login</button></div>
            </ul>
        </nav> 
      </header>
        <button className="flex float-end px-5 -mt-14 md:hidden">
          <span className="material-symbols-outlined">menu</span>
        </button>
         
    </>
  );
}

export default Navbar;
