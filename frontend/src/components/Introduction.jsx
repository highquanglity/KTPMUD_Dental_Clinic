import introText from "../assets/imgs/landing-intro-text.svg";
import videoImg1 from "../assets/imgs/landing-intro-video-2.png";
import videoImg2 from "../assets/imgs/landing-intro-video-1.png";
import playIcon from "../assets/icons/play-icon-solid.svg";
import angleRight from "../assets/icons/angle-right-solid.svg";

const Introduction = (props) => {
    if (props.currentType === "intro") return (
        <div className="introduction__content">
            <div className="introduction__video-list">
                <div className="introduction__video">
                    <img src={videoImg1} alt="" className="introduction__video-img" />
                    <button className="introduction__video-button">
                        <img src={playIcon} alt=""/>
                        Xem video
                        <img src={angleRight} alt="" />
                    </button>
                </div>
                <div className="introduction__video">
                    <img src={videoImg2} alt="" className="introduction__video-img" />
                    <button className="introduction__video-button">
                        <img src={playIcon} alt=""/>
                        Xem video
                        <img src={angleRight} alt="" />
                    </button>
                </div>
                <div className="introduction__video">
                    <img src={videoImg1} alt="" className="introduction__video-img" />
                    <button className="introduction__video-button">
                        <img src={playIcon} alt=""/>
                        Xem video
                        <img src={angleRight} alt="" />
                    </button>
                </div>
                <div className="introduction__video">
                    <img src={videoImg2} alt="" className="introduction__video-img" />
                    <button className="introduction__video-button">
                        <img src={playIcon} alt=""/>
                        Xem video
                        <img src={angleRight} alt="" />
                    </button>
                </div>
            </div>
            <img src={introText} alt="" className="introduction__text"/>
        </div>
    );

    if (props.currentType === "gallery") return (
        <div className="introduction__content">
        ...
        </div>
    );

    if (props.currentType === "news") return (
        <div className="introduction__content">
        ...
        </div>
    );
};

export default Introduction;