import {IChatItem, IChatList} from "../../interface/page";
import {ChatItemList} from "./ChatItemList/ChatItemList";
import "./ChatList.scss";


export const ChatList = ({chatsArr, handleUploadMessages}: IChatList) => {


    return (
        <div className="chat-list">
            <div className="chat-list__header">
                <p className="chat-list__text">All chats</p>
            </div>
            <div className="chat-list__body">
                {chatsArr?.map((item: IChatItem) => (
                    <ChatItemList
                        key={item.id}
                        {...item}
                        handleUploadMessages={handleUploadMessages}
                    />
                ))}
            </div>
        </div>
    );
};
