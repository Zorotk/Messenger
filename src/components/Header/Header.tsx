import {ChatLogo} from "../../images/Chat";
import { IHeader } from "../../interface/page";
import "./Header.scss";

/**
 *
 * Модуль с хедером
 */

export const Header = ({ projectName }: IHeader) => {
  return (
    <header className="header">
        <ChatLogo />
      <p className="header__text">{projectName?projectName:'Great Project'}</p>
    </header>
  );
};
