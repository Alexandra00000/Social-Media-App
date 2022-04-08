import classes from "./StartingPageLeftContent.module.scss";
import profileImageIcon from "../assets/profileImg.jpg";
import LeftContentSection from "./LeftContentSection";
import leftSections from "../leftSections";
import { Link } from "react-router-dom";

const StartingPageLeftContent = () => {
  return (
    <aside className={classes.leftContent}>
      <div className={classes.container}>
        <div className={classes.child1}>
          <Link to="/">
            <div className={classes.profile1}>
              <div className={classes.profileImage}>
                <img
                  src={profileImageIcon}
                  alt="Image"
                  className={classes.profileImageIcon}
                />
              </div>

              <div className={classes.profileName1}>
                <span className={classes.fullName}>Jane Doe</span>
              </div>
            </div>
          </Link>
        </div>

        {leftSections.map((section) => {
          return (
            <LeftContentSection
              key={section.key}
              icon={section.icon}
              content={section.content}
            />
          );
        })}
      </div>
    </aside>
  );
};

export default StartingPageLeftContent;
