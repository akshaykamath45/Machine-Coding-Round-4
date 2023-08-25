import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import { Home } from "./pages/Home";
import { SinglePost } from "./pages/SinglePost";
function App() {
  return (
    <div className="App">
      <div className="layout">
        <div className="header">My Forum</div>
        <div className="sidebar">
          <div>Home</div>
          <div>Explore</div>
          <div>Bookmark</div>
          <div>Profile</div>
        </div>
        <div className="main">
          <div className="card">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/post/:postID" element={<SinglePost />}></Route>
            </Routes>
          </div>
        </div>
        <div className="sort-by">
          <div className="sort-card">Sort By</div>
        </div>
        <div className="profile">
          <div className="profile-card">Profile</div>
        </div>
      </div>
    </div>
  );
}

export default App;
