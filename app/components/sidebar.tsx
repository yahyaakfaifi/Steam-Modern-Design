import Link from "next/link";
import { TbSmartHome } from "react-icons/tb";
import { PiRocket } from "react-icons/pi";
import { HiOutlineVideoCamera } from "react-icons/hi";
import { LuLayers } from "react-icons/lu";
import { CgGames } from "react-icons/cg";
import { HiOutlineLogout } from "react-icons/hi";
import { FaSteam } from "react-icons/fa6";



const sidebarItems = [
    {
        name: "Home",
        herf: "/",
        icon: TbSmartHome,
    },
    {
        name: "Apps",
        herf: "/",
        icon: LuLayers,
    },
    {
        name: "Explor",
        herf: "/",
        icon: PiRocket,
    },
    {
        name: "Games",
        herf: "/",
        icon: CgGames,
    },
    {
        name: "Streams",
        herf: "/",
        icon: HiOutlineVideoCamera,
    },
]

export default function Sidebar() {
    return (
        
            <aside className='sidebar'>
                <div className="logo-mine">
                <div className="logo-box">
                    <FaSteam className="logo" />
                    <span className="logo-name text-link">Steam</span>
                </div>
                </div>

                <ul className="ul_all">
                    {sidebarItems.map(({name, herf, icon: Icon}) => (
                       
                       <li className="li_all" key={name}>
                          
                            <Link href="/" className="link_all">
                                <div className="icon-link-all">
                                    <Icon />
                                </div>
                                <span className="text-link">{name}</span>
                            </Link>



                        </li>
                    ))}
                </ul>

            <div className="logout-mine">
                        <div className="logout-box">
                    <div className="logout-icon icon-link-all"><HiOutlineLogout /></div>
                    <span className="logout-text text-link">Signout</span>
                        </div>

                </div>
            
            </aside>
       
    )
}






