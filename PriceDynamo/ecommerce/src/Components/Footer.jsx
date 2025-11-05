
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <h2 className="footer-name">ShopEase</h2>
      <p className="footer-quote">"Bringing style, comfort, and innovation together."</p>
      <p className="footer-contact">📧 support@shopease.com | 📞 +91 98765 43210</p>
      <p className="footer-copy">© {new Date().getFullYear()} ShopEase. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
