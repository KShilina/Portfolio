import React from "react";
import "./skills.scss";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";

function Skills() {
  return (
    <div className="skills" id="skills">
      <h1 className="skills-title">Skill Set</h1>
      <div className="s-top-wrapper">
        <div className="s-top-left">
          <div className="s-frontend">
            <h3 className="s-title">Frontend Development</h3>
            <div className="frontend-list">
              <div className="frontend-list-item">
                <CheckCircleOutlineOutlinedIcon className="icon" />
                <span>HTML5</span>
              </div>
              <div className="frontend-list-item">
                <CheckCircleOutlineOutlinedIcon className="icon" />
                <span>CSS3/SCSS</span>
              </div>
              <div className="frontend-list-item">
                <CheckCircleOutlineOutlinedIcon className="icon" />
                <span>JavaScript</span>
              </div>
            </div>
          </div>
        </div>
        <div className="s-top-right">
          <div className="s-backend">
            <h3 className="s-title">Backend Development</h3>
            <div className="backend-list">
              <div className="backend-list-item">
                <CheckCircleOutlineOutlinedIcon className="icon" />
                <span>Node.js/Express.js</span>
              </div>
              <div className="backend-list-item">
                <CheckCircleOutlineOutlinedIcon className="icon" />
                <span>Python</span>
              </div>
              <div className="backend-list-item">
                <CheckCircleOutlineOutlinedIcon className="icon" />
                <span>Ruby</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="s-bottom-wrapper">
        <div className="s-bottom-left">
          <div className="s-frontend-frameworks">
            <h3 className="s-title">Frontend Frameworks</h3>
            <div className="s-frontend-frameworks-list">
              <div className="s-frontend-frameworks-list-item">
                <CheckCircleOutlineOutlinedIcon className="icon" />
                <span>React.js</span>
              </div>
              <div className="s-frontend-frameworks-list-item">
                <CheckCircleOutlineOutlinedIcon className="icon" />
                <span>Next.js</span>
              </div>
              <div className="s-frontend-frameworks-list-item">
                <CheckCircleOutlineOutlinedIcon className="icon" />
                <span>Ruby on Rails</span>
              </div>
            </div>
          </div>
        </div>
        <div className="s-bottom-right">
          <div className="s-db">
            <h3 className="s-title">Database Development</h3>
            <div className="db-list">
              <div className="db-list-item">
                <CheckCircleOutlineOutlinedIcon className="icon" />
                <span>PostgreSQL</span>
              </div>
              <div className="db-list-item">
                <CheckCircleOutlineOutlinedIcon className="icon" />
                <span>MySQL</span>
              </div>
            </div>
          </div>
        </div>

        <div className="s-bottom-right">
          <div className="s-db">
            <h3 className="s-title">Software Testing Tools</h3>
            <div className="db-list">
              <div className="db-list-item">
                <CheckCircleOutlineOutlinedIcon className="icon" />
                <span>Cypress</span>
              </div>
              <div className="db-list-item">
                <CheckCircleOutlineOutlinedIcon className="icon" />
                <span>Jest</span>
              </div>
              <div className="db-list-item">
                <CheckCircleOutlineOutlinedIcon className="icon" />
                <span>Mocha/Chai</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
