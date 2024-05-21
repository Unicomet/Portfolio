import "./index.css"

export  default function Navbar(){
    return (
        <div className="navbar bg-primary px-12 xl:px-24">
        <div className="flex-1">
            <a className="btn btn-ghost text-xl">Portfolio Guillermo M.</a>
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal px-1 font-medium text-lg">
                <li><a>Contact</a></li>
                <li><a>Resume</a></li>
                <li><a>Experience</a></li>
                <li><a>Projects</a></li>
            </ul>
        </div>
        </div>
    )
}
