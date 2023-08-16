import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import logoHeading from "../assets/icons/confidental-logo.svg";
import logoBackground from "../assets/icons/confidental-mono.svg";
import arrowRight from "../assets/icons/arrow-right-solid.svg";
import emergencyCall from "../assets/icons/emergency-call.svg";

const SignupPage = () => {
  const [account, setAccount] = useState({
    info: '',
    phone: '',
    username: '',
    password: '',
  });

  const showIllegal = () => {
    alert("Chỉ có bệnh nhân mới có thể đăng ký tài khoản mới!");
  };

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8033/signup", account)
         .then(res => {
          if (res.data.Status === "Success.") {
            navigate("/");
          } else {
            alert("Error.");
          }
         })
         .then(err => console.log(err));
    
  };

  return (
    <div className="SignupPage">
      <img
        className="signup__background-logo"
        src={logoBackground}
        alt=""
      ></img>
      <div className="signup__main">
        <div className="signup__heading">
          <img className="signup__heading-logo" src={logoHeading} alt=""></img>
          <div className="signup__selection">
            <p style={{ fontSize: "1.6rem" }}>Bạn là...</p>
            <ul className="signup__selection-menu">
              <li className="signup__selection-item signup__selection-item--selected">
                Bệnh nhân
              </li>
              <li onClick={showIllegal} className="signup__selection-item">
                Nha sĩ
              </li>
              <li onClick={showIllegal} className="signup__selection-item">
                Nhân viên
              </li>
            </ul>
          </div>
        </div>
        <form className="signup__form" onSubmit={handleSubmit}>
          <h1 className="signup__title">Đăng ký</h1>
          <div className="signup__input">
            <label htmlFor="info">Họ và tên</label>
            <input
              value={account.info}
              onChange={(e) => setAccount({...account, info: e.target.value})}
              type="text"
              placeholder=""
              id="info"
              name="info"
            />
          </div>
          <div className="signup__input">
            <label htmlFor="phoneNumber">Số điện thoại</label>
            <input
              value={account.phone}
              onChange={(e) => setAccount({...account, phone: e.target.value})}
              type="tel"
              placeholder=""
              id="phoneNumber"
              name="phoneNumber"
            />
          </div>
          <div className="signup__input">
            <label htmlFor="username">Tên đăng nhập</label>

            <input
              value={account.username}
              onChange={(e) => setAccount({...account, username: e.target.value})}
              type="text"
              placeholder=""
              id="username"
              name="username"
            />
          </div>
          <div className="signup__input">
            <label htmlFor="password">Mật khẩu</label>
            <input
              value={account.password}
              onChange={(e) => setAccount({...account, password: e.target.value})}
              type="password"
              placeholder=""
              id="password"
              name="password"
            />
          </div>
          <p className="signup__text">
            Bạn đã có tài khoản?
            <Link className="signup__link" to="/">Đăng nhập</Link>
          </p>
          <button className="signup__button" type="submit">
            <img className="signup__button-img" src={arrowRight} alt="Signup" />
          </button>
        </form>
        <div className="emergency-call login-signup-emergency-call">
          <img className="emergency-call__icon" src={emergencyCall} alt="" />
          <p className="emergency-call__text">Cứu hộ nha khoa 24/7</p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
