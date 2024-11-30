import React, { useEffect, useState } from "react";
import { Client } from "@stomp/stompjs";

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Create WebSocket client
    const client = new Client({
      brokerURL: "ws://localhost:8080/ws-notifications", // WebSocket endpoint
      connectHeaders: {},
      onConnect: () => {
        // Subscribe to the topic for notifications
        client.subscribe("/topic/notifications", (message) => {
          // Handle incoming messages
          setNotifications((prev) => [...prev, message.body]);
        });
      },
      debug: (str) => console.log(str), // Debug logs
      reconnectDelay: 5000, // Reconnect on disconnection
    });

    client.activate();

    return () => {
      client.deactivate();
    };
  }, []);

  return (
    <div>
      <h2>Notifications</h2>
      <ul>
        {notifications.map((notif, index) => (
          <li key={index}>{notif}</li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
