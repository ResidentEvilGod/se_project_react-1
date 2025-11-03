import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.svg";
import "./Header.css";
function Header() {
  const now = new Date();
  const dateStr = now.toLocaleDateString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <img src={logo} alt="WTWR logo" className="header__logo" />
      <p className="header__place">
        , New York
        <time className="header__dateTime" datetime={now}>
          {dateStr}
        </time>
      </p>
      <button className="header__add-clothes-btn">+ Add clothes</button>
      <p className="header__username">Terrence Tegegne</p>
      <img
        src={avatar}
        alt="Terrence Tegegne's Avatar"
        className="header__avatar"
      />
    </header>
  );
}

export default Header;
