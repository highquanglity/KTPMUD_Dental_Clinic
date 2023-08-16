import React, { useState } from "react";
import { Link } from "react-router-dom";

import logoHeading from "../assets/icons/confidental-logo.svg";
import logoBackground from "../assets/icons/confidental-mono.svg";
import arrowRight from "../assets/icons/arrow-right-solid.svg";
import emergencyCall from "../assets/icons/emergency-call.svg";

const LoginPage = () => {
  const [user, setUser] = useState("patient");
  const [isPatient, setIsPatient] = useState(true);
  const [isDentist, setIsDentist] = useState(false);
  const [isStaff, setIsStaff] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <div className="LoginPage">
      <img className="login__background-logo" src={logoBackground} alt=""></img>
      <div className="login__main">
        <div className="login__heading">
          <img className="login__heading-logo" src={logoHeading} alt=""></img>
          <h1 className="login__heading-text">
            Chào mừng đến với{" "}
            <b style={{ color: "var(--orange-color)" }}>confi</b>
            <b style={{ color: "var(--border-blue-color)" }}>dental</b>!{" "}
          </h1>
        </div>
        <div className="login__sub-main">
          <div className="login__selection">
            <p style={{ fontSize: "1.6rem" }}>Bạn là...</p>
            <ul className="login__selection-menu">
              <li
                onClick={() => {
                  setUser("patient");
                  setIsPatient(true);
                  setIsDentist(false);
                  setIsStaff(false);
                }}
                className={
                  isPatient
                    ? "login__selection-item login__selection-item--selected"
                    : "login__selection-item"
                }
              >
                Bệnh nhân
              </li>
              <li
                onClick={() => {
                  setUser("dentist");
                  setIsPatient(false);
                  setIsDentist(true);
                  setIsStaff(false);
                }}
                className={
                  isDentist
                    ? "login__selection-item login__selection-item--selected"
                    : "login__selection-item"
                }
              >
                Nha sĩ
              </li>
              <li
                onClick={() => {
                  setUser("staff");
                  setIsPatient(false);
                  setIsDentist(false);
                  setIsStaff(true);
                }}
                className={
                  isStaff
                    ? "login__selection-item login__selection-item--selected"
                    : "login__selection-item"
                }
              >
                Nhân viên
              </li>
            </ul>
          </div>
          <form className="login__form" onSubmit={handleSubmit}>
            <h1 className="login__title">Đăng nhập</h1>
            <div className="login__input">
              <label htmlFor="username">Tên đăng nhập</label>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                placeholder=""
                id="username"
                name="username"
              />
            </div>
            <div className="login__input">
              <label htmlFor="password">Mật khẩu</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder=""
                id="password"
                name="password"
              />
            </div>
            <p className="login__text">
              Bạn chưa có tài khoản?
              <Link className="login__link" to="/signup">Đăng ký ngay</Link>
            </p>
            <button className="login__button" type="submit">
              <img className="login__button-img" src={arrowRight} alt="Login" />
            </button>
          </form>
        </div>
        <div className="emergency-call login-signup-emergency-call">
          <img className="emergency-call__icon" src={emergencyCall} alt="" />
          <p className="emergency-call__text">Cứu hộ nha khoa 24/7</p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
