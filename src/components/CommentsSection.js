import classes from "./CommentSection.module.scss";
import { Link } from "react-router-dom";
import profileImageIcon from "../assets/profileImg.jpg";

const CommentsSection = (props) => {
  return (
    <div className={classes.commentSection}>
      <div className="profile-image">
        <a href="#">
          <img
            src={profileImageIcon}
            alt="Profile image"
            className={classes.profileImageIcon}
          />
        </a>
      </div>
      <div className={classes.commentText}>
        <Link to="/" className={classes.usernamePart}>
          {props.comments.username}
        </Link>
        <span className={classes.date}>{props.comments.date}</span>
        <p className={classes.text}>{props.comments.comment}</p>
      </div>
    </div>
  );
};

export default CommentsSection;
