import AttachIcon from "../../../images/AttachIcon.svg";
import SendIcon from "../../../images/SendIcon.svg";
import "./Input.scss";


export const Input = () => {
    return (
        <div className="input">
            <div
                className="input__area"
                contentEditable="true"
                placeholder="Type message"
            ></div>
            <div className="input__container">
                <label htmlFor="file" className="input__label">
                    <img src={AttachIcon} alt="attach file" className="input__image"/>
                    <input className="input__file" type="file" id="file"/>
                </label>
                <button className="input__label">
                    <img src={SendIcon} alt="send message" className="input__image"/>
                </button>
            </div>
        </div>
    );
};
