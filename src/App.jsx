import "./App.css";
// import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css";
// import "https://fonts.googleapis.com/css2?family=Manrope:wght@400;800&family=Work+Sans:wght@400;500;700&display=swap";

function App() {
  return (
    <>
      <input type="checkbox" id="darkMode" />
      <div className="wrapper">
        <label for="darkMode" className="dark-mode-toggler">
          <div className="fa-solid fa-circle-half-stroke fa-xl"></div>
        </label>
        {/* <!-- Navbar --> */}
        <header>
          <div className="flex header container">
            <div className="logo">
              <svg
                version="1.1"
                id="logo-svg"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 116 44"
                // style="enable-background: new 0 0 116 44"
                xml:space="preserve"
              >
                <path
                  className="logo-img"
                  d="M13.1,22.3c-0.9,0-1.8,0.3-2.5,0.8c-0.8,0.5-1.3,1.2-1.7,2.1c-0.3,0.8-0.4,1.8-0.3,2.6c0.2,0.9,0.6,1.7,1.3,2.3
              c0.6,0.6,1.5,1.1,2.3,1.3c0.9,0.2,1.8,0.1,2.6-0.3c0.8-0.3,1.5-0.9,2.1-1.7c0.5-0.8,0.8-1.6,0.8-2.5c0-1.2-0.5-2.4-1.3-3.2
              C15.5,22.8,14.4,22.3,13.1,22.3z M22,0c-4.4,0-8.6,1.3-12.2,3.7c-3.6,2.4-6.4,5.9-8.1,9.9C0,17.6-0.4,22,0.4,26.3
              c0.8,4.3,2.9,8.2,6,11.3c3.1,3.1,7,5.2,11.3,6c4.3,0.8,8.7,0.4,12.7-1.3c4-1.7,7.5-4.5,9.9-8.1C42.7,30.6,44,26.4,44,22
              c0-5.8-2.3-11.4-6.4-15.6C33.4,2.3,27.8,0,22,0z M26.9,36c-0.2,0-0.3,0-0.5,0c-0.1,0-0.1,0-0.2,0c-0.1,0-0.2,0-0.3,0
              c-0.1,0-0.1,0-0.2,0c-0.1,0-0.2,0-0.3,0c-0.1,0-0.1,0-0.2,0c-0.1,0-0.2,0-0.3-0.1c-0.1,0-0.1,0-0.2,0c-0.1,0-0.2,0-0.3-0.1
              c-0.1,0-0.1,0-0.2,0c-0.1,0-0.2-0.1-0.3-0.1c-0.1,0-0.1,0-0.2-0.1c-0.1,0-0.2-0.1-0.3-0.1c0,0-0.1,0-0.1-0.1c-0.1,0-0.2-0.1-0.3-0.1
              c0,0-0.1,0-0.1,0c-0.1-0.1-0.2-0.1-0.3-0.2c0,0,0,0-0.1,0c-0.1-0.1-0.3-0.1-0.4-0.2l0,0c-0.8-0.5-1.6-1.1-2.2-1.8
              c-1.4,1.6-3.4,2.7-5.5,3c-2.1,0.3-4.3-0.1-6.1-1.3c-1.8-1.1-3.2-2.9-3.9-4.9c-0.7-2.1-0.6-4.3,0.2-6.3s2.3-3.6,4.2-4.6
              c1.9-1,4.1-1.3,6.2-0.8c2.1,0.5,4,1.7,5.3,3.4c1.3,1.7,2,3.8,1.9,6c0,0.6,0,1.1,0.3,1.6c0.2,0.5,0.6,1,1,1.3
              c4.4,3.3,9.3-0.8,7.5-5.3c-0.4-0.8-0.9-1.5-1.7-2c-0.7-0.5-1.6-0.7-2.5-0.7c-1.7,0-3.4-0.5-4.8-1.4c-1.5-0.9-2.6-2.2-3.4-3.7
              c-0.8-1.5-1.1-3.3-0.9-5c0.2-1.7,0.8-3.3,1.9-4.7c1-1.4,2.5-2.4,4.1-3c1.6-0.6,3.3-0.7,5-0.4c1.7,0.3,3.2,1.2,4.5,2.3
              c1.2,1.2,2.1,2.7,2.5,4.3h-4.9c-0.5-0.9-1.3-1.5-2.2-1.9c-0.9-0.4-1.9-0.5-2.9-0.2c-0.8,0.2-1.5,0.6-2.1,1.2c-0.6,0.6-1,1.3-1.2,2.1
              c-0.2,0.7-0.2,1.4,0,2.1c0.1,0.7,0.4,1.3,0.9,1.9c0.4,0.5,1,1,1.6,1.3c0.6,0.3,1.3,0.5,2,0.5c2.4,0,4.8,1,6.5,2.7
              c1.7,1.7,2.7,4,2.7,6.5s-1,4.8-2.7,6.5C31.6,35,29.3,36,26.9,36 M61,18.5V6.1h-3.3v1c-0.3-0.3-0.7-0.5-1.1-0.7
              c-0.9-0.4-1.9-0.6-2.9-0.5c-1,0.1-1.9,0.3-2.8,0.8c-0.9,0.6-1.7,1.4-2.3,2.3c-0.6,1-0.9,2.1-0.8,3.3c0,1.1,0.3,2.3,0.8,3.3
              c0.5,1,1.3,1.8,2.3,2.3c0.9,0.6,2,0.9,3.1,0.9c0.9,0,1.8-0.2,2.6-0.5c0.4-0.2,0.8-0.4,1.1-0.7v1L61,18.5z M57.8,12.3
              c0,0.6-0.1,1.2-0.4,1.7c-0.3,0.5-0.7,0.9-1.2,1.2c-0.5,0.3-1.1,0.4-1.7,0.4c-0.6,0-1.2-0.2-1.7-0.4c-0.5-0.3-0.9-0.7-1.2-1.2
              c-0.3-0.5-0.5-1.1-0.4-1.7c0-0.6,0.1-1.2,0.4-1.7c0.3-0.5,0.7-0.9,1.2-1.2c0.5-0.3,1.1-0.4,1.7-0.4c0.6,0,1.2,0.2,1.7,0.4
              c0.5,0.3,0.9,0.7,1.2,1.2C57.7,11.1,57.8,11.7,57.8,12.3z M67.5,12.1c0-1.1,0.3-1.8,0.8-2.2C69,9.4,69.8,9.2,71,9.2h0.5V5.9l-0.5,0
              c-0.9,0-1.8,0.3-2.6,0.7C68,6.8,67.7,7,67.4,7.3V6.1h-3.3v12.5h3.4V12.1z M83.7,14V6.1h-3.3v7.8c0,0.2,0,0.5-0.1,0.7
              c-0.1,0.2-0.2,0.4-0.4,0.6c-0.5,0.3-1,0.5-1.6,0.5s-1.1-0.2-1.6-0.5c-0.2-0.2-0.3-0.4-0.4-0.6c-0.1-0.2-0.1-0.5-0.1-0.7V6.1h-3.3V14
              c0,0.9,0.2,1.8,0.7,2.6c0.5,0.7,1.1,1.3,1.9,1.7c0.9,0.4,1.9,0.6,2.8,0.6c1,0,1.9-0.2,2.8-0.6c0.8-0.4,1.5-0.9,1.9-1.7
              C83.5,15.8,83.7,14.9,83.7,14 M89.9,11.5c0-0.5,0.1-1,0.3-1.5c0.2-0.4,0.4-0.6,0.8-0.8c0.4-0.2,0.8-0.3,1.2-0.3c1,0,2.1,0.3,2.1,2.5
              v7.1h3.4V11c0-1-0.2-1.9-0.6-2.8c-0.4-0.8-1-1.4-1.7-1.8c-0.7-0.4-1.5-0.6-2.3-0.6c-0.8,0-1.6,0.2-2.4,0.5c-0.3,0.1-0.5,0.3-0.8,0.5
              V6.1h-3.4v12.5h3.4V11.5z M55.5,28.7c-0.6-0.3-1.2-0.5-1.8-0.7l-0.4-0.1c-0.5-0.2-0.9-0.3-1.2-0.4c-0.2-0.1-0.4-0.2-0.6-0.4
              c-0.1,0-0.1-0.1-0.1-0.2s0-0.1,0-0.2c0-0.1,0-0.2,0.1-0.3c0-0.1,0.1-0.2,0.2-0.2c0.5-0.3,1.3-0.3,2.3,0c0.5,0.1,0.9,0.4,1.3,0.6
              l0.4,0.3l1.7-2.5l-0.4-0.3c-0.6-0.4-1.3-0.7-2-0.9c-1.5-0.5-3-0.4-4.5,0.1c-0.7,0.3-1.3,0.7-1.7,1.3c-0.5,0.6-0.7,1.4-0.7,2.1
              c0,0.7,0.2,1.4,0.6,2c0.4,0.5,0.8,0.9,1.4,1.1c0.6,0.3,1.2,0.5,1.9,0.7c0.6,0.2,1,0.3,1.3,0.4c0.2,0.1,0.4,0.2,0.6,0.4
              c0.1,0.1,0.1,0.1,0.1,0.2c0,0.1,0,0.2,0,0.3c0,0.1,0,0.3-0.1,0.4c-0.1,0.1-0.1,0.2-0.3,0.3c-0.6,0.4-1.7,0.4-2.8-0.1
              c-0.5-0.2-1-0.5-1.5-0.9l-0.4-0.3l-1.7,2.7l0.3,0.3c0.7,0.5,1.4,0.9,2.2,1.1c0.9,0.3,1.8,0.4,2.7,0.4c0.8,0,1.7-0.1,2.4-0.5
              c0.7-0.3,1.3-0.8,1.8-1.4c0.4-0.7,0.6-1.4,0.6-2.2c0-0.7-0.2-1.4-0.6-2C56.5,29.4,56.1,29,55.5,28.7 M68.6,24.3
              c-0.3-0.3-0.7-0.5-1.1-0.7c-0.9-0.4-1.9-0.6-2.9-0.5c-1,0.1-1.9,0.3-2.8,0.8c-0.9,0.6-1.7,1.4-2.2,2.3c-0.6,1-0.8,2.1-0.8,3.3
              c0,1.1,0.3,2.3,0.8,3.3c0.5,1,1.3,1.8,2.2,2.3c0.9,0.6,2,0.9,3.1,0.9c0.9,0,1.8-0.2,2.6-0.5c0.4-0.2,0.8-0.4,1.1-0.7v1h3.4V23.3
              h-3.3V24.3z M68.3,27.8c0.3,0.5,0.4,1.1,0.4,1.7c0,0.6-0.1,1.2-0.4,1.7c-0.3,0.5-0.7,0.9-1.2,1.2c-0.5,0.3-1.1,0.4-1.7,0.4
              s-1.2-0.2-1.7-0.4c-0.5-0.3-0.9-0.7-1.2-1.2c-0.3-0.5-0.5-1.1-0.4-1.7c0-0.6,0.1-1.2,0.4-1.7c0.3-0.5,0.7-0.9,1.2-1.2
              c0.5-0.3,1.1-0.4,1.7-0.4c0.6,0,1.2,0.1,1.7,0.4C67.6,26.9,68,27.3,68.3,27.8z M78.9,20.1h-3.4v3.2h-1.9v2.8h1.9v5.8
              c0,0.7,0.1,1.4,0.5,2.1c0.3,0.6,0.8,1,1.4,1.3c0.6,0.3,1.4,0.5,2.1,0.4h2.2v-2.9H80c-0.1,0-0.3,0-0.4-0.1c-0.1-0.1-0.3-0.1-0.4-0.2
              c-0.2-0.3-0.3-0.6-0.3-0.9v-5.5h2.8v-2.8h-2.8V20.1z M88.8,31L86,23.3h-3.7L87,34.8l-2.5,6.4H88l7.2-17.9h-3.6L88.8,31z M105.3,24.3
              c-0.3-0.3-0.7-0.5-1.1-0.7c-0.9-0.4-1.9-0.6-2.9-0.5c-1,0.1-1.9,0.3-2.8,0.8c-0.9,0.6-1.7,1.4-2.2,2.3c-0.6,1-0.8,2.1-0.8,3.3
              s0.3,2.3,0.8,3.3c0.5,1,1.3,1.8,2.2,2.3c0.9,0.6,2,0.9,3.1,0.9c0.9,0,1.8-0.2,2.6-0.5c0.4-0.2,0.8-0.4,1.1-0.7v1h3.4V23.3h-3.3
              L105.3,24.3z M105,27.8c0.3,0.5,0.4,1.1,0.4,1.7c0,0.6-0.1,1.2-0.4,1.7c-0.3,0.5-0.7,0.9-1.2,1.2c-0.5,0.3-1.1,0.4-1.7,0.4
              c-0.6,0-1.2-0.2-1.7-0.4c-0.5-0.3-0.9-0.7-1.2-1.2c-0.3-0.5-0.5-1.1-0.4-1.7c0-0.6,0.1-1.2,0.4-1.7c0.3-0.5,0.7-0.9,1.2-1.2
              c0.5-0.3,1.1-0.4,1.7-0.4c0.6,0,1.2,0.1,1.7,0.4C104.3,26.9,104.7,27.3,105,27.8 M115.1,18.1h-3.4v17.7h3.4V18.1z"
                />
              </svg>

              <span className="line"></span>
              <span>
                Designer &<br />
                Developer
              </span>
            </div>
            <label for="hamburgerMenu">
              <div className="fa-solid fa-bars"></div>
            </label>
            <input type="checkbox" name="" id="hamburgerMenu" />
            <div className="menu">
              <ul className="flex navigation">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#skills">Skills</a>
                </li>
                <li>
                  <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                  <a href="#myself-link">About</a>
                </li>
                <li>
                  <a href="#connect">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </header>

        {/* <!-- Hero --> */}
        <section>
          <div className="hero grid container">
            <div className="left flex">
              <span>Hello, I'm Arun Satyal</span>
              <div className="tag">
                UI Designer <br />
                &amp; Full Stack Developer
              </div>
              <div className="intro">
                <p>
                  I love to create and develop digital products that create
                  connection to users
                </p>
              </div>
              <div>
                <button className="btn-black">Download Resume</button>
              </div>
            </div>

            <div className="right flex">
              <img src="../assets/arun.png" alt="" />
            </div>
          </div>
        </section>
        {/* <!-- Banner --> */}
        <section>
          <div className="container">
            <div className="highlights flex">
              <div>
                <span>
                  <img src="./assets/icon-graduate.svg" alt="" />
                </span>
                <h2>
                  IT <br />
                  <span>GRADUATE</span>
                </h2>
              </div>

              <div>
                <span>
                  <img src="./assets/icon-projects.svg" alt="" />
                </span>
                <h2>
                  15+ PROJECTS <br />
                  <span>COMPLETED</span>
                </h2>
              </div>

              <div>
                <span>
                  <img src="./assets/icon-experience.svg" alt="" />
                </span>
                <h2>
                  5+ YEARS OF <br />
                  <span>EXPERIENCE</span>
                </h2>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Skills --> */}

        <section id="skills">
          <div className="skills container">
            <div className="text-center">
              <h1 className="section-title">Skills</h1>
            </div>
            <div className="skills-items">
              <div>
                <span className="icon">
                  <div className="fa-brands fa-js"></div>
                </span>
                JavaScript
              </div>
              <div>
                <span className="icon">
                  <div className="fa-brands fa-react"></div>
                </span>
                React
              </div>
              <div>
                <span className="icon">
                  <div className="fa-brands fa-html5"></div>
                </span>
                HTML 5
              </div>
              <div>
                <span className="icon">
                  <div className="fa-brands fa-css3"></div>
                </span>
                CSS 3
              </div>
              <div>
                <span className="icon">
                  <div className="fa-brands fa-bootstrap"></div>
                </span>
                Bootstrap
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Projects --> */}
        <section className="section-start">
          <div className="container">
            <div className="text-center" id="portfolio">
              <h1 className="section-title">Recent Works</h1>
            </div>
            <div className="project-container">
              <div className="card">
                <a href="#">
                  <img
                    src="./assets/placeholder.jpg"
                    width="100%"
                    alt=""
                    className="screenshot"
                  />
                </a>
                <h2>Portfolio Website</h2>
                <a href="#" className="url">
                  www.example.com
                </a>
                <a href="#">
                  <div className="fa-brands fa-github"></div>
                </a>
                <a href="#">
                  <div className="fa-brands fa-chrome"></div>
                </a>
              </div>

              <div className="card">
                <a href="#">
                  <img
                    src="./assets/placeholder.jpg"
                    width="100%"
                    alt=""
                    className="screenshot"
                  />
                </a>
                <h2>Portfolio Website</h2>
                <a href="#" className="url">
                  www.example.com
                </a>
                <a href="#">
                  <div className="fa-brands fa-github"></div>
                </a>
                <a href="#">
                  <div className="fa-brands fa-chrome"></div>
                </a>
              </div>

              <div className="card">
                <a href="#">
                  <img
                    src="./assets/placeholder.jpg"
                    width="100%"
                    alt=""
                    className="screenshot"
                  />
                </a>
                <h2>Portfolio Website</h2>
                <a href="#" className="url">
                  www.example.com
                </a>
                <a href="#">
                  <div className="fa-brands fa-github"></div>
                </a>
                <a href="#">
                  <div className="fa-brands fa-chrome"></div>
                </a>
              </div>
            </div>
            <span id="myself-link"></span>
          </div>
        </section>
        {/* <!-- About Me --> */}
        <section id="about">
          <div className="container about">
            <div className="about-left">
              <img src="./assets/about.png" width="100%" alt="" />
            </div>
            <div className="about-right">
              <h1 className="section-title">Myself</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
              <br />

              <h2>Intrests</h2>
              <p>Code | Design | Travel | Photography</p>
            </div>
          </div>
        </section>
        {/* <!-- Connect --> */}
        <section id="connect">
          <div className="container text-center">
            <h1 className="section-title">Let's Connect</h1>
            <div className="social-items">
              <div>
                <span className="social-icon">
                  <div className="fa-brands fa-facebook"></div>
                </span>
                Facebook
              </div>
              <div>
                <span className="social-icon">
                  <div className="fa-brands fa-instagram"></div>
                </span>
                Instagram
              </div>
              <div>
                <a href="#">
                  <span className="social-icon">
                    <div className="fa-brands fa-linkedin"></div>
                  </span>
                  LinkedIn
                </a>
              </div>
              <div>
                <span className="social-icon">
                  <div className="fa-brands fa-youtube"></div>
                </span>
                YouTube
              </div>
              <div>
                <span className="social-icon">
                  <div className="fa-brands fa-github"></div>
                </span>
                Bootstrap
              </div>

              <div>
                <span className="social-icon">
                  <div className="fa-brands fa-behance"></div>
                </span>
                Behance
              </div>

              <div>
                <span className="social-icon">
                  <div className="fa-brands fa-500px"></div>
                </span>
                500px
              </div>
            </div>
            <hr className="or" />
            <a href="#" className="btn-email">
              email@example.com
              <span>
                <div className="fa-solid fa-paper-plane"></div>
              </span>
            </a>
          </div>
        </section>
        {/* <!-- Footer --> */}

        <footer>
          <div className="container">
            <a href="#" className="btn-scroll">
              <div className="fa-sharp fa-solid fa-angle-up"></div>
            </a>
            <div>
              <h3>Links</h3>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#skills">Skills</a>
                </li>
                <li>
                  <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#connect">Connect</a>
                </li>
              </ul>
            </div>

            <div>
              <h3>Social Links</h3>
              <ul>
                <li>
                  <a href="#">Facebook</a>
                </li>
                <li>
                  <a href="#skills">LinkedIn</a>
                </li>
                <li>
                  <a href="#portfolio">Instagram</a>
                </li>
                <li>
                  <a href="#about">GitHub</a>
                </li>
                <li>
                  <a href="#connect">Behance</a>
                </li>
                <li>
                  <a href="#connect">500px</a>
                </li>
              </ul>
            </div>
            <div className="footer-right">
              &copy; Copyright 2023 Arun Satyal. All Rights Reserved. <br />
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
