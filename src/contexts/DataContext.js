import { createContext, useState, useEffect } from "react";
import { forumData } from "../data/Data";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  // const getDataFromLocalStorage=localStorage.getItem('forumData') ? JSON.parse(localStorage.getItem('forumData')) : forumData;

  const [data, setData] = useState(forumData);

  // useEffect(()=>{
  //     localStorage.setItem('forumData',JSON.stringify(data));
  // },[])

  const increaseVoteCount = (post) => {
    const updateVote = data.posts.map((selectedPost) =>
      selectedPost.postId === post.postId
        ? { ...selectedPost, upvotes: selectedPost.upvotes + 1 }
        : selectedPost
    );
    setData({ ...data, posts: updateVote });
  };
  const decreaseVoteCount = (post) => {
    const updateDecreasedVote = data.posts.map((selectedPost) =>
      selectedPost.postId === post.postId
        ? { ...selectedPost, downvotes: selectedPost.downvotes + 1 }
        : selectedPost
    );
    setData({ ...data, posts: updateDecreasedVote });
  };

  const handleBookmark = (post) => {
    const addToBookmark = data.posts.map((selectedPost) =>
      selectedPost.postId === post.postId
        ? { ...selectedPost, bookmark: !selectedPost.bookmark }
        : selectedPost
    );
    setData({ ...data, posts: addToBookmark });
    if (!post.bookmark) {
      toast.success("Post Bookmarked", { autoClose: 500 });
    } else {
      toast.success("Post removed from Bookmark", { autoClose: 500 });
    }
  };

  const sortHandler = (selectedValue) => {
    if (selectedValue === "All") {
      setData({ ...data });
    } else if (selectedValue === "Most-Upvotes") {
      const sortedPosts = [...data.posts].sort((a, b) => b.upvotes - a.upvotes);
      setData({
        ...data,
        posts: sortedPosts,
      });
    } else if (selectedValue === "Least-Upvotes") {
      const sortedPosts = [...data.posts].sort((a, b) => a.upvotes - b.upvotes);
      setData({
        ...data,
        posts: sortedPosts,
      });
    } else {
      const sortedPosts = [...data.posts].sort((a, b) => {
        const dateA = new Date(a.createdAt).getTime();
        const dateB = new Date(b.createdAt).getTime();
        return dateB - dateA;
      });
      setData({
        ...data,
        posts: sortedPosts,
      });
    }
  };
  const value = {
    data,
    setData,
    increaseVoteCount,
    decreaseVoteCount,
    handleBookmark,
    sortHandler,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
