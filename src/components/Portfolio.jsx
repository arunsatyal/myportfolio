import workhumbnail from "../assets/placeholder.jpg";

const Works = () => {
  return (
    <section className="section-start">
      <div className="container">
        <div className="text-center" id="portfolio">
          <h1 className="section-title">Recent Works</h1>
        </div>
        <div className="project-container">
          <div className="card">
            <a href="#">
              <img
                src={workhumbnail}
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
                src={workhumbnail}
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
                src={workhumbnail}
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
  );
};
export default Works;
