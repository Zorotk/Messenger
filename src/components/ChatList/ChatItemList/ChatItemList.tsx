import React from "react";
import { IChatItem } from "../../../interface/page";
import { Avatar } from "../../Avatar";
import "./ChatItemList.scss";

export function ChatItemList({
  avatar,
  id,
  title,
  last_message,
  count_unread,
  handleUploadMessages,
}: IChatItem) {
  return (
    <div
      className={`chat-item ${count_unread ? "chat-item_unread" : ""}`}
      onClick={() => handleUploadMessages(title, id)}
    >
      <Avatar src={avatar} size={"md"} />
      <div className="chat-item__container">
        <p className="chat-item__title">{title}</p>
        <p className="chat-item__subtitle">{last_message?.message}</p>
      </div>
    </div>
  );
}
