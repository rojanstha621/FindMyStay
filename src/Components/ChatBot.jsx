import React, { useState, useRef, useEffect } from "react";

const Chatbot = ({ onClose }) => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);
    setInput("");

    // Simple simulated bot response
    setTimeout(() => {
      const reply = generateBotReply(input);
      setMessages((prev) => [...prev, { sender: "bot", text: reply }]);
    }, 500);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSend();
  };

  const generateBotReply = (msg) => {
    const lower = msg.toLowerCase();
    if (lower.includes("hello") || lower.includes("hi")) return "Hello! 👋";
    if (lower.includes("room") || lower.includes("rent")) return "You can browse listings under 'My Listings'.";
    if (lower.includes("bye")) return "Goodbye! Have a nice day 😊";
    return "I'm here to help! Try asking about listings or support.";
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="fixed bottom-20 right-6 w-80 bg-white shadow-lg rounded-xl flex flex-col z-50">
      {/* Header */}
      <div className="flex justify-between items-center p-3 border-b">
        <h3 className="text-lg font-bold">🤖 Chatbot</h3>
        <button onClick={onClose} className="text-gray-500 hover:text-black text-xl">&times;</button>
      </div>

      {/* Chat window */}
      <div className="flex-1 p-3 overflow-y-auto max-h-72 space-y-2 text-sm">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`rounded-lg px-3 py-2 ${
                msg.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
              } max-w-[80%]`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input box */}
      <div className="p-2 border-t flex items-center gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type a message..."
          className="flex-1 p-2 border rounded text-sm"
        />
        <button
          onClick={handleSend}
          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
