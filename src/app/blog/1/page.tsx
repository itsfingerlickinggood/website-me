"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { IoArrowBack } from "react-icons/io5";
import Image from "next/image";

const BlogPage = () => {
  // Using useRouter hook to get the router object
  const router = useRouter();

  // Function to handle the back button click
  const handleBackClick = () => {
    router.back();
  };

  // Example blog data
  const blog = {
    title: "Designing this blog-website",
    date: "January 20, 2025",
    content: (
      <>
        <p>20-01-2025</p>
        <p>
          This is a blog detailing about the process of designing and building
          the blog website . The blog covres the learning process and the
          challenges , and its methods , its tools and technologies used.
        </p>
        <br />
        <p>22-2-2005</p>
        <p>
          The blog is built upon using NextJS , a React framework for building ,
          and TailwindCSS for styling and design.
          <br />
          My main objective is to build a simple , minimal and fast blog website
          , with my building expereinces and my passion . So the objectives are
          :
        </p>
        <div className="flex justify-center">
          <ul className="list-disc list-inside text-left">
            <li>Minimal</li>
            <li>Simple</li>
            <li>Easy</li>
            <li>Experiences</li>
            <li>My Ideas</li>
          </ul>
        </div>
        <p>
          My aim is to finish this website as soon as possible and start
          building my core-frontier projects, which are:
        </p>
        <ul className="list-disc list-inside ml-5">
          <li>
            <a href="#basic-x" className="relative group">
              Basic-X
              <span className="absolute left-0 bottom-full mb-2 w-[150px] h-[100px] bg-white border border-gray-300 hidden group-hover:block">
                <Image
                  src="/basicx.png"
                  alt="Basic-X Preview"
                  className="w-full h-full object-cover rounded-xl"
                  width={100}
                  height={100}
                />
              </span>
            </a>
          </li>
          <li>
            <a href="#chronos-os" className="relative group">
              Chronos-OS
              <span className="absolute left-0 bottom-full mb-2 w-[150px] h-[150px] bg-white border border-gray-300 hidden group-hover:block">
                <Image
                  src="/chronosos.jpeg"
                  alt="Chronos-OS Preview"
                  className="w-full h-full object-cover rounded-xl"
                  width={100}
                  height={100}
                />
              </span>
            </a>
          </li>
        </ul>
      </>
    ),
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <main className="container mx-auto max-w-3xl px-4">
        {/* Container for Back Button */}
        <div className="flex items-center justify-between mb-6 bg-blue-100 p-4">
          <button
            onClick={handleBackClick}
            className="flex items-center text-lg text-blue-500 hover:underline cursor-pointer"
          >
            <IoArrowBack className="mr-2" size={20} /> {/* Back Arrow Icon */}
            Back
          </button>
        </div>

        <article className="prose prose-lg mx-auto">
          {/* Blog Title */}
          <div>
            <Image
              src="/design.jpg"
              alt="Blog Image"
              width={100}
              height={100}
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                display: "block",
                borderRadius: "10px",
              }}
            />

            <h1 className="text-7xl font-extrabold text-center mb-8 bg-green-100 p-4">
              {blog.title}
            </h1>

            {/* Blog Posting Date */}
            <div className="text-gray-600 text-center mb-6">
              <time>Posted on {blog.date}</time>
            </div>
          </div>

          {/* Blog Content */}
          <div className="space-y-6 bg-yellow-100 p-4">{blog.content}</div>
        </article>
      </main>
    </div>
  );
};

export default BlogPage;
