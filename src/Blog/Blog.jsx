import React from "react";
import "./Blog.css";
import share from "../assets/share.png";

export const Blog = () => {
  return (
    <div className="blog">
      <div className="blog-right">
        <img src={share} width="10px" />
        <h1>Blog</h1>
        <p>Lorem ipsum dotinctio quasi excepturi velit amet. Quis, non!</p>
      </div>
      <div className="blog-left">
        <p>Home / blog</p>
      </div>
    </div>
  );
};
