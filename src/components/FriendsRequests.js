import classes from "./StartingPageRightContent.module.scss";
import { FaUserFriends, FaEllipsisH } from "react-icons/fa";
// import { useState } from "react";


const FriendsRequests = (props) => {

  // const [isAdded, setIsAdded] = useState(false)

  // const addFriends = () => {
  //   isAdded ? "We are friends now" : "";
  //   setIsAdded(!isAdded)
  // }

  return (
    <div className={classes.child5}>
      <div className={classes.requestHeader}>
        <div className={classes.request}>
          <div className={classes.requestIcon}>
            <FaUserFriends />
          </div>
          <div className={classes.requestTitle}>Cereri de prietenie</div>
        </div>
        <div className={classes.requestOption}>
          <FaEllipsisH />
        </div>
      </div>
      <div className={classes.request1}>
        <div className={classes.requestImage}>
          <a href="#">
            <img
              src={props.image}
              alt="Image"
              className={classes.profileImageIcon}
            />
          </a>
        </div>
        <div className={classes.requestName}>
          <div className={classes.headerRequest}>{props.name}</div>
          <div className={classes.buttons}>
            <button>Confirm</button>
            <button>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendsRequests;
