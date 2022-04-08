const postData = [
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
        id: 0,
        username: "test comment",
        date: "18/08/2022",
        comment: "this is a dynamic comment2",
      },
      {
        id: 1,
        username: "test comment 2",
        date: "29/05/2021",
        comment: "this is a dynamic comment2",
      },
    ],
  },
];

export default postData;
