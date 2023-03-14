import React from "react";

import {IChat} from "../../interface/page";
import "./Chat.scss";
import {Message} from "./Message/Message";
import {NewMessage} from "./NewMessage/NewMessage";
import {SystemMessage} from "./SystemMessage/SystemMessage";


export const Chat = ({messagesArr}: IChat) => {

    let alertMessage = false
    let lastDay = ''
    return (
        <div className="chat">
            {
                messagesArr.sort((a, b) => a.created_at - b.created_at).map((message, i) => {
                    const date = new Date(message.created_at * 1000)
                    let day = `${date.getDate()}.${date.getMonth()}${date.getFullYear()}`
                    let isNextDay = lastDay !== day
                    let isNew = message.is_new && !alertMessage
                    if (isNew) {
                        alertMessage = true
                    }
                    if (isNextDay) {
                        lastDay = day
                    }
                    return <React.Fragment key={message.id}>   {
                        isNextDay &&
                        <SystemMessage date={message.created_at * 1000}/>} {isNew && <NewMessage/>}
                        <Message
                            key={message.id}
                            {...message}
                        /></React.Fragment>
                })
            }
        </div>
    );
};
