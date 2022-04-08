import { useEffect, useState } from "react";

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

const usePost = (postData, interval) => {
  const [post, setPost] = useState({
    posts: postData,
    changed: 0
  });

  useEffect(() => {
    const postInterval = setInterval(() => {
      setPost((prevState) => {
        if (prevState.posts.length > 3) {
          clearInterval(postInterval);
        }
        const newPost = {
          ...POST_DATA[prevState.posts.length % 2],
          id: prevState.posts.length
        };
        return {
          ...prevState,
          posts: [newPost, ...prevState.posts],
        };
      });
    }, interval);
  }, [post.changed]);

  const deletePost = (id) => {
    setPost((prevState) => {
        const dataToBeRemovedId = prevState.posts.findIndex( (post) => {
            return post.id === id;
        })

        const newPostData = prevState.posts.splice(dataToBeRemovedId, 1)
      return {
        ...prevState,
        posts: prevState.posts.splice(dataToBeRemovedId, 1),
        changed: prevState.changed + 1
      };
    });
  };

  return [post.posts, deletePost];
};

export default usePost;
