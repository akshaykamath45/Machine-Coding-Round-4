import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";
import "./Home.css";
export const Home = () => {
  const { data } = useContext(DataContext);
  console.log(data);
  return (
    <div>
      <h4>Latest Posts</h4>
      {data.posts.map((post) => {
        return (
          <div className="landing-card">
            <div className="counter">
              <button>+</button>
              <h2>{post.upvotes - post.downvotes}</h2>
              <button>-</button>
            </div>
            <div className="card-content">
              <p>Posted by {post.username}</p>
              <h2>{post.post}</h2>
              <div className="post-tags">
                {post.tags.map((tag) => {
                  return <p>{tag}</p>;
                })}
              </div>
              <p>{post.postDescription}</p>
              <hr />
              <div className="card-footer">
                <div>Comment</div>
                <div>Share</div>
                <div>Footer</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
