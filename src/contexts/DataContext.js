import { createContext, useState, useEffect } from "react";
import { forumData } from "../data/Data";
export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  // const getDataFromLocalStorage=localStorage.getItem('forumData') ? JSON.parse(localStorage.getItem('forumData')) : forumData;

  const [data, setData] = useState(forumData);

  // useEffect(()=>{
  //     localStorage.setItem('forumData',JSON.stringify(data));
  // },[])
  const value = {
    data,
    setData,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
