import classes from "./StartingPageRightContent.module.scss";
import { Link } from "react-router-dom";

const ContactSection = (props) => {
  return (
    <div className={classes.contactsSection}>
      <div className={classes.contact}>
        <div className={classes.profileContact}>
          <div className={classes.contactImage}>
            <Link to="/">
              <div className={classes.online}></div>
              <img
                src={props.image}
                alt="Image"
                className={classes.profileImageIcon}
              />
            </Link>
          </div>
          <div className={classes.contactName}>
            <span>{props.name}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
