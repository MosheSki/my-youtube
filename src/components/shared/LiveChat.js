import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../../utils/redux/chatSlice";
import { generateRandomName, makeRandomMessage } from "../../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      //API Polling

      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20),
        })
      );
    }, 2000);

    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="h-[546px] mr-4 p-2 border border-black bg-slate-200 rounded-lg shadow-xl overflow-y-auto flex flex-col-reverse">
        {chatMessages.map((message, i) => (
          <ChatMessage key={i} name={message.name} message={message.message} />
        ))}
      </div>
      <form
        className="w-[98%] border border-black bg-slate-200 p-2 rounded-lg"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Moshe Lago",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          type="text"
          placeholder="Type Your Live Message Here!"
          className="w-[85%] rounded-lg px-2 py-2"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="px-4 py-2 bg-green-500 w-[15%] rounded-lg">
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
