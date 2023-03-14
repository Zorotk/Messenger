import React, {useEffect, useState} from "react";
import "./index.scss";
import {Chat} from "../../components/Chat/Chat";
import {ChatList} from "../../components/ChatList/ChatList";
import {Header} from "../../components/Header/Header";
import {Input} from "../../components/Chat/Input/Input";
import {
    handleDownloadChatsFromServer,
    handleDownloadMessagesFromServer,
} from "../../utils/mainApi";
import Preloader from "../../components/Preloader/Preloader";


export const PageIndex = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [chatsArr, setChatsArr] = useState([]);
    const [messagesArr, setMessagesArr] = useState([]);
    const [chatName, setChatName] = useState("");

    function handleUploadChats() {
        setIsLoading(true);
        handleDownloadChatsFromServer()
            .then((res) => {
                let {response} = res;
                setChatsArr(response);
            })
            .catch((err) => console.log(err))
            .finally(() => setIsLoading(false));
    }

    useEffect(() => {
        handleUploadChats();
    }, []);

    function handleUploadMessages(chatName: string, id: string) {
        handleDownloadMessagesFromServer(id)
            .then((res) => {
                let {response} = res;
                setChatName(chatName);
                setMessagesArr(response);
            })
            .catch((err) => console.log(err));
    }

    return (
        <div className="page-index">
            {isLoading ? (
                <Preloader/>
            ) : (
                <>
                    <ChatList
                        chatsArr={chatsArr}
                        handleUploadMessages={handleUploadMessages}
                    />
                    <div className="page-index__content">
                        <Header projectName={chatName}/>
                        {messagesArr && <Chat messagesArr={messagesArr}/>}
                        {messagesArr && <Input/>}
                    </div>
                </>
            )}
        </div>
    );
};
