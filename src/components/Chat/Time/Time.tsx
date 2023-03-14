import {ITime} from "../../../interface/page";
import "./Time.scss";


export const Time = ({My, created_at}: ITime) => {

    return (
        <div className="time">
            <p className="time__value">{new Date(created_at).toLocaleTimeString('ru-RU', {
                hour: 'numeric',
                minute: 'numeric',
            })}</p>
            {My && <span className="message__read"></span>}
        </div>
    );
};
