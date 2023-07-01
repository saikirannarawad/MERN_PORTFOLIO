import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { BsGithub, BsInstagram, BsLinkedin, BsFacebook } from "react-icons/bs";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <Typography variant="h5">About Me</Typography>
        <Typography>
          Hey, my name is Saikiran Narawad. I am a Full-Stack Developer and I am
          a 4th year undergraduate student at the Indian Institute of Technology
          Kharagpur pursuing a B.Tech in chemical Engineering
        </Typography>

        <Link to="/contact" className="footerContactBtn">
          <Typography>Contact Us</Typography>
        </Link>
      </div>
      <div>
        <Typography variant="h6">Social Media</Typography>
        <a href="https://github.com/saikirannarawad" target="black">
          <BsGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/saikiran-narawad-88aab91b4/"
          target="black"
        >
          <BsLinkedin />
        </a>
        <a href="https://www.facebook.com/saikiran.narawad.90/" target="black">
          <BsFacebook />
        </a>
        <a href="https://www.instagram.com/saikiran_narawad/" target="black">
          <BsInstagram />
        </a>
      </div>
    </div>
  );
};

export default Footer;
