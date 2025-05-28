import Card from "./Card.jsx";
import Navbar from "./Navbar.jsx";
import "./index.css";

import profileImg from "./assets/profile.jpg";
import projectsSeismicNetworkImg from "./assets/projects-seismic-network.png";
import projectsWebBank from "./assets/projects-banco.png";
import Footer from "./Footer.jsx";
import logoGithub from "./assets/logos/github.svg";
import logoLinkedin from "./assets/logos/linkedin.svg";
import PdfResume from "./assets/docs/Resume_SoftwareE.pdf";

export default function App() {
  return (
    <>
      <Navbar></Navbar>

      <div className="bg-secondary ">
        <div className=" md:flex py-12 px-6 lg:px-24 xl:px-40">
          <div className="md:w-4/5">
            <h3 className="text-3xl font-bold">Hi, I'm Guillermo Montano</h3>
            <h3 className="font-medium text-lg">
              Computer Engineer who loves developing software
            </h3>
            <p className="mt-2 md:mr-10 mb-6 text-lg xl:pr-48">
              I am a software engineer graduate with 3 years of work experience,
              who loves to learn and has passion for software development
              because I can create things that help people.
            </p>
            <div className="flex justify-center md:justify-start">
              <a
                href={PdfResume}
                target="_blank"
                className="btn mb-6 text-base"
              >
                <button className="px-2">CHECK MY RESUME</button>
              </a>
            </div>
            <div className="flex flex-row gap-2 md:ml-1 justify-center md:justify-start mb-2 md:mb-0">
              <a href="https://github.com/Unicomet" target="_blank">
                <img
                  src={logoGithub}
                  alt="Github profile"
                  width="36"
                  height="36"
                  className="fill-current"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/guillermart1/"
                target="_blank"
              >
                <img
                  src={logoLinkedin}
                  alt="Linkedin profile"
                  width="40"
                  height="40"
                  className="fill-current"
                />
              </a>
            </div>
          </div>
          <div className="flex mt-6 justify-center md:mt-0 md:mr-4 md:w-1/5">
            <img
              src={profileImg}
              className="rounded-full aspect-square max-h-48 md:max-h-64 md:ml-auto"
            />
          </div>
        </div>
      </div>

      <div className="mx-6 xl:mx-24 mt-16">
        <h2 className="font-bold text text-4xl mb-12 text-center">
          Experience
        </h2>
        <section id="experience" className="xl:w-2/4 xl:mx-auto">
          <h3 className="font-bold text-lg">
            Software Engineer at Distribuciones Cantilever. The focus of the
            company is on IoT and Measuring solutions
          </h3>
          <h3 className="font-medium text-lg  mt-4">1 year</h3>
          <ul className="list-disc list-inside mt-4">
            <li>
              Made a bluetooth manager to send commands and receive data from a
              monitoring device for electrical infrastructure via Bluetooth Low
              Energy, using binary serialization.
              <ul className="list-disc list-inside mt-2">
                <li>
                  - I implemented CRC validation, data length validation, data
                  codification and error handling from 0.
                </li>
                <li>
                  - Reduced the number of connection failures by 80% and speed
                  up the data transfer by 30%.
                </li>
              </ul>
            </li>
            <li>
              Developed a transactions system for using microservices with
              Spring Boot.
            </li>
            <li>
              Improved load time of some dashboards up to 32% of a web app for
              monitoring electrical infrastructure with more than 60 pages.
            </li>
            <li>
              Developing bots that people use for integration and installation
              of all products, using Java and Javascript. I reduced the Docker
              images sizes by 70% and build times by 25%.
            </li>
          </ul>
          <h3 className="font-bold text-lg mt-8">
            Paid Intern at UAM's Accelerographic Network (Seismic Network)
          </h3>
          <h3 className="font-medium text-lg  mt-4">1 year 6 months</h3>
          <ul className="list-disc list-inside mt-4">
            <li>
              I migrated the frontend of the application from old technologies
              (CSS, JS, and PHP) to more current ones (React with Typescript and
              Bootstrap 5).
            </li>
            <li>
              I added maps using Google Maps API to display different custom
              maps.
            </li>
            <li>
              I developed an API REST using Spring to store reports and seismic
              data in a MySQL database, improving the performance of consults.
            </li>
          </ul>

          <h3 className="font-bold text-lg mt-8">Freelance</h3>
          <h3 className="font-medium text-lg  mt-4">6 months</h3>
          <ul className="list-disc list-inside mt-4">
            <li>Made automations using Python.</li>
            <li>Made systems for inventory management using Java</li>
          </ul>
        </section>
        <h2 className="font-bold text text-4xl mb-12 text-center mt-24">
          Projects
        </h2>
        <section
          id="projects"
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 lg:gap-8 h-1/6"
        >
          <Card
            title="Tutor UAM API"
            url="https://github.com/Unicomet/tutor-uam-api"
          >
            An API Rest for a tutorship scheduling app
            <h3 className="font-bold">Features:</h3>
            <ul className="list-disc list-inside">
              <li>Made with Spring Boot</li>
              <li>Uses a Mysql as database and Hibernate as ORM</li>
              <li>
                Uses JWT for authentication and authorization using Spring
                Security
              </li>
              <li>Has multiple endpoints and a general error handling </li>
            </ul>
          </Card>
          <Card title="Gym Managment System">
            A management system for a gym.
            <h3 className="font-bold">Features:</h3>
            <ul className="list-disc list-inside">
              <li>
                A management system for a gym that allows to register personal
                data from users, subscribe them to the gym and activities and
                manage their suscriptions
              </li>
              <li>
                Uses MVC architecture. Made with Java and Swing Framework.{" "}
              </li>
              <li>
                Has a Web API REST made with Spring using a MySQL database.
              </li>
            </ul>
          </Card>
          <Card title="File Transfer with Replication">
            A file transfer where you can transfer files to a server
            <h3 className="font-bold">Features:</h3>
            <ul className="list-disc list-inside">
              <li>
                A file transfer where you can transfer files to a server using
                TCP and UDP
              </li>
              <li>
                When someone has transferred a file, it is replicated in three
                servers using Multicast (UDP).
              </li>
              <li>
                Has a UI made with Java Swing and backend made with Java 21.
              </li>
            </ul>
          </Card>
          <Card
            title="Official Website for Seismic Network UAM"
            image={projectsSeismicNetworkImg}
            url="https://puntozip.com.mx/uam-red-acelerografica/index.php"
          >
            A project that I did as an intern in Accelerographic Network UAM.
            Uses HTML, CSS, Javascript and PHP.
            <h3 className="font-bold">Features:</h3>
            <ul className="list-disc list-inside">
              <li>Uses custom maps from Google Maps API.</li>
              <li>You can check raw data of seismic events or even graphs.</li>
              <li>
                You can check records of seismic events in an interactive map.
              </li>
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
              <li>
                You can check records of seismic events in an interactive map.
              </li>
              <li>It ha s a contact section where you can send emails.</li>
            </ul>
          </Card>
          <Card
            title="MyBookmarks"
            url="https://github.com/Unicomet/MyBookmarks"
          >
            An Android app to make your bookmarks of books.
            <h3 className="font-bold">Features:</h3>
            <ul className="list-disc list-inside">
              <li>Fingerprint authentication.</li>
              <li>Data Persistency with Data Store with CRUD operations.</li>
              <li>
                Uses Android Jetpack components like viewmodels, fragments and a
                recyclerview to show the bookmarks in an efficient way.
              </li>
            </ul>
          </Card>
        </section>
      </div>
      <Footer></Footer>
    </>
  );
}
