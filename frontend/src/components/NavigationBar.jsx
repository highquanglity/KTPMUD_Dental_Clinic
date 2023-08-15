import React, { useState, useEffect } from "react";

import logoNavbar from "../assets/icons/confidental-logo.svg";
import angleDown from "../assets/icons/angle-down-solid.svg";
import contactPhone from "../assets/icons/contact-phone-solid.svg";

const NavigationBar = (props) => {
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsNavbarFixed(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`Navbar Navbar--transparent ${isNavbarFixed ? "Navbar--fixed" : ""}`}>
      <div className="grid wide">
        <nav className="navbar__main">
          <div className="navbar__wrap">
            <a href="./LandingPage.js" className="navbar__logo">
              <img
                className="navbar__logo-img"
                src={logoNavbar}
                alt="confidental Logo"
              />
            </a>
            <div className="navbar__menu">
              <ul className="navbar__menu-list">
                <li
                  className={
                    props.currentPage === "landing"
                      ? "navbar__menu-item navbar__menu-item--selected"
                      : "navbar__menu-item"
                  }
                >
                  <a href="./LandingPage.js" className="navbar__page-scroll">
                    Trang chủ
                  </a>
                </li>
                <li
                  className={
                    props.currentPage === "service"
                      ? "navbar__menu-item navbar__menu-item--selected"
                      : "navbar__menu-item"
                  }
                >
                  <a href="./ServicePage.js" className="navbar__page-scroll">
                    Dịch vụ
                    <img src={angleDown} alt="" />
                  </a>
                </li>
                <li
                  className={
                    props.currentPage === "dentist"
                      ? "navbar__menu-item navbar__menu-item--selected"
                      : "navbar__menu-item"
                  }
                >
                  <a href="./DentistPage.js" className="navbar__page-scroll">
                    Nha sĩ
                  </a>
                </li>
                <li
                  className={
                    props.currentPage === "advise"
                      ? "navbar__menu-item navbar__menu-item--selected"
                      : "navbar__menu-item"
                  }
                >
                  <a href="./AdvisePage.js" className="navbar__page-scroll">
                    Tư vấn
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="navbar__sub-main">
            <div className="navbar__contact">
              <img src={contactPhone} alt="" className="navbar__contact-icon" />
              <p className="navbar__contact-number">0987-654-321</p>
            </div>
            <a href="./PatientPage.js" className="navbar__info">
              Thông tin cá nhân
            </a>
            <button className="navbar__logout">Đăng xuất</button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavigationBar;
