import classes from "./StartingPageRightContent.module.scss";
import FriendsRequests from "./FriendsRequests";
import profileImageIcon from "../assets/profile-img.jpg";
import requestImage from "../assets/img.jpg";
import { FaVideo, FaSearch, FaEllipsisH } from "react-icons/fa";
import ContactSection from "./ContactSection";

const StartingPageRightContent = () => {
  const friendsRequestsData = [
    {
      key: 1,
      image: requestImage,
      name: "Eric Clapton",
    },
    {
      key: 2,
      image: profileImageIcon,
      name: "Paul Rudd",
    },
    {
      key: 3,
      image: profileImageIcon,
      name: "Paul Rudd",
    },
  ];

  const contacts = [
    {
      key: 0,
      image: requestImage,
      name: "Eric Clapton",
    },
    {
      key: 1,
      image: requestImage,
      name: "Mircea Eliade",
    },
    {
      key: 2,
      image: requestImage,
      name: "Eric Clapton",
    },
    {
      key: 3,
      image: requestImage,
      name: "Eric Clapton",
    },
    {
      key: 4,
      image: requestImage,
      name: "Eric Clapton",
    },
    {
      key: 5,
      image: requestImage,
      name: "Eric Clapton",
    },
    {
      key: 6,
      image: requestImage,
      name: "Eric Clapton",
    },
  ];

  return (
    <aside className={classes.rightContent}>
      <div className={classes.allRequests}>
        {friendsRequestsData.map((request) => {
          return (
            <FriendsRequests
              key={request.key}
              image={request.image}
              name={request.name}
            />
          );
        })}
      </div>

      <div className={classes.contactSection}>
        <div className={classes.headerContacts}>
          <span className={classes.nameContacts}>Contacts</span>

          <div className={classes.iconsContacts}>
            <FaVideo className={classes.firstIcon} />
            <FaSearch className={classes.secondIcon} />
            <FaEllipsisH />
          </div>
        </div>

        {contacts.map((contact) => {
          return (
            <ContactSection
              key={contact.key}
              name={contact.name}
              image={contact.image}
            />
          );
        })}
      </div>
    </aside>
  );
};

export default StartingPageRightContent;
