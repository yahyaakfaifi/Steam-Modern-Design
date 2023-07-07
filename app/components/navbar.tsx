import { FaMagnifyingGlass } from "react-icons/fa6";
import { TbUsers } from "react-icons/tb";

import img from "../assets/imgs/Profile.png";



export default function Navbar() {
    return (

        <header className="navbar-container">
            <div className="buttons-nav">
                <div className="btn-profile">
                    <div className="notification-red-profile"></div>
                    <img className="profile-pic" src={img.src} alt="" />
                </div>
                <div className="btn-money">140$</div>
                <span className="break-nav"></span>
                <div className="btn-ppl">
                    <TbUsers />
                </div>
            </div>
            <div className="search-nav">
                <FaMagnifyingGlass className="search-icon" />
                <input className="search-field" type="search" placeholder="Game, Category, Developer" name="" id="" />
            </div>

        </header>



    )
}






