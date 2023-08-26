import { createContext, useState, useEffect } from "react";
import { forumData } from "../data/Data";
export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  // const getDataFromLocalStorage=localStorage.getItem('forumData') ? JSON.parse(localStorage.getItem('forumData')) : forumData;

  const [data, setData] = useState(forumData);

  // useEffect(()=>{
  //     localStorage.setItem('forumData',JSON.stringify(data));
  // },[])

  const increaseVoteCount = (post) => {
    const updateVote = data.map((selectedPost) =>
      selectedPost.id === post.id ? { upvotes: upvotes + 1 } : selectedPost
    );
    setData(updateVote);
  };
  const decreaseVoteCount = (post) => {
    const updateVote = data.map((selectedPost) =>
      selectedPost.id === post.id ? { downvotes: downvotes + 1 } : selectedPost
    );
    setData(updateVote);
  };
  const value = {
    data,
    setData,
    increaseVoteCount,
    decreaseVoteCount,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
