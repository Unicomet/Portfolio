import "./index.css"
import PdfResume from "./assets/docs/Resume_SoftwareE.pdf";


export  default function Navbar(){
    return (
        <div className="navbar bg-primary px-12 xl:px-36">
        <div className="flex-1">
            <a className="btn btn-ghost text-xl px-0">Portfolio Guillermo M.</a>
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal px-1 font-medium text-lg">
                {/*
                <li><a href="#footer">Contact</a></li>
                <li><a href={PdfResume} target="_blank">Resume</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#projects">Projects</a></li>
            
                */} 
            </ul>
        </div>
        </div>
    )
}
