import "./index.css"
import PdfResume from "./assets/docs/Resume_SoftwareE.pdf";
import BurgerMenuIcon from "./assets/icons/burger-menu.svg";
import CancelMenuIcon from "./assets/icons/cancel-menu.svg";


export  default function Navbar(){

    function showMenu(){
        document.querySelector('body').classList.add('overflow-hidden');
        document.querySelector('#topNavbar').classList.remove('-left-full');
        document.querySelector('#topNavbar').classList.add('left-0');
        document.querySelector('#showMenuBtn').classList.add('hidden');
        document.querySelector('#hideMenuBtn').classList.remove('hidden')
    }

    function hideMenu(){
        document.querySelector('body').classList.remove('overflow-hidden');
        document.querySelector('#topNavbar').classList.remove('left-0');
        document.querySelector('#topNavbar').classList.add('-left-full');
        document.querySelector('#hideMenuBtn').classList.add('hidden')
        document.querySelector('#showMenuBtn').classList.remove('hidden');
    }


    return (
        <div className="navbar bg-primary px-6 xl:px-36">
            <button id="showMenuBtn" className="md:hidden" onClick={showMenu}><img src={BurgerMenuIcon} ></img></button>
            <button id="hideMenuBtn" className="hidden md:hidden" onClick={hideMenu}><img src={CancelMenuIcon} ></img></button>
            <div className="flex-1 justify-center md:justify-start">
                <a className="btn btn-ghost text-2xl px-0" href="https://unicomet.github.io/Portfolio/">Portfolio Guillermo M.</a>
            </div>
            <div className="flex-none">
                <nav id="topNavbar" className="menu absolute top-16 px-6 py-12 -left-full bg-primary w-full h-full md:static md:py-4 md:px-1 md:flex transition-all">
                    <ul className="flex flex-col md:flex-row justify-around items-center h-5/6 font-bold text-3xl md:text-xl">
                        <li><a href="#footer" onClick={hideMenu} className="text-center">Contact</a></li>
                        <li><a href={PdfResume} target="_blank" onClick={hideMenu} >Resume</a></li>
                        <li><a href="#experience" onClick={hideMenu} >Experience</a></li>
                        <li><a href="#projects" onClick={hideMenu} >Projects</a></li> 
                    </ul>
                </nav>
            </div>
        </div>
    )
}
