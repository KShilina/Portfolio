import React from "react";
import "./intro.scss";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { motion } from "framer-motion";

function Intro() {
  const handleSocialClick = (type) => {
    if (type === "linkedin") {
      window.open("https://www.linkedin.com/in/shilina/", "_blank");
    } else if (type === "github") {
      window.open("https://github.com/kshilina", "_blank");
    }
  };

  return (
    <div className="intro" id="intro">
      <div className="i-left">
        <div className="i-left-wrapper">
          <motion.h2
            initial={{ x: -1000, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 1.5,
            }}
            className="i-intro"
          >
            Hi there, I'm
          </motion.h2>
          <motion.h1
            initial={{ x: -1000, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
            }}
            className="i-name"
          >
            Ekaterina Shilina
          </motion.h1>
          <motion.div
            initial={{ x: -1000, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2.5,
            }}
            className="i-title"
          >
            <div className="i-title-wrapper">
              <div className="i-title-item">Full Stack Developer</div>
              <div className="i-title-item">Software Developer</div>
              <div className="i-title-item">PERN Stack Developer</div>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: -1000, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 3,
            }}
            className="i-social-profiles"
          >
            <div className="i-linkedin" style={{ color: "#0B65C2" }}>
              <LinkedInIcon
                className="icon"
                onClick={() => handleSocialClick("linkedin")}
              />
            </div>
            <div className="i-github">
              <GitHubIcon
                className="icon"
                onClick={() => handleSocialClick("github")}
              />
            </div>
          </motion.div>
        </div>
      </div>
      <div className="i-right">
        <motion.div
          initial={{ x: -1000, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1,
          }}
          className="i-img"
        ></motion.div>
      </div>
    </div>
  );
}

export default Intro;
