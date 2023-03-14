export interface IPage {
  title?: string;
}

export interface IHeader {
  projectName: string;
}

export interface IUser {
  avatar: string;
  id: string;
  name: string;
  surname: string;
  you: boolean;
}

export interface IMessage {
  created_at: number;
  id: string;
  is_new: boolean;
  message: string;
  user: IUser;
}

export interface ITime {
  My: boolean;
  created_at: number;
}

interface ILastMessage {
  created_at: number;
  message: string;
}

export interface IChatItem {
  id: string;
  title: string;
  avatar: string;
  last_message: ILastMessage;
  count_unread: number;
  handleUploadMessages: (chatName: string, id: string) => void;
}

export interface IChat {
  messagesArr: IMessage[];
}

export interface IChatList {
  chatsArr: IChatItem[];
  handleUploadMessages: (chatName: string, id: string) => void;
}

export interface ISystemMessage {
  date: number;
}
