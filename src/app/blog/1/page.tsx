"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { IoArrowBack } from "react-icons/io5";

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
        <p>
          <p>20-01-2025</p>
          This is a blog detailing about the process of designing and building
          the blog website . The blog covres the learning process and the
          challenges , and its methods , its tools and technologies used.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident.
        </p>
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
          <h1 className="text-7xl font-extrabold text-center mb-8 bg-green-100 p-4">
            {blog.title}
          </h1>

          {/* Blog Posting Date */}
          <div className="text-gray-600 text-center mb-6">
            <time>Posted on {blog.date}</time>
          </div>

          {/* Blog Content */}
          <div className="space-y-6 bg-yellow-100 p-4">{blog.content}</div>
        </article>
      </main>
    </div>
  );
};

export default BlogPage;
