import "./App.css";
import { Sidebar } from "./components/Sidebar";
function App() {
  return (
    <div className="App">
      <div className='layout'>
        <div className='header'>
          My Forum
        </div>
        <div className='sidebar'>
           <div>Home</div>
           <div>Explore</div>
           <div>Bookmark</div>
           <div>Profile</div>
        </div>
        <div className='main'>
            <div className='card'>card1</div>
            <div className='card'>card2</div>
        </div>
      <div className='sort-by'>
        <div className='sort-card'>Sort By</div>
      </div>
      <div className='profile'>
        <div className='profile-card'>Profile</div>
      </div>
      </div>
    
    </div>
  );
}

export default App;
