
import {ISystemMessage} from "../../../interface/page";
import "./SystemMessage.scss";

export const SystemMessage = ({date}: ISystemMessage) => {

    return (
        <div className="system-message">
            <p className="system-message__text">{new Date(date).toLocaleDateString('ru-RU')}</p>
        </div>
    );
};
