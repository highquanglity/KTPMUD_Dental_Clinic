import NavigationBar from "./NavigationBar";
import Footer from "./Footer";

import emergencyCall from "../assets/icons/emergency-call.svg";

const DentistPage = () => {
  return (
    <div className="DentistPage">
      {/* Navigation Bar */}
      <NavigationBar currentPage="dentist" />

      <div className="section dentist__main">
        <div className="grid wide dentist__wrap">
          
        </div>
      </div>

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

export default DentistPage;
