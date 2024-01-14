const Connect = () => {
  return (
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
  );
};
export default Connect;
