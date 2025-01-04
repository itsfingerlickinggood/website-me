"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const BlogComponent = () => {
  const posts = [
    {
      title: "Concert Announcement",
      date: "January 4, 2025",
      description: "Join us for an exciting concert experience.",
      image:
        "https://images.pexels.com/photos/10933403/pexels-photo-10933403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link: "/blog/concert-announcement",
    },
    {
      title: "New Music Release",
      date: "January 3, 2025",
      description: "New music drops today! Don't miss out.",
      image:
        "https://images.pexels.com/photos/10933403/pexels-photo-10933403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link: "/blog/new-music-release",
    },
    {
      title: "Tour Dates Revealed",
      date: "January 2, 2025",
      description: "Check out the dates for our upcoming tour.",
      image:
        "https://images.pexels.com/photos/10933403/pexels-photo-10933403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link: "/blog/tour-dates-revealed",
    },
  ];

  return (
    <div className="p-6 bg-white text-black font-inter flex justify-center">
      <div className="flex flex-col gap-6 w-full max-w-4xl">
        {posts.map((post, index) => (
          <Link key={index} href={post.link}>
            <div className="flex items-start justify-start p-4 hover:bg-gray-100 transition-all cursor-pointer">
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
                  <p className="ml-5">{post.date}</p>{" "}
                  {/* Date aligned with description */}
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
