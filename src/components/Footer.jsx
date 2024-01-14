const Footer = () => {
  return (
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
  );
};
export default Footer;
