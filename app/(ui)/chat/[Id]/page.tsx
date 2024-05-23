"use client";
import Image from "next/image";
import ScrollToBottom from "react-scroll-to-bottom";
import React, { useEffect, useState } from "react";
import { socket } from "@/socket";
import { IoMdSend } from "react-icons/io";
import { getChats, getConversation, sendMessages } from "@/app/actions/chat";
import { usePathname } from "next/navigation";
import { getCurrentUser, getUserProfile } from "@/app/actions/user";

interface Message {
  _id?: string;
  conversationId?: string;
  sender: string;
  text: string;
  seen: boolean;
  img: string;
  time: string;
  createdAt?: string;
  updatedAt?: string;
}

export default function Chat() {
  const [senderId, setSenderId] = useState<string>("");
  const [receiverId, setReceiverId] = useState<string>("");
  const [conversationId, setConversationId] = useState<string>("");
  const [currentMessage, setCurrentMessage] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [messageList, setMessageList] = useState<Message[]>([]);

  const path = usePathname();
  const username = path.slice(6, path.length);
  const room = "room1";

  useEffect(() => {
    socket.on("connection", () => {
      console.log("Connected to server");
    });

    socket.emit("join_room", room);
    getCurrentUser().then((res:any) => {
      setSenderId(res?.data?._id);
    });

    getUserProfile(username).then((res: any) => {
      setReceiverId(res?.data?._id);
    });

    socket.on("receive_message", (data: Message) => {
      console.log(data);
      setMessageList((list) => [...list, data]);
    });

    return () => {
      socket.off("receive_message");
    };
  },);

  console.log(messageList)

  useEffect(() => {
    if (senderId && receiverId) {
      getConversation(senderId, receiverId).then((res: any) => {
        if (res.data && res.data._id) {
          setConversationId(res.data._id);
        }
      });
    }
  }, [senderId, receiverId]);

  useEffect(() => {
    if (conversationId) {
      getChats(conversationId).then((res: any) => {
        if (res.data) {
          setMessageList(res.data);
        }
      });
    }
  }, [conversationId]);

  const handelSendMessage = async () => {
    if (!message.trim()) return;  

    const messageData: Message = {
      text: message,
      seen: false,
      img: "",
      sender: senderId,
      time: new Date(Date.now()).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }),
    };

    await sendMessages(senderId, receiverId, messageData);

    setMessageList((list) => [...list, messageData]);
    socket.emit("send_message", { ...messageData, room });
    setMessage("");
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent the default action (submitting the form)
      handelSendMessage();
    }
  };

  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${hours}:${minutes < 10 ? "0" : ""}${minutes}`;
  };
  

  return (
    <div className="h-full w-full flex justify-center">
      <div className="w-[600px] md:w-full p-0 md:p-[3%] flex flex-col gap-3 justify-center">
        <div className="h-16 flex justify-between border rounded-lg p-3">
          <h4> {username} </h4>
          <Image src={""} alt="user_image" className="rounded-full" />
        </div>
        <div className="flex flex-col justify-between h-[400px] md:h-[700px] p-3 text-black border rounded-lg">
          <ScrollToBottom className=" overflow-auto">
            <div className="grid grid-cols-3 grid-rows-auto overflow-auto p-3 gap-4">
              {messageList?.map((msg, index) => (
                <div
                  key={index}
                  className={`col-start-${
                    msg.sender == senderId ? "2" : "1"
                  } col-span-2 p-2 rounded-lg ${
                    msg.sender == senderId ? "bg-white" : "bg-slate-300"
                  }`}
                >
                  {msg.text}
                  <div className="flex justify-between text-xs font-bold">
                    <h1>{msg.time} </h1>
                    <h1>{msg.sender === senderId ? "You" : username} </h1>
                  </div>
                </div>
               
              ))}

            </div>
            </ScrollToBottom>
          <div className="w-full flex justify-between items-center gap-2 p-3">
            <input
              type="text"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown} // Add this line to handle Enter key press
              className="text-white p-3 flex-1 bg-transparent h-14 outline-none border rounded-lg"
            />
            <IoMdSend
              type="submit"
              className="text-3xl text-white"
              onClick={handelSendMessage}
            />
          </div>
        </div>
      </div> 
    </div>
  );
}
