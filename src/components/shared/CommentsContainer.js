import CommentsList from "./CommentsList";

export const commentsData = [
  {
    id: "1",
    name: "John Doe",
    text: "This is a fantastic article!",
    replies: [],
  },
  {
    id: "2",
    name: "Jane Smith",
    text: "I completely agree with the points made here.",
    replies: [
      {
        id: "2.1",
        name: "Emily Johnson",
        text: "Thanks for the insights, Jane!",
        replies: [],
      },
      {
        id: "2.2",
        name: "Michael Brown",
        text: "I have a different perspective on this topic.",
        replies: [
          {
            id: "2.2.1",
            name: "Sarah Davis",
            text: "Interesting viewpoint, Michael. Can you elaborate?",
            replies: [
              {
                id: "2.2.1.1",
                name: "Michael Brown",
                text: "Sure, I think the context is key here...",
                replies: [
                  {
                    id: "2.2.1.1.1",
                    name: "Daniel Wilson",
                    text: "I would like to add to Michael's point...",
                    replies: [
                      {
                        id: "2.2.1.1.1.1",
                        name: "Emily Johnson",
                        text: "Great discussion everyone!",
                        replies: [],
                      },
                    ],
                  },
                  {
                    id: "2.2.1.1.2",
                    name: "Sarah Davis",
                    text: "Daniel, what do you think about...",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "3",
    name: "Chris Lee",
    text: "Does anyone have additional resources on this?",
    replies: [],
  },
  {
    id: "4",
    name: "Patricia Kim",
    text: "Loved reading this!",
    replies: [],
  },
  {
    id: "5",
    name: "Alex Martinez",
    text: "Can't wait to see more content like this.",
    replies: [],
  },
  {
    id: "6",
    name: "Jamie White",
    text: "This was very informative, thanks for sharing!",
    replies: [],
  },
];

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
