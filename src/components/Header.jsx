import HeaderStyle from './Header.module.css';
import logo from '../Logo/mypageLogo.png';  
import menuIcon from '../Logo/menuIcon.svg';
import FacebookIcon from '../Logo/Facebook.png';
import InstaIcon from '../Logo/Insta.png';
import NaverIcon from '../Logo/Naver.png';
import ChatIcon from '../Logo/Chat.png';
import MainLogo from '../Logo/MainLogo.png';
import SearchIcon from '../Logo/SearchIcon.png';
import GetLocation from './geCutrrentRoute';
import {Route, Link, Routes, useLocation} from 'react-router-dom';
import React from 'react';
import search from './search/search';

function Header() {
  const location = useLocation(); // get current location of user
  return (
    // <BrowserRouter>/
      <header className={HeaderStyle.header}>
        <div className={HeaderStyle.headerSearch}>
          <Link to='/' className={HeaderStyle.linktoMain}>
            <img src={MainLogo} alt="MainLogo"  className={HeaderStyle.MainLogo}/>
            <div className={HeaderStyle.Logo}>
              NATURA
            </div>
          </Link>
          <div className={HeaderStyle.Search}>
            <div className={HeaderStyle.SearchContainer}>
              <input type="text" placeholder="간편하게 분양하자!" className={HeaderStyle.SearchInput} />
              <button className={HeaderStyle.SearchButton}>
                <img src={SearchIcon} alt="SearchIcon" className={HeaderStyle.SearchIconImg}/>
              </button>
            </div>
          </div>
          <div className={HeaderStyle.Icons}>
            <a href="#" >
              <img src={logo} alt="logo" className={HeaderStyle.logo}/>
              <img src={ChatIcon} alt="menuIcon" className={HeaderStyle.menuIcon} />
            </a>
          </div>
        </div>
        {/* <div className={HeaderStyle.collapsingPart}> */}
          <hr className={HeaderStyle.headerHr}/>
          <div className={HeaderStyle.HeaderUtils}>
            <div className={HeaderStyle.Menus}>
              <a href="#">
                <img src={FacebookIcon} alt="FacebookIcon" />
              </a>
              <a href="#">
                <img src={InstaIcon} alt="InstaIcon" />
              </a>
              <a href="#">
                <img src={NaverIcon} alt="NaverIcon" />
              </a>
              
            </div>
            <div className={HeaderStyle.Links}>
              <a href="#">Q&A</a>
              <div></div>
              <a href="#">마켓후기</a>
              <div></div>
              <a href="#">로그인</a>
              <div></div>
              <a href="#">회원가입</a>
            </div>
          </div>
        <hr className={HeaderStyle.headerHr}/>
        <div className={HeaderStyle.Menubar}>
            <Link to='/allCategories'>
              <div>
                <img src={menuIcon} alt="menuIcon" className={HeaderStyle.menuIcon} />
                전체 카테고리
              </div>
            </Link>
            <Link to ='/adopt'>동물분양</Link> 
            <Link to='/community'>커뮤니티</Link>
            <Link to ='/donation'>모금</Link>
            <Link to="/aboutus">ABOUT US</Link>
          </div>
          {/* <hr className={HeaderStyle.headerHrShadow}/> */}
        {/* </div> */}
        {/* <GetLocation></GetLocation> */}
      </header>
  )
}
export default Header

