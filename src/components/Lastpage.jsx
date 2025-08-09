import React from "react";

const Lastpage = () => {
  return (
    <div className="homepage-root">
      {/* Testimonial Section */}
      <section className="testimonial-section">
        <h2 className="testimonial-name">Kaleb Lechtenberg</h2>
        <p className="testimonial-text">
          "Working with this freelancer has been great. His attention to detail is unparalleled and finished all work ahead of schedule. Will gladly send more work and I do not hesitate to recommend him to you on your project also."
        </p>
        <div className="testimonial-icon" />
      </section>

      {/* Thank You Card */}
      <section className="thankyou-section">
        <div className="thankyou-card">
          <img
            src="image_5.jpg" alt="Workspace"
            className="thankyou-img" />
            
          <div className="thankyou-text">
            <div>Thanks for visit my website</div>
            <div className="thankyou-subtext">
              If you have any questions you can write me to any of my social networks, I am sure I will answer you.
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-left">
          <div className="logo"><img src="logo1.jpg" alt="Logo" /></div> {/* Simple web logo unicode */}
        </div>
        <nav className="footer-nav">
          <a href="#">Home</a>
          <a href="#">Portfolio</a>
          <a href="#">Skills</a>
          <a href="#">About Me</a>
        </nav>
      </footer>
    </div>
  );
};

export default Lastpage;
