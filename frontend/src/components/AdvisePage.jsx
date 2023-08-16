import NavigationBar from "./NavigationBar";
import Footer from "./Footer";

import emergencyCall from "../assets/icons/emergency-call.svg";

const AdvisePage = () => {
  return (
    <div className="AdvisePage">
      {/* Navigation Bar */}
      <NavigationBar currentPage="advise" />

      Advise Page

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

export default AdvisePage;
