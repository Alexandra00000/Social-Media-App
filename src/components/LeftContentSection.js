import classes from "./StartingPageLeftContent.module.scss";
import { Link} from "react-router-dom";

const LeftContentSection = (props) => {
  return (
    <Link to="/">
      <div className={classes.child2}>
        <div className={classes.sectionFriends}>
          <div className={classes.sectionIcon}>{props.icon}</div>
          <div className={classes.sectionName}>
            <span>{props.content}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default LeftContentSection;
