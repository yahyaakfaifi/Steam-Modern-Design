import Image from "next/image"
import "../css/style.css";
import Link from "next/link";

import logo from "../assets/imgs/steam.svg";



export default function Footer() {


    return (

        < >


            <footer className="footer-mine">
                <div className="footer-img">
                    <Image className="footer-logo" src={logo} alt={""} />
                </div>
                <div className="footer-links">
                    <Link href={"/"}>About Valve</Link>
                    <Link href={"/"}> Jobs </Link>
                    <Link href={"/"}> Steamworks</Link>
                </div>

            </footer>

            
        </>


    );
}