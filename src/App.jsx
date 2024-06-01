import Card from "./Card.jsx"
import Navbar from "./Navbar.jsx"
import "./index.css"

import profileImg from "./assets/profile.jpg"
import projectsSeismicNetworkImg from "./assets/projects-seismic-network.png"
import projectsWebBank from "./assets/projects-banco.png"
import Footer from "./Footer.jsx"
import logoGithub from "./assets/logos/github.svg"
import logoLinkedin from "./assets/logos/linkedin.svg"
import PdfResume from "./assets/docs/Resume_SoftwareE.pdf";


export default function App() {
  return (
  <>
    <Navbar>
    </Navbar>


    <div className="bg-secondary ">
      <div className=" md:flex py-12 px-6 lg:px-24 xl:px-40">
        <div className="md:w-4/5"> 
          <h3 className="text-3xl font-bold">Hi, I'm Guillermo Montano</h3>
          <h3 className="font-medium text-lg">Computer Engineer who loves developing software</h3>
          <p className="mt-2 md:mr-10 mb-6 text-lg xl:pr-48">I am a <b>self-motivated</b> software engineer graduate with 1 year of professional experience, who loves to learn and has
            a passion for software development to create things that are useful for people.
          </p>
          <div className="flex justify-center md:justify-start">
            <a href={PdfResume} target="_blank" className="btn mb-6 text-base"><button className="px-2">CHECK MY RESUME</button></a>
          </div>
          <div className="flex flex-row gap-2 md:ml-1 justify-center md:justify-start mb-2 md:mb-0">
            <a href="https://github.com/Unicomet" target="_blank">
                <img src={logoGithub} alt="Github profile" width="36" height="36" className="fill-current"/>
            </a>
            <a href="https://www.linkedin.com/in/guillermart1/" target="_blank">
                <img src={logoLinkedin} alt="Linkedin profile" width="40" height="40" className="fill-current"/>
            </a>
          </div>
        </div>
        <div className="flex mt-6 justify-center md:mt-0 md:mr-4 md:w-1/5">
            <img src={profileImg} className="rounded-full aspect-square max-h-48 md:max-h-64 md:ml-auto"/>
        </div>
      </div>
    </div>
    

    <div  className="mx-6 xl:mx-24 mt-16">
      <h2 className="font-bold text text-4xl mb-12 text-center">Experience</h2>
        <section id="experience" className="xl:w-2/4 xl:mx-auto">
          <h3 className="font-bold text-lg">Paid Intern at UAM's Accelerographic Network (Seismic Network)</h3>
          <h3 className="font-medium text-lg  mt-4">1 year (2023-2024)</h3>
          <ul className="list-disc list-inside mt-4">
            <li>I migrated the frontend of the application from old technologies (CSS, JS, and PHP) to more current ones (React with Typescript and Bootstrap 5).</li>
            <li>I added maps using Google Maps API to display different custom maps.</li>
            <li>I developed an API REST using Spring to store reports and seismic data in a MySQL database, improving the performance of consults.</li>
          </ul>
        </section>
      <h2 className="font-bold text text-4xl mb-12 text-center mt-24">Projects</h2>
      <section id="projects" className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 lg:gap-8 h-1/6">
        <Card
          title="Official Website for Seismic Network UAM"
          image={projectsSeismicNetworkImg}
          url="https://puntozip.com.mx/uam-red-acelerografica/index.php"
          >
            A project that I did as an intern in Accelerographic Network UAM. Uses HTML, CSS, Javascript and PHP.
            <h3 className="font-bold">Features:</h3>
            <ul className="list-disc list-inside">
              <li>Uses custom maps from Google Maps API.</li>
              <li>You can check raw data of seismic events or even graphs.</li>
              <li>You can check records of seismic events in an interactive map.</li>
              <li>Has a contact section where you can send emails.</li>
            </ul>    
          </Card>
          
          <Card
          title="Bank Web App"
          image={projectsWebBank}
          url="https://puntozip.com.mx/uam-red-acelerografica/index.php"
          >
            A web app CRUD that allow transactions for a bank. 
            <h3 className="font-bold">Features:</h3>
            <ul className="list-disc list-inside">
              <li>Uses custom maps from Google Maps API.</li>
              <li>You can check raw data of seismic events or even graphs.</li>
              <li>You can check records of seismic events in an interactive map.</li>
              <li>It ha s a contact section where you can send emails.</li>
            </ul>    
          </Card>
          
          <Card 
          title="MyBookmarks" 
          url="https://github.com/Unicomet/MyBookmarks">
            An Android app to make your bookmarks of books.
            <h3 className="font-bold">Features:</h3>
            <ul className="list-disc list-inside">
              <li>Fingerprint authentication.</li>
              <li>Data Persistency with Data Store with CRUD operations.</li>
              <li>Uses Android Jetpack components like viewmodels, fragments and a recyclerview to show the bookmarks in an efficient way.</li>
            </ul>
          </Card>
          <Card
          title="Official Website for Seismic Network UAM"
          image={projectsSeismicNetworkImg}
          url="https://puntozip.com.mx/uam-red-acelerografica/index.php"
          >
            A project that I did as an intern in Accelerographic Network UAM. Uses HTML, CSS, Javascript and PHP.
            <h3 className="font-bold">Features:</h3>
            <ul className="list-disc list-inside">
              <li>Uses custom maps from Google Maps API.</li>
              <li>You can check raw data of seismic events or even graphs.</li>
              <li>You can check records of seismic events in an interactive map.</li>
              <li>Has a contact section where you can send emails.</li>
            </ul>    
          </Card>
          <Card
          title="Official Website for Seismic Network UAM"
          image={projectsSeismicNetworkImg}
          url="https://puntozip.com.mx/uam-red-acelerografica/index.php"
          >
            A project that I did as an intern in Accelerographic Network UAM. Uses HTML, CSS, Javascript and PHP.
            <h3 className="font-bold">Features:</h3>
            <ul className="list-disc list-inside">
              <li>Uses custom maps from Google Maps API.</li>
              <li>You can check raw data of seismic events or even graphs.</li>
              <li>You can check records of seismic events in an interactive map.</li>
              <li>Has a contact section where you can send emails.</li>
            </ul>    
          </Card>
          <Card
          title="Official Website for Seismic Network UAM"
          image={projectsSeismicNetworkImg}
          url="https://puntozip.com.mx/uam-red-acelerografica/index.php"
          >
            A project that I did as an intern in Accelerographic Network UAM. Uses HTML, CSS, Javascript and PHP.
            <h3 className="font-bold">Features:</h3>
            <ul className="list-disc list-inside">
              <li>Uses custom maps from Google Maps API.</li>
              <li>You can check raw data of seismic events or even graphs.</li>
              <li>You can check records of seismic events in an interactive map.</li>
              <li>Has a contact section where you can send emails.</li>
            </ul>    
          </Card>
      </section>
    </div>
    <Footer>

    </Footer>
    
    
  </>
  )
}
