import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center shadow-sm p-2">
      <img
        className="w-8 h-8"
        alt="user-logo"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <span className="font-bold text-base px-2">{name}:</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
