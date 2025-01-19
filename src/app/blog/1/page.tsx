import React from "react";

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <main className="container mx-auto max-w-3xl px-4">
        <article className="prose prose-lg mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">
            Blog Post Title
          </h1>

          <div className="text-gray-600 text-center mb-6">
            <time>Posted on January 1, 2024</time>
          </div>

          <div className="space-y-6">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>

            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
};

export default BlogPage;
