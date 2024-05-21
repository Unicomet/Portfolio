import Card from "./Card.jsx"
import Navbar from "./Navbar.jsx"
import "./index.css"

import projectsMyBookmarksImg from "./assets/main-menu-gym.png"
import projectsSeismicNetworkImg from "./assets/projects-seismic-network.png"
import projectsWebBank from "./assets/projects-banco.png"
import Footer from "./Footer.jsx"

export default function App() {
  return (
  <>
    <Navbar>
    </Navbar>
    <div className="bg-secondary ">
      <div className=" md:flex py-12 px-12 xl:px-24">
        <div className="md:w-4/5"> 
          <h3 className="text-3xl font-bold">Hi, I'm Guillermo Montano</h3>
          <h3 className="font-medium">Computer Engineer who loves desveloping software</h3>
          <p className="mt-2 md:mr-10">I am a <b>self-motivated</b> software engineer graduate with 1 year of professional experience, who loves to learn and has
            a passion for software development to create things that are useful for people.
          </p>
        </div>
        <div className="flex mt-6 justify-center md:mt-0 md:w-1/5">
            <img src={projectsMyBookmarksImg} className="rounded-full aspect-square sm:max-h-48 md:max-h-60 md:ml-auto"/>
        </div>
      </div>
    </div>
    

    <div className="mx-12 xl:mx-24 mt-16">
      <h2 className="font-bold text text-4xl mb-12 text-center">Experience</h2>
        <div className="xl:w-2/4 xl:mx-auto">
          <h3 className="font-bold text-lg">Paid Intern at UAM's Accelerographic Network (Seismic Network)</h3>
          <h3 className="font-medium text-lg  mt-4">1 year (2023-2024)</h3>
          <ul className="list-disc list-inside mt-4">
            <li>I migrated the frontend of the application from old technologies (CSS, JS, and PHP) to more current ones (React with Typescript and Bootstrap 5).</li>
            <li>I added maps using Google Maps API to display different custom maps.</li>
            <li>I developed an API REST using Spring to store reports and seismic data in a MySQL database, improving the performance of consults.</li>
          </ul>
        </div>
      <h2 className="font-bold text text-4xl mb-12 text-center mt-24">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 lg:gap-8 h-1/6">
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
      </div>
    </div>
    <Footer>

    </Footer>
    
    
  </>
  )
}
