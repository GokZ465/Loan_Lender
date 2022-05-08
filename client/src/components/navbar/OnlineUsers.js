import "./OnlineUsers.css";
import { useCollection } from "../../hooks/useCollection";

import React from "react";
import Avatar from "./Avatar";

export default function OnlineUsers() {
  const { isPending, error, documents } = useCollection("users");

  return (
    <div className="users-list">
      <h2>All Users</h2>
      {isPending && <div>Loading users...</div>}
      {error && <div>{error}</div>}
      {documents &&
        documents.map((user) => (
          <div key={user.id} className="users-list-item">
            {user.online && <span className="online-user"></span>}

            <span>{user.displayName}</span>
            <Avatar src={user.photoURL} />
          </div>
        ))}
    </div>
  );
}
