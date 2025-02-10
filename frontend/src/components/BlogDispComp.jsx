import React from "react";

const BlogDispComp = ({props}) => {
  return (
    <div className="blog-card h-1/3 md:w-1/5 md:h-1/3 hover:scale-105 hover:ease-out">
      <div className="blogimages">
        <img
          className="rounded-xl"
          src={props.image ? props.image : "https://placehold.co/600x400"}
          alt="image placeholder"
        />
      </div>
      <div className="blog-title text-2xl font-semibold py-2">
        {props?.title?.slice(0,15) || "NoTitle"}
      </div>
      <div className="blog-description">
        {props.BlogContent.slice(0,30)}
      </div>
    </div>
  );
};

export default BlogDispComp;
