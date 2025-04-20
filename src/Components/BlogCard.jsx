import React from "react";

const BlogCard = ({title,desc,image}) => {
  return (
    <>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img
            src={image}
            alt="blog"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>
            {desc}
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">see more...</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
