// components/chatc.tsx

"use client"; // Mark this file as a client component

import React, { useState } from "react";

const ChatComponent = () => {
  const [responseMessage, setResponseMessage] = useState<string>("");
  const [userInput, setUserInput] = useState<string>("");

  const fetchData = async () => {
    if (!userInput) return;

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userInput }),
      });

      if (!response.ok) {
        // Log the response status and status text for debugging
        console.error(
          `Failed to fetch response: ${response.status} ${response.statusText}`
        );
        throw new Error(
          `Failed to fetch response: ${response.status} ${response.statusText}`
        );
      }

      const data = await response.json();
      setResponseMessage(data.message);
    } catch (err) {
      console.error("Error during fetch:", err);
      setResponseMessage("An error occurred while fetching the response.");
    }
  };

  return (
    <div>
      <h2>Chatbot Response:</h2>
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder="Ask a question"
      />
      <button onClick={fetchData}>Submit</button>
      <p>{responseMessage}</p>
    </div>
  );
};

export default ChatComponent;
