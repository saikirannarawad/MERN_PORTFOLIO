import React from "react";
import "./Home.css";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import TimeLine from "../TimeLine/TimeLine.jsx";
import { MouseOutlined } from "@mui/icons-material";
import {
  SiCplusplus,
  SiReact,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiCss3,
  SiHtml5,
  SiThreedotjs,
} from "react-icons/si";

const Home = ({ timelines, skills }) => {
  return (
    <div className="home">
      <canvas className="homeCanvas"></canvas>
      <div className="homeCanvasContainer">
        <Typography variant="h1">
          <p>S</p>
          <p>A</p>
          <p>I</p>
          <p>K</p>
          <p>I</p>
          <p>R</p>
          <p>A</p>
          <p>N</p>
        </Typography>

        <div className="homeCanvasBox">
          <Typography variant="h2">DESIGNER</Typography>
          <Typography variant="h2">DEVELOPER</Typography>
          <Typography variant="h2">TEACHER</Typography>
          <Typography variant="h2">CONTENT CREATOR</Typography>
        </div>

        <Link to="/projects">VIEW WORK</Link>
      </div>{" "}
      <div className="homeScrollBtn">
        <MouseOutlined />
      </div>
      <div className="homeContainer">
        <Typography variant="h3">TIMELINE</Typography>
        <TimeLine timelines={timelines} />
      </div>
      <div className="homeSkills">
        <Typography variant="h3">SKILLS</Typography>

        {/* <div className="homeCubeSkills">
          <div className="homeCubeSkillsFaces homeCubeSkillsFace1">
            <img
              src="https://w7.pngwing.com/pngs/403/269/png-transparent-react-react-native-logos-brands-in-colors-icon-thumbnail.png"
              alt="Face1"
            />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace2">
            <img
              src="https://w7.pngwing.com/pngs/403/269/png-transparent-react-react-native-logos-brands-in-colors-icon-thumbnail.png"
              alt="Face2"
            />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace3">
            <img
              src="https://w7.pngwing.com/pngs/403/269/png-transparent-react-react-native-logos-brands-in-colors-icon-thumbnail.png"
              alt="Face3"
            />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace4">
            <img
              src="https://w7.pngwing.com/pngs/403/269/png-transparent-react-react-native-logos-brands-in-colors-icon-thumbnail.png"
              alt="Face4"
            />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace5">
            <img
              src="https://w7.pngwing.com/pngs/403/269/png-transparent-react-react-native-logos-brands-in-colors-icon-thumbnail.png"
              alt="Face5"
            />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace6">
            <img
              src="https://w7.pngwing.com/pngs/403/269/png-transparent-react-react-native-logos-brands-in-colors-icon-thumbnail.png"
              alt="Face6"
            />
          </div>
        </div> */}

        <div className="homeCubeSkills">
          <div className="homeCubeSkillsFaces homeCubeSkillsFace1">
            <img src={skills.image1.url} alt="Face1" />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace2">
            <img src={skills.image2.url} alt="Face2" />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace3">
            <img src={skills.image3.url} alt="Face3" />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace4">
            <img src={skills.image4.url} alt="Face4" />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace5">
            <img src={skills.image5.url} alt="Face5" />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace6">
            <img src={skills.image6.url} alt="Face6" />
          </div>
        </div>
        <div className="cubeShadow"></div>

        <div className="homeskillsBox" id="homeskillsBox">
          <SiCplusplus />
          <SiHtml5 />
          <SiCss3 />
          <SiJavascript />
          <SiMongodb />
          <SiExpress />
          <SiReact />
          <SiNodedotjs />
          <SiThreedotjs />
        </div>
      </div>
    </div>
  );
};

export default Home;
