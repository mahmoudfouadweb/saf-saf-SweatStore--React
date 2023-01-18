import { AiFillHome } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import { MdExplore } from "react-icons/md";
import { MdStorefront } from "react-icons/md";
import { MdLibraryMusic } from "react-icons/md";
import { HiSave } from "react-icons/hi";
import { BsCalendarMonth } from "react-icons/bs";
import { MdOutlinePersonOutline } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { SiDiscord } from "react-icons/si";
import { MdOutlineLogout } from "react-icons/md";


const Sidebar = () => {
  return (
    <aside className='sidebar'>
      <ul className="sidebar__container">
        <li><a href="#" className="sidebar__link active"><AiFillHome /> <span>home</span></a></li>
        <li><a href="#" className="sidebar__link"><IoIosPeople /> <span>Community</span></a></li>
        <li><a href="#" className="sidebar__link"><MdExplore /> <span>Explore</span></a></li>
        <li><a href="#" className="sidebar__link"><MdStorefront /> <span>My Store</span></a></li>
        <li><a href="#" className="sidebar__link"><MdLibraryMusic /> <span>Library</span></a></li>
        <div className="line"></div>
        <li><a href="#" className="sidebar__link"><HiSave /> <span>Saved</span></a></li>
        <li><a href="#" className="sidebar__link"><BsCalendarMonth /> <span>Calendar</span></a></li>
        <li><a href="#" className="sidebar__link"><MdOutlinePersonOutline /> <span>Profile</span></a></li>
        <li><a href="#" className="sidebar__link"><FiSettings /> <span>Settings</span></a></li>
        <li><a href="#" className="sidebar__link"><SiDiscord /> <span>Discord</span></a></li>
        <li><a href="#" className="sidebar__link"><MdOutlineLogout /> <span>Log out</span></a></li>
      </ul>
    </aside>
  )
}

export default Sidebar 