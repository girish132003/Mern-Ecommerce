import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <h1 className="text-center">All Right Reserved &copy; Girish</h1>
      <p className="text-center mt-3">
        <a href="https://www.instagram.com/girish_.18/" target="_blank" >Instagram</a>|<a href="https://www.linkedin.com/in/girish-tundwal-649a6a25b/" target="_blank">Linkedin</a>|
        <Link href="https://github.com/girish132003" target ="_blank">Github</Link>
      </p>
    </div>
  );
};

export default Footer;
