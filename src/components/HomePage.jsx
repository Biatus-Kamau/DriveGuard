import React from 'react';
import './comp.css';

const HomePage = () => {
  return (
    <div>
       {/* Banner Section */}
      <section className="banner">
        <div>

          {/* 
        <img src="https://via.placeholder.com/150" alt="Card 1" />
        */}

        <h1>Welcome to DriveGuard</h1>
        <p>Your ultimate road safety companion</p>
        </div>
      </section>

         {/* Cards Section */}
      <section className="cards">
        <div className="card">
          <img src="src/components/images/safety-cone-3442464_1280.jpg" alt="Card 1" />
          <p>Track vehicle behavior in real time.</p>
          <button>Learn More</button>
        </div>
        <div className="card">
          <img src="src/components/images/pexels-nubikini-386009.jpg" alt="Card 2" />
          <p>Alert authorities of unsafe driving.</p>
          <button>Learn More</button>
        </div>
        <div className="card">
          <img src="src/components/images/pexels-oliver-petry-2068272-5799381.jpg" alt="Card 3" />
          <p>Ensure safety on all routes.</p>
          <button>Learn More</button>
        </div>
      </section>

         {/* About Section */}
      <section className="about">
        <h2>About Us</h2>
        <p>We aim to make roads safer for everyone by leveraging technology to monitor and report unsafe driving behavior.</p>
      </section>

         {/* Testimonials Section */}
      <section className="testimonials">
        <h2>Testimonials</h2>
        <p>"DriveGuard has significantly improved the safety of our public transportation system." - Jane Doe</p>
        <p>"I feel much safer knowing that authorities are alerted in real-time." - John Smith</p>
      </section>

         {/* Contact Us Page */}
      <section className="contact">
        <h2>Contact Us</h2>
        <p>Email: info@driveguard.com</p>
        <p>Phone: +254 110 176 480</p>
      </section>

         {/* Footer Section */}
      <footer className="footer">
        <p>&copy; 2024 DriveGuard. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
