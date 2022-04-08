import classes from "./StartingPage.module.scss";
import StartingPageLeftContent from "./StartingPageLeftContent";
import NewsfeedContent from "./NewsfeedContent";
import StartingPageRightContent from "./StartingPageRightContent";
import usePost from "../hooks/use-post";

const POST_DATA = [
  {
    id: 0,
    userName: "test",
    postDate: "20/07/2022",
    numberOfLikes: "45",
    numberOfComments: "12",
    comments: [
      {
        id: 0,
        username: "test comment",
        date: "20/03/2022",
        comment: "this is a dynamic comment",
      },
      {
        id: 1,
        username: "test comment 2",
        date: "13/12/2021",
        comment: "this is a dynamic comment2",
      },
    ],
  },
  {
    id: 1,
    userName: "test2",
    postDate: "02/11/2015",
    numberOfLikes: "87",
    numberOfComments: "36",
    comments: [
      {
        
        username: "test comment",
        date: "18/08/2022",
        comment: "this is a dynamic comment2",
      },
      {
        username: "test comment 2",
        date: "29/05/2021",
        comment: "this is a dynamic comment2",
      },
    ],
  },
];

const StartingPage = () => {
  const [postData, setDeletePost] = usePost(POST_DATA, 5000);

  const deletePost = (id) => {
    setDeletePost(id);
  };

  return (
    <div className={classes.mainContainer}>
      <StartingPageLeftContent />
      <div>
        {postData.map((singlePost) => (
          <NewsfeedContent
            postData={singlePost}
            removePost={deletePost}
            key={singlePost.id}
          ></NewsfeedContent>
        ))}
      </div>
      <StartingPageRightContent />
    </div>
  );
};

export default StartingPage;
