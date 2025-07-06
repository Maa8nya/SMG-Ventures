import React from 'react';
import './Footer.css'; // we'll put the CSS here

const Footer = () => {
  return (
    <footer>
      <div className="footer-left">
        <div className="footer-top">
          <div className="footer-headline">Let there be change</div>
        </div>
        <div className="footer-links">
          <div>
            <div>Preference Center</div>
            <div>Careers</div>
            <div>About Us</div>
            <div>Contact Us</div>
            <div>Locations</div>
            <div>Sitemap</div>
          </div>
          <div>
            <div>Privacy Statement</div>
            <div>Terms & Conditions</div>
            <div>Cookie Policy/Settings</div>
            <div>Accessibility Statement</div>
          </div>
        </div>
        <div className="footer-bottom">
          © 2025 SMG Ventures. All Rights Reserved.
        </div>
      </div>

      <div className="lottie-container">
  <lottie-player 
    src="https://cdn.lottielab.com/l/8AgRoYRqd6sMpy.json" 
    loop 
    autoplay 
    style={{ filter: "contrast(1.5)" }}>
  </lottie-player>
</div>

    </footer>
  );
};

export default Footer;