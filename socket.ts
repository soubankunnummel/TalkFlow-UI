"use client";

import { io } from "socket.io-client";

export const socket = io("https://chat-service-o3sa.onrender.com", {
    transports:["websocket", "polling"],
    
});