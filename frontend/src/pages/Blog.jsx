import React, { useEffect, useState } from "react";
import BackBtn from "../components/BackBtn";
import BlogDispComp from "../components/BlogDispComp";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Blog = () => {
  const navigate = useNavigate();
  const [blogList, setBlogList] = useState([]);
  const handleClick = (id) => {
    navigate(`/blog/${id}`);
  };
  const fetchBlogs = async () => {
    let token = JSON.parse(localStorage.getItem("Token"));
    if (!token) {
      navigate("/");
    }
    axios
      .get(`${import.meta.env.VITE_URL}/blog/getBlogs`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        setBlogList(res.data);
      });
  };

  useEffect(() => {
    fetchBlogs();
  }, []);
  return (
    <div className="text-black flex flex-col">
      <div className="blog-list flex flex-wrap gap-10 w-5/6 m-5">
        {blogList.map((item) => {
          return (
              <div onClick={() => handleClick(item._id)} className="blog-card h-1/3 md:w-1/5 md:h-1/3 hover:scale-105 hover:ease-out">
                <div className="blogimages">
                  <img
                    className="rounded-xl"
                    src={
                      item.image ? item.image : "https://placehold.co/600x400"
                    }
                    alt="image placeholder"
                  />
                </div>
                <div className="blog-title text-2xl font-semibold py-2">
                  {item?.title?.slice(0, 15) || "NoTitle"}
                </div>
                <div className="blog-description">
                  {item.BlogContent.slice(0, 30)}
                </div>
              </div>
          );
        })}
      </div>
      <div className="flex justify-end p-5">
        <BackBtn />
      </div>
    </div>
  );
};

export default Blog;
