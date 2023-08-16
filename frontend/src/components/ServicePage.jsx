import NavigationBar from "./NavigationBar";
import Footer from "./Footer";

import emergencyCall from "../assets/icons/emergency-call.svg";

const ServicePage = () => {
  return (
    <div className="ServicePage">
      {/* Navigation Bar */}
      <NavigationBar currentPage="service" />

      Service Page

      {/* Footer */}
      <Footer />
      
      {/* Emergency Call */}
      <div className="emergency-call">
        <img className="emergency-call__icon" src={emergencyCall} alt="" />
        <p className="emergency-call__text">Cứu hộ nha khoa 24/7</p>
      </div>
    </div>
  );
};

export default ServicePage;
