import React from "react";
import "./Reset.css";
import "./App.css";

import Header from "./components/Header";
import PostList from "./components/PostList";
import Post from "./components/Post";
//import Header from "./components/Comment";

function App() {
  return (
    <>
      <Header />
      <PostList />
    </>
  );
}

export default App;
