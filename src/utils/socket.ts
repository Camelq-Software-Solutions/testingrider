import { io, Socket } from "socket.io-client";

const SOCKET_URL = "https://bike-taxi-production.up.railway.app";

let socket: Socket | null = null;

export const getSocket = (token?: string) => {
  if (!socket) {
    socket = io(SOCKET_URL, {
      transports: ["websocket"], // Use WebSocket only
      auth: token ? { token } : undefined,
    });
  }
  return socket;
};

// Optional: Reset the socket instance (e.g., to reconnect with a new token)
export const resetSocket = () => {
  if (socket) {
    socket.disconnect();
    socket = null;
  }
}; 