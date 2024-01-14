import profilephoto from "../assets/arun.png";
import resume from "../assets/resume.pdf";
const Hero = () => {
  return (
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
            <a
              href={resume}
              download="name-resume"
              target="_black"
              rel="noreferrer"
              className="btnblack"
            >
              Download Resume
            </a>
          </div>
        </div>

        <div className="right flex">
          <img src={profilephoto} alt="Arun Satyal" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
