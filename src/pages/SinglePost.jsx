import "./SinglePost.css";
import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";
export const SinglePost = () => {
  const { data, increaseVoteCount, decreaseVoteCount,handleBookmark } =
    useContext(DataContext);
  const { postID } = useParams();

  const selectedPost = data.posts.find(
    (post) => parseInt(post.postId) === parseInt(postID, 10)
  );
  console.log(selectedPost);

  const navigate = useNavigate();

  return (
    <div className="single-post-page">
      <div className="navigate-back">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-arrow-left"
          className="hover-btn"
          viewBox="0 0 16 16"
          onClick={() => navigate("/")}
        >
          <path
            fill-rule="evenodd"
            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
          />
        </svg>
        <h2> Post</h2>
      </div>

      <div className="landing-card">
        <div className="counter">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            class="bi bi-caret-up-fill"
            viewBox="0 0 16 16"
            className="hover-btn"
            onClick={() => increaseVoteCount(selectedPost)}
          >
            <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
          </svg>
          <h2>
            <span className="add-color">
              {selectedPost.upvotes - selectedPost.downvotes}
            </span>
          </h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            class="bi bi-caret-down-fill"
            viewBox="0 0 16 16"
            className="hover-btn"
            onClick={() => decreaseVoteCount(selectedPost)}
          >
            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
          </svg>
        </div>
        <div className="card-content">
          <div className="card-header">
            <img
              src={selectedPost.picUrl}
              alt="profile-img"
              className="profile-image"
            ></img>
            <p>
              <span className="reply-color">Posted by </span>
              <span className="add-color"> @{selectedPost.username}</span>
            </p>
          </div>

          <h2 className="post-title">{selectedPost.post}</h2>
          <div className="post-tags">
            {selectedPost.tags.map((tag) => {
              return (
                <p className="post-tag">
                  <b>{tag}</b>
                </p>
              );
            })}
          </div>
          <p className="post-description">{selectedPost.postDescription}</p>
          <hr />
          <div className="card-footer">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-chat-left"
                viewBox="0 0 16 16"
                className="hover-btn"
              >
                <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
              </svg>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-share"
                viewBox="0 0 16 16"
                className="hover-btn"
              >
                <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
              </svg>
            </div>
            <div>
            {selectedPost.bookmark ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="rgb(106 97 206)"
                      class="bi bi-bookmark"
                      viewBox="0 0 16 16"
                      className="hover-btn"
                      onClick={() => handleBookmark(selectedPost)}
                    >
                      <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="black"
                      class="bi bi-bookmark"
                      viewBox="0 0 16 16"
                      className="hover-btn"
                      onClick={() => handleBookmark(selectedPost)}
                    >
                      <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
                    </svg>
                  )}
            </div>
          </div>
        </div>
      </div>
      <div className="comments">
        {selectedPost.comments.map((comment) => {
          return (
            <div className="comment-card">
              <div className="profile-image-holder">
                <img src={comment.picUrl} className="profile-image"></img>
              </div>
              <div className="comment-content">
                <p>
                  <b>{comment.name}</b> @{comment.username}
                </p>
                <p>
                  <span className="reply-color">Replying to</span>{" "}
                  <span className="add-color">@{selectedPost.username}</span>
                </p>
                <p>{comment.comment}</p>
                <div className="comment-footer">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-heart"
                      viewBox="0 0 16 16"
                      className="hover-btn"
                    >
                      <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                    </svg>
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-chat-left"
                      viewBox="0 0 16 16"
                      className="hover-btn"
                    >
                      <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                    </svg>
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-share"
                      viewBox="0 0 16 16"
                      className="hover-btn"
                    >
                      <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
