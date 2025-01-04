"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IoArrowBack } from "react-icons/io5";

const BlogComponent = () => {
  const imageUrl = "/bg.jpg";

  const posts = [
    {
      title: "Concert Announcement",
      date: "January 4, 2025",
      description: "Join us for an exciting concert experience.",
      image: imageUrl,
      link: "/blog/concert-announcement",
    },
    {
      title: "New Music Release",
      date: "January 3, 2025",
      description: "New music drops today! Don't miss out.",
      image: imageUrl,
      link: "/blog/new-music-release",
    },
    {
      title: "Tour Dates Revealed",
      date: "January 2, 2025",
      description: "Check out the dates for our upcoming tour.",
      image: imageUrl,
      link: "/blog/tour-dates-revealed",
    },

    // More posts...
  ];

  return (
    <div className="blog-container p-6 bg-white text-black font-inter flex justify-center">
      <div className="flex flex-col gap-6 w-full max-w-4xl">
        {/* Container for Back Button and Blog Title */}
        <div className="flex items-center justify-between mb-6 bg-blue-100 p-4">
          {/* Back Button aligned to the left */}
          <Link href="/" passHref>
            <div className="flex items-center text-lg text-blue-500 hover:underline cursor-pointer">
              <IoArrowBack className="mr-2" size={20} /> {/* Back Arrow Icon */}
              Back to Home
            </div>
          </Link>
        </div>

        {/* Blog Title centered with background color */}
        <div className="flex justify-center mb-6 bg-green-100 p-4">
          <div className="text-7xl font-normal text-center font-medium blog-title">
            Blog
          </div>
        </div>

        {posts.map((post, index) => (
          <Link key={index} href={post.link}>
            <div className="flex items-start justify-start p-4 hover:bg-gray-100 transition-all cursor-pointer bg-yellow-100">
              <Image
                src={post.image}
                alt="Post"
                className="w-16 h-16 object-cover rounded-full mr-4"
                width={64}
                height={64}
              />
              <div className="flex flex-col justify-between flex-grow">
                <h3 className="font-semibold text-lg">{post.title}</h3>
                <div className="flex items-start justify-between mt-1 text-sm text-blackA-6">
                  <p className="mr-10">{post.description}</p>
                  <p className="ml-5">{post.date}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogComponent;
