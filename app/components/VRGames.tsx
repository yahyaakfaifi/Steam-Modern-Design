import Image from "next/image"
import "../css/style.css";
import vr from "../assets/imgs/vr.png";
import cyber from "../assets/imgs/cyber.jpg";
import ow2 from "../assets/imgs/ow2.png";
import ds3 from "../assets/imgs/ds3.jpg";


export default function VRRGames() {


    return (

        < >
            <div className="vrgames-container-padding">
            <div className="VRGames-box">
                <div className="vrgames-squar">

                    <span className="vrgames-title-container">
                        <span className="vrgames-title">VR Games</span>
                    </span>

                    <span className="vrgames-bg-small-container">
                        <Image className="vr-img" src={vr} alt={""} />
                        <span className="vrgames-bg-small"></span>
                    </span>

                </div>

            </div>

            <div className="library-box">
                <div className="library-squar">
                    <span className="library-name">Library</span>
                    <div className="library-row">
                        <div className="library-img padding-al">
                            <Image className="img-lib" src={cyber} alt={""} />
                            <div className="imag-name-game">
                                <span className="name-game">Cyberpunk 2077</span>
                                <span className="dis-game">85.6GB</span>
                            </div>
                        </div>
                        <div className="library-date padding-al">
                            <span className="date-game">20 Dec</span>
                            <span className="date-game">2022</span>
                        </div>
                        <div className="library-state padding-al padding-al2">
                            <button className="radio-mine customize-btn customize-btn2" type="button">Installed</button>
                        </div>
                    </div>
                                        <div className="library-row">
                        <div className="library-img padding-al">
                            <Image className="img-lib" src={ow2} alt={""} />
                            <div className="imag-name-game">
                                <span className="name-game">Overwatch 2</span>
                                <span className="dis-game">43.87GB</span>
                            </div>
                        </div>
                        <div className="library-date padding-al">
                            <span className="date-game">20 Dec</span>
                            <span className="date-game">2022</span>
                        </div>
                        <div className="library-state padding-al padding-al2">
                            <button className="radio-mine customize-btn " type="button">Download</button>
                        </div>
                    </div>
                                        <div className="library-row">
                        <div className="library-img padding-al">
                            <Image className="img-lib" src={ds3} alt={""} />
                            <div className="imag-name-game">
                                <span className="name-game">Dark Souls 3</span>
                                <span className="dis-game">62.2GB</span>
                            </div>
                        </div>
                        <div className="library-date padding-al">
                            <span className="date-game">20 Dec</span>
                            <span className="date-game">2022</span>
                        </div>
                        <div className="library-state padding-al padding-al2">
                            <button className="radio-mine customize-btn " type="button">Download</button>
                        </div>
                    </div>
                    

                </div>

            </div>
            </div>
        </>


    );
}