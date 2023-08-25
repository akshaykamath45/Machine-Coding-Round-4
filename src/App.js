import "./App.css";
import { Sidebar } from "./components/Sidebar";
import { Home } from "./pages/Home";
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
            <Home />
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
