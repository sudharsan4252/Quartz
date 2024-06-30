import React from 'react';
import {ChatBarProps1} from "../types/types"

const truncateMessage = (message: string, maxLength: number) => {
  if (message.length <= maxLength) return message;
  return message.slice(0, maxLength) + '...';
};
  
const ChatBar: React.FC<ChatBarProps1> = ({ image, name, message, tags }) => {
    
  const latestMessage = message[message.length - 1] || "";
const truncatedMessage = truncateMessage(latestMessage, 30); // Adjust the length as needed
  return (
    <div className={`px-3 pb-3 flex gap-3 rounded-xl items-center bg-white  `}>
      <img src={image} alt={`${name}_avatar`} className="w-10 h-10 rounded-full" />
      <div>
        <h3 className="font-semibold">{name}</h3>
        <p className="text-sm text-gray-500">{truncatedMessage}</p>
        <div className="flex gap-1">
          {tags.map((tag, index) => (
            <span key={index} className="text-xs bg-gray-200 rounded px-2 py-1">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatBar;
