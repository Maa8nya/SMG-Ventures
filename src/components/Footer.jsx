import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        {/* Left side */}
        <div className="footer-left">
          <h1 className="footer-title">Let there be<br />change</h1>

          <div className="footer-links">
            <div className="footer-column">
              <div>Preference Center</div>
              <div>Careers</div>
              <div>About Us</div>
              <div>Contact Us</div>
              <div>Locations</div>
              <div>Sitemap</div>
            </div>
            <div className="footer-column">
              <div>Privacy Statement</div>
              <div>Terms & Conditions</div>
              <div>Cookie Policy/Settings</div>
              <div>Accessibility Statement</div>
            </div>
          </div>

          <p className="footer-bottom">© 2025 SMG Ventures. All Rights Reserved.</p>
        </div>

        {/* Right side */}
        <div className="footer-right">
  <div className="lottie-wrapper">
    <lottie-player
      src="https://cdn.lottielab.com/l/8AgRoYRqd6sMpy.json"
      background="transparent"
      speed="1"
      loop
      autoplay
    ></lottie-player>
  </div>
</div>

      </div>
    </footer>
  );
};

export default Footer;
