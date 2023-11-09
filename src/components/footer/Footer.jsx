import "./footer.scss";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import PhoneIcon from "@mui/icons-material/Phone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Footer = () => {
  const date = new Date();
  const handleSocialClick = (type) => {
    if (type === "linkedin") {
      window.open("https://www.linkedin.com/in/shilina/", "_blank");
    } else if (type === "github") {
      window.open("https://github.com/kshilina", "_blank");
    }
  };

  return (
    <div className="footer">
      <div className="left">
        <div className="logo">PORTFOLIO &#169; {date.getFullYear()}</div>
        <div className="social-container">
          <div className="social-icon">
            <LinkedInIcon onClick={() => handleSocialClick("linkedin")} />
          </div>

          <div className="social-icon">
            <GitHubIcon onClick={() => handleSocialClick("github")} />
          </div>
        </div>

        <p className="desc">
          Personal Portfolio by <b>Ekaterina Shilina</b>
        </p>
      </div>
      <div className="center">
        <div className="title">USEFUL LINKS</div>
        <ul className="links">
          <li>
            <a href="#intro" className="link">
              Intro
            </a>
          </li>
          <li>
            <a href="#skills" className="link">
              Skill Set
            </a>
          </li>
          <li>
            <a href="#projects" className="link">
              Personal Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="link">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="right">
        <div className="title">CONTACT</div>
        <div className="contact-item">
          <LocationOnIcon className="icon" />
          <div className="location">Toronto, Canada</div>
        </div>
        <div className="contact-item">
          <PhoneIcon className="icon" />
          <div className="ph-no">+1(647)-871-1923</div>
        </div>
        <div className="contact-item">
          <MailOutlineIcon className="icon" />
          <div className="email">ekatherina.shilina@gmail.com</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
