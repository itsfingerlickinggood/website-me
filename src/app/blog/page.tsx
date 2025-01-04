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
    {
      title: "Mountain Adventures in Iceland",
      date: "December 30, 2024",
      description: "Explore the breathtaking volcanic landscapes of Iceland.",
      image: imageUrl,
      link: "/blog/mountain-adventures-iceland",
    },
    {
      title: "The Hidden Waterfalls of Iceland",
      date: "December 28, 2024",
      description:
        "Discover the secret waterfalls tucked away in Iceland's landscape.",
      image: imageUrl,
      link: "/blog/hidden-waterfalls-iceland",
    },
    {
      title: "A Day in Reykjavik",
      date: "December 25, 2024",
      description: "Explore the vibrant capital of Iceland, Reykjavik.",
      image: imageUrl,
      link: "/blog/day-in-reykjavik",
    },
    {
      title: "Icelandic Volcanoes: A Journey to the Core",
      date: "December 22, 2024",
      description: "An up-close look at Iceland's powerful volcanic activity.",
      image: imageUrl,
      link: "/blog/icelandic-volcanoes",
    },
    {
      title: "Northern Lights: A Magical Display",
      date: "December 19, 2024",
      description: "Witness the ethereal Northern Lights in Iceland.",
      image: imageUrl,
      link: "/blog/northern-lights-iceland",
    },
    {
      title: "The Best Hiking Trails in Iceland",
      date: "December 15, 2024",
      description: "A guide to the most scenic hiking routes in Iceland.",
      image: imageUrl,
      link: "/blog/best-hiking-trails-iceland",
    },
    {
      title: "Iceland's Glacial Lagoons",
      date: "December 10, 2024",
      description:
        "Explore the crystal-clear waters of Iceland's glacial lagoons.",
      image: imageUrl,
      link: "/blog/iceland-glacial-lagoons",
    },
    {
      title: "Wildlife Safari in Iceland",
      date: "December 5, 2024",
      description: "An unforgettable wildlife safari experience in Iceland.",
      image: imageUrl,
      link: "/blog/wildlife-safari-iceland",
    },
    {
      title: "Iceland's Black Sand Beaches",
      date: "December 1, 2024",
      description: "Marvel at the dramatic black sand beaches of Iceland.",
      image: imageUrl,
      link: "/blog/black-sand-beaches-iceland",
    },
  ];

  return (
    <div className="p-6 bg-white text-black font-inter flex justify-center">
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
                  <p className="ml-5">{post.date}</p>{" "}
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
