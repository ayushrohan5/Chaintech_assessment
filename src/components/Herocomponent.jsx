import React from 'react';

export default function Herocomponent() {
  return (
    <>
    <header className="navbar">
        <div className="logo"><img src="logo1.jpg" alt="Logo" /></div>
        <nav>
            <a href="#">Home</a>
            <a href="#">Portfolio</a>
            <a href="#">Skills</a>
            <a href="#">About Me</a>
        </nav>
        <a href="#" className="contact-btn">Contact Me</a>
    </header>
    <main>
        <section className="hero">
            <div className="hero-text">
                <h1>
                    PRODUCT<br />
                    DESIGNER
                </h1>
                <h2><span className="gradient-text">CRISTIAN MUNOZ</span></h2>
                <div className="social-icons">
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-figma"></i></a>
                    <a href="#"><i className="fab fa-linkedin"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fas fa-envelope"></i></a>
                    <a href="#"><i className="fas fa-phone"></i></a>
                </div>
                <button className="cv-btn">Download Curriculum Vitae <i className="fas fa-download"></i></button>
            </div>
            <div className="hero-image">
                <img src="image_5.jpg" alt="Desk Workspace" />
                
            </div>
        </section>
        <section className="stats">
            <div className="stat">
                <div className="stat-num">90%</div>
                <div className="stat-title">Job Success<br />Score on Upwork</div>
            </div>
            <div className="stat-divider">
                <img src="image_10.png" alt="Divider" />
            </div>
            <div className="stat">
                <div className="stat-num">&gt;25,000</div>
                <div className="stat-title">Duplicates on Figma<br />Community</div>
            </div>
            <div className="stat-divider">
                <img src="image_10.png" alt="Divider" />
            </div>
            <div className="stat">
                <div className="stat-num">&gt;2K</div>
                <div className="stat-title">In Finished<br />Works</div>
            </div>
        </section>
    </main>
    </>
  );
}
