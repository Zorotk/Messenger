const BASE_URL = "https://api.lenzaos.com/test";

const handleReturn = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(res.status);
};

// загрузка чатов с сервера
export const handleDownloadChatsFromServer = () => {
  return fetch(`${BASE_URL}/chat.get`, {
    method: "GET",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then((res) => handleReturn(res));
};

// загрузка сообщений с сервера
export const handleDownloadMessagesFromServer = (id) => {
  return fetch(`${BASE_URL}/message.get`, {
    method: "POST",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: id,
    }),
  }).then((res) => handleReturn(res));
};
