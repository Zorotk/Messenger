import { IMessage } from "../../../interface/page";
import { Avatar } from "../../Avatar";
import { Time } from "../Time/Time";
import "./Message.scss";



export const Message = ({ created_at, message, user }: IMessage) => {
  const { avatar, you, name, surname } = user;

  return (
    <div className={`message ${you ? "message_send" : ""}`}>
      {!you && <Avatar src={avatar} />}
      <div className="message__container">
        {!you && (
          <span className="message__author">
            {name} {surname}
          </span>
        )}
        <div
          className={`message__content ${you ? "message__content_send" : ""}`}
        >
          <p className="message__text">{message}</p>
          <Time My={you} created_at={created_at} />
        </div>
      </div>
    </div>
  );
};
