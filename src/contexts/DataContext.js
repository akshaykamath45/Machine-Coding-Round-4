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
    const updateVote = data.posts.map((selectedPost) =>
      selectedPost.postId === post.postId ?  {...selectedPost,upvotes:selectedPost.upvotes+1} : selectedPost
    );
    setData({ ...data, posts: updateVote });
  };
  const decreaseVoteCount = (post) => {
    const updateDecreasedVote = data.posts.map((selectedPost) =>
      selectedPost.postId === post.postId ?  {...selectedPost,downvotes:selectedPost.downvotes+1} : selectedPost
    );
    setData({ ...data, posts: updateDecreasedVote });
  };

  const handleBookmark=(post)=>{
    const addToBookmark=data.posts.map((selectedPost)=>selectedPost.postId===post.postId ? {...selectedPost,bookmark:!selectedPost.bookmark}:selectedPost);
    setData({...data,posts:addToBookmark})
  }
  const value = {
    data,
    setData,
    increaseVoteCount,
    decreaseVoteCount,
    handleBookmark
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
