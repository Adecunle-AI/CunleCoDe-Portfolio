import React, { useState, useEffect } from 'react';
import { projects, skills, testimonials } from './data.js'; // Import data from data.js

// --- Icon Components (Replacing @heroicons/react/solid) ---
// These are inline SVG representations of the Heroicons you were using.
const ArrowRightIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z" clipRule="evenodd" />
  </svg>
);

const CodeIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path fillRule="evenodd" d="M12.5 2.25a.75.75 0 00-1.5 0v2.25c0 .414.336.75.75.75s.75-.336.75-.75V2.25zM12.5 19.5a.75.75 0 00-1.5 0v2.25c0 .414.336.75.75.75s.75-.336.75-.75V19.5zM18.633 6.253a.75.75 0 00-1.06-1.06L14.75 7.94l-2.07-2.07a.75.75 0 00-1.06 1.06L13.69 9l-2.07 2.07a.75.75 0 001.06 1.06l2.07-2.07 2.823 2.823a.75.75 0 001.06-1.06L16.75 9l2.823-2.823zM5.367 6.253a.75.75 0 011.06-1.06L9.25 7.94l2.07-2.07a.75.75 0 011.06 1.06L10.31 9l2.07 2.07a.75.75 0 01-1.06 1.06L9.25 10.06l-2.823 2.823a.75.75 0 01-1.06-1.06L7.25 9l-2.823-2.823z" clipRule="evenodd" />
  </svg>
);

const BadgeCheckIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
  </svg>
);

const ChipIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path fillRule="evenodd" d="M9.315 7.587l.636.636a1.125 1.125 0 010 1.592l-.636.636a1.125 1.125 0 01-1.592 0l-.636-.636a1.125 1.125 0 010-1.592l.636-.636a1.125 1.125 0 011.592 0zm5.372 0l.636.636a1.125 1.125 0 010 1.592l-.636.636a1.125 1.125 0 01-1.592 0l-.636-.636a1.125 1.125 0 010-1.592l.636-.636a1.125 1.125 0 011.592 0zm-5.372 5.372l.636.636a1.125 1.125 0 010 1.592l-.636.636a1.125 1.125 0 01-1.592 0l-.636-.636a1.125 1.125 0 010-1.592l.636-.636a1.125 1.125 0 011.592 0zm5.372 0l.636.636a1.125 1.125 0 010 1.592l-.636.636a1.125 1.125 0 01-1.592 0l-.636-.636a1.125 1.125 0 010-1.592l.636-.636a1.125 1.125 0 011.592 0zM12 3a.75.75 0 01.75.75v.007a.75.75 0 01-1.5 0V3.757A.75.75 0 0112 3zm0 18a.75.75 0 01.75.75v.007a.75.75 0 01-1.5 0V21.757A.75.75 0 0112 21zM3 12a.75.75 0 01.75-.75h.007a.75.75 0 010 1.5H3.757A.75.75 0 013 12zm18 0a.75.75 0 01.75-.75h.007a.75.75 0 010 1.5H21.757A.75.75 0 0121 12zM6.587 4.63l.636.636a.75.75 0 010 1.06.75.75 0 01-1.06 0L4.63 5.69a.75.75 0 010-1.06.75.75 0 011.06 0zm11.313 0l.636.636a.75.75 0 010 1.06.75.75 0 01-1.06 0L17.37 5.69a.75.75 0 010-1.06.75.75 0 011.06 0zM6.587 17.37l.636.636a.75.75 0 010 1.06.75.75 0 01-1.06 0l-.636-.636a.75.75 0 010-1.06.75.75 0 011.06 0zm11.313 0l.636.636a.75.75 0 010 1.06.75.75 0 01-1.06 0l-.636-.636a.75.75 0 010-1.06.75.75 0 011.06 0z" clipRule="evenodd" />
  </svg>
);

const TerminalIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path fillRule="evenodd" d="M6.25 6.375a.75.75 0 01.75-.75h3.375c.414 0 .75.336.75.75s-.336.75-.75.75H7.75v1.5h1.5a.75.75 0 010 1.5h-1.5v1.5h3.375a.75.75 0 010 1.5H6.25a.75.75 0 01-.75-.75V7.125a.75.75 0 01.75-.75zM14.75 6.25a.75.75 0 00-.75.75v4.5c0 .414.336.75.75.75h3.75a.75.75 0 00.75-.75V7c0-.414-.336-.75-.75-.75h-3.75zm.75 1.5h2.25v2.25H15.5V7.75zM12 2.25a.75.75 0 00-1.5 0v2.25c0 .414.336.75.75.75s.75-.336.75-.75V2.25zM12 19.5a.75.75 0 00-1.5 0v2.25c0 .414.336.75.75.75s.75-.336.75-.75V19.5zM18.633 6.253a.75.75 0 00-1.06-1.06L14.75 7.94l-2.07-2.07a.75.75 0 00-1.06 1.06L13.69 9l-2.07 2.07a.75.75 0 001.06 1.06l2.07-2.07 2.823 2.823a.75.75 0 001.06-1.06L16.75 9l2.823-2.823zM5.367 6.253a.75.75 0 011.06-1.06L9.25 7.94l2.07-2.07a.75.75 0 011.06 1.06L10.31 9l2.07 2.07a.75.75 0 01-1.06 1.06L9.25 10.06l-2.823 2.823a.75.75 0 01-1.06-1.06L7.25 9l-2.823-2.823z" clipRule="evenodd" />
  </svg>
);

const UsersIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M4.5 6.75a.75.75 0 00-1.5 0v7.5a.75.75 0 001.5 0v-7.5zM12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12 21a9 9 0 100-18 9 9 0 000 18z" />
    <path fillRule="evenodd" d="M12 8.25c-2.209 0-4 1.791-4 4s1.791 4 4 4 4-1.791 4-4-1.791-4-4-4z" clipRule="evenodd" />
  </svg>
);

function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10 shadow-lg transition-all duration-300">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl hover:text-white transition-colors duration-200">
            Adekunle Adedeji
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 text-gray-400 hover:text-white transition-colors duration-200">
            Projects
          </a>
          <a href="#skills" className="mr-5 text-gray-400 hover:text-white transition-colors duration-200">
            Skills
          </a>
          <a href="#testimonials" className="mr-5 text-gray-400 hover:text-white transition-colors duration-200">
            Testimonials
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-indigo-600 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-700 rounded-lg text-white text-base mt-4 md:mt-0 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5">
          Contact
          <ArrowRightIcon className="w-4 h-4 ml-2" />
        </a>
      </div>
    </header>
  );
}

function About() {
  return (
    <section id="about" className="text-gray-300 bg-gray-950">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-5xl text-4xl mb-4 font-extrabold text-white">
            Hi, I'm <span className="text-indigo-400">CunleCode.</span>
            <br className="hidden lg:inline-block" />I am eager to build amazing <span className="text-green-400">web experiences and apps.</span>
          </h1>
          <p className="mb-8 leading-relaxed text-lg">
           A frontend developer with a passion for creating user-friendly and visually appealing web experiences.
           I have a strong foundation in HTML, CSS, and JavaScript, and I'm currently expanding my skillset with React.js and other frontend tools.
           My journey into web development is driven by a fascination with coding and its potential to communicate with computers in powerful and intuitive ways.
           I'm eager to apply and expand my skills in a professional frontend development environment and continue to grow as a developer.
          </p>
          <div className="flex justify-center flex-wrap gap-4">
    
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-3 px-8 focus:outline-none hover:bg-green-600 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"> {/* Rounded full, larger padding, more dynamic hover */}
              Work With Me
            </a>
            <a
              href="#projects"
              className="inline-flex text-gray-300 bg-gray-800 border-0 py-3 px-8 focus:outline-none hover:bg-gray-700 hover:text-white rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"> {/* Rounded full, larger padding, more dynamic hover */}
              Coding Sample
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 relative group">
          <img
            className="object-cover object-center rounded-lg shadow-2xl transition-transform duration-500 group-hover:scale-105"
            alt="hero"
            src="https://placehold.co/720x600/2D3748/A0AEC0?text=Coding+Image"
            onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/720x600/2D3748/A0AEC0?text=Error"; }}
          />
          
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 rounded-lg transition-opacity duration-300"></div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="text-gray-300 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-12 h-12 mb-4 text-indigo-400" />
          <h1 className="sm:text-4xl text-3xl font-bold title-font mb-4 text-white">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-400">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
            fuga dolore.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <div key={project.image} className="sm:w-1/2 w-full p-4"> {/* Changed <a> to <div> for better hover control */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block group relative rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  src={project.image}
                  onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x250/2D3748/A0AEC0?text=Error"; }}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed text-gray-300">{project.description}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Skills Component ---
function Skills() {
  return (
    <section id="skills" className="text-gray-300 bg-gray-950"> {/* Adjusted background and text color */}
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <ChipIcon className="w-12 h-12 inline-block mb-4 text-green-400" /> {/* Larger icon, color tint */}
          <h1 className="sm:text-4xl text-3xl font-bold title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi sit
            ipsa delectus eum quo voluptas aspernatur accusantium distinctio
            possimus est.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded-lg flex p-4 h-full items-center shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105"> {/* Rounded corners, shadow, scale on hover */}
                <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Testimonials Component ---
function Testimonials() {
  return (
    <section id="testimonials" className="text-gray-300 bg-gray-900"> {/* Adjusted background and text color */}
      <div className="container px-5 py-10 mx-auto text-center">
        <UsersIcon className="w-12 h-12 inline-block mb-4 text-indigo-400" /> {/* Larger icon, color tint */}
        <h1 className="sm:text-4xl text-3xl font-bold title-font text-white mb-12">
          Client Testimonials
        </h1>
        <div className="flex flex-wrap m-4">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-800 bg-opacity-70 p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1"> {/* Softer background, rounded, shadow, hover effect */}
                <TerminalIcon className="block w-8 h-8 text-gray-500 mb-4" />
                <p className="leading-relaxed mb-6 text-gray-300">{testimonial.quote}</p>
                <div className="inline-flex items-center">
                  <img
                    alt="testimonial"
                    src={testimonial.image}
                    className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center border-2 border-indigo-400" // Border around image
                    onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/100x100/2D3748/A0AEC0?text=Error"; }}
                  />
                  <span className="flex-grow flex flex-col pl-4 text-left"> {/* Aligned text left */}
                    <span className="title-font font-medium text-white">
                      {testimonial.name}
                    </span>
                    <span className="text-gray-400 text-sm uppercase">
                      {testimonial.company}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Contact Component ---
function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [status, setStatus] = React.useState(""); // 'success', 'error', 'submitting'

  // Function to encode form data for Netlify
  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  // Handle form submission
  function handleSubmit(e) {
    e.preventDefault();
    setStatus('submitting');
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => {
        setStatus('success');
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Form submission error:", error);
        setStatus('error');
      });
  }

  return (
    <section id="contact" className="relative text-gray-300 bg-gray-950"> {/* Adjusted background and text color */}
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-800 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative shadow-xl"> {/* Stronger shadow */}
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed/v1/search?q=kaffi+street&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
          <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md w-full"> {/* Added w-full */}
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1 text-gray-400">
                97 Warren St. <br />
                New York, NY 10007
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-indigo-400 leading-relaxed hover:text-indigo-300 transition-colors duration-200">
                reedbarger@email.com
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed text-gray-400">123-456-7890</p>
            </div>
          </div>
        </div>
        <form
          netlify
          name="contact"
          onSubmit={handleSubmit}
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 bg-gray-800 p-8 rounded-lg shadow-xl"> {/* Added background, padding, rounded, shadow */}
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-bold title-font">
            Hire Me
          </h2>
          <p className="leading-relaxed mb-5 text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
            suscipit officia aspernatur veritatis. Asperiores, aliquid?
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-300">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-gray-700 rounded border border-gray-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out shadow-sm"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-gray-700 rounded border border-gray-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out shadow-sm"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-300">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full bg-gray-700 rounded border border-gray-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-2 px-4 resize-none leading-6 transition-colors duration-200 ease-in-out shadow-sm"
            />
          </div>
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="text-white bg-indigo-600 border-0 py-3 px-6 focus:outline-none hover:bg-indigo-700 rounded-lg text-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed">
            {status === 'submitting' ? 'Submitting...' : 'Submit'}
          </button>
          {status === 'success' && (
            <p className="text-green-400 text-center mt-4">Message sent successfully!</p>
          )}
          {status === 'error' && (
            <p className="text-red-400 text-center mt-4">Failed to send message. Please try again.</p>
          )}
        </form>
      </div>
    </section>
  );
}

// --- Main App Component ---
export default function App() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
    </main>
  );
}

// Render the App component into the 'root' div
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
