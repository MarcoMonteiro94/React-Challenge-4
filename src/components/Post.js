import React from "react";

//import profile4 from "../assets/Rectangle 4.png";
//import profile from "../assets/profile.png";

function PostHeader({ author, date }) {
  return (
    <div className="post-container">
      <div>
        <img className="avatar" src={author.avatar} />
      </div>
      <div>
        <h2>{author.name}</h2>
        <h3>{date}</h3>
      </div>
    </div>
  );
}

function PostQuestion({ content }) {
  return (
    <div className="question">
      <p>{content}</p>
    </div>
  );
}

function Comment({ comments }) {
  return (
    <div className="divider">
      {comments.map(comment => (
        <div key={comment.id} className="comment">
          <div>
            <img className="avatar" src={comment.author.avatar} />
          </div>
          <div>
            <p>
              <span>{comment.author.name} </span>
              {comment.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

function Post({ author, date, content, comments }) {
  return (
    <div className="post">
      <PostHeader author={author} date={date} />
      <PostQuestion content={content} />
      <Comment comments={comments} />
    </div>
  );
}

export default Post;
