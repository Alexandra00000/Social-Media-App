import { FaEllipsisH, FaThumbsUp, FaComments, FaShare } from "react-icons/fa";
import profileImageIcon from "../assets/profileImg.jpg";
import imagePost from "../assets/imagePost.jpg";
import classes from "./NewsfeedContent.module.scss";
import CommentsSection from "./CommentsSection";
import { useState } from "react";

const NewsfeedContent = (props) => {
  const [profileOptionsVisible, setProfileOptionsVisible] = useState(false);
  const [reactions, setReactions] = useState({
    likesNumber: props.postData.numberOfLikes,
    commentsNumber: props.postData.numberOfComments,
  });

  const toggleProfileOptions = () => {
    setProfileOptionsVisible((prevState) => {
      return !prevState;
    });
  };

  const deletePost = () => {
    props.removePost(props.postData.id);
  };

  const toggleReactions = (reactionType) => {
    if (reactionType === "likes") {
      setReactions((prevState) => {
        return {
          ...prevState,
          likesNumber: prevState.likesNumber++,
        };
      });
    } else {
      setReactions((prevState) => {
        return {
          ...prevState,
          commentsNumber: prevState.commentsNumber--,
        };
      });
    }
  };

  if (props) {
    return (
      <section className={classes.newsfeed}>
        <article className={classes.post}>
          <div className={classes.postHeader}>
            <div className={classes.profile}>
              <div className="profile-image">
                <a href="#">
                  <img
                    src={profileImageIcon}
                    alt="Profile image"
                    className={classes.profileImageIcon}
                  />
                </a>
              </div>

              <div className={classes.profileName}>
                <span className={classes.fullName}>
                  {props.postData.userName}
                </span>
                <span className={classes.date}>{props.postData.postDate}</span>
              </div>
            </div>

            <div
              className={classes.profileOption}
              onClick={toggleProfileOptions}
            >
              <FaEllipsisH />
              {profileOptionsVisible && (
                <div className={classes.profileOptionsMenu}>
                  <button onClick={deletePost}>Delete this post</button>
                </div>
              )}
            </div>
          </div>

          <div className={classes.content}>
            <img src={imagePost} alt="Image post" className={classes.imgPost} />
            <p className={classes.postDescription}>
              Asta este prima mea postare
            </p>
          </div>

          <div className={classes.reacts}>
            <div className="count-reacts">
              <span className={classes.icons}>
                <FaThumbsUp />
              </span>
              <span className="count">{reactions.likesNumber} likes</span>
            </div>

            <div className="comments-number">
              <span className={classes.icons}>
                <FaComments />
              </span>
              <span className="count">{reactions.commentsNumber} comments</span>
            </div>
          </div>

          <div className="reacts-action">
            <ul className={classes.actions}>
              <li
                className={classes.reaction}
                onClick={() => toggleReactions("likes")}
              >
                <FaThumbsUp />
                <span>Like</span>
              </li>
              <li
                className={classes.reaction}
                onClick={() => toggleReactions("comments")}
              >
                <FaComments />
                <span>Comments</span>
              </li>
              <li className={classes.reaction}>
                <FaShare />
                <span>Share</span>
              </li>
            </ul>
          </div>

          <div className="comment-section">
            <div className={classes.comment}>
              <CommentsSection
                comments={props.postData.comments[0]}
              ></CommentsSection>
              <div className={classes.commentUsers}>
                <div className="profile-image">
                  <a href="#">
                    <img
                      src={profileImageIcon}
                      alt="Profile image"
                      className={classes.profileImageIcon}
                    />
                  </a>
                </div>
                <div className={classes.commentContent}>
                  <input
                    type="text"
                    placeholder="Introduceti comentariul aici..."
                  />
                </div>
              </div>

              {/* <div className={classes.commentText}></div> */}

              {/* {props.postData.comments.map((singleComment) => {
                <CommentsSection key={singleComment.id} comments={singleComment.comment} />;
              })} */}
              {/* <CommentsSection
                comments={props.postData.comments[0]}
              ></CommentsSection> */}

              {/* <div className={classes.commentContent}>
                <input
                  type="text"
                  placeholder="Introduceti comentariul aici..."
                />
              </div> */}
            </div>
          </div>
        </article>
      </section>
    );
  } else {
    return <div></div>;
  }
};

export default NewsfeedContent;
