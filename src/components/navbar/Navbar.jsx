import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import './navbar.scss';
import Img from '../../img/profile_pic-removebg-preview.png';
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";


const Navbar = () => {
  const {dispatch} =useContext(DarkModeContext);
  return (
    <div className='navbar'>
      <div className="wapper">
        <div className="search">
          <input className="inputs" type="text" placeholder='Search...' />
          <SearchOutlinedIcon className="icon"/>
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className="icon"/>
            English
          </div>
          <div className="item" onClick={()=>dispatch({type:"TOGGOLE"})}>
            <DarkModeOutlinedIcon  className="icon"/>
           
            
          </div>
          <div className="item">
            <FullscreenExitOutlinedIcon className="icon"/>
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon"/>
            <div className="count">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon"/>
            <div className="count">2</div>
          </div>
          <div className="item">
            <ListOutlinedIcon className="icon"/>
          </div>
          <div className="item">
            <img src={Img} alt="profile-pic" className="avater"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar