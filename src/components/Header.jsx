import React, { useState, useRef, useEffect } from "react";
import "../scss/header.scss";
import downloadFile from '../../Chandra+Prakash+Resume_Canada_Web+developer+.pdf';

const Header = () => {

  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(current => !current);
  };
  const stickyHeader = useRef()

  useEffect(() => {
    const header = document.getElementById('header')
    let fixedTop = stickyHeader.current?.offsetTop
    const fixedHeader = () => {
      console.log(header);

      if (header)
        if (header?.classList) {
          if (window.scrollY > fixedTop) {
            header?.classList.add('fixedTop')
          } else {
            header?.classList.remove('fixedTop')
          }
        }
    }
    window.addEventListener('scroll', fixedHeader)
  }, [])

  return (
    <div className="header " id="header" ref={stickyHeader}>
      <div className="d-flex flex-row justify-content-between align-items-center gap-2">
        <a href="#" className="logo">
          <img src="./images/logo.svg" width={60} /> Chandra Prakash
        </a>

        <ul class="nav-menu menu d-none d-lg-flex flex-row">
          <li class="nav-menu-items">
            <a href="#about-me" >About Me</a>
          </li>
          <li class="nav-menu-items">
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href={downloadFile} target="_blank" rel="noreferrer">
              Resume
            </a>
          </li>
        </ul>

        <div class="hamburger-menu d-block d-lg-none">
          <input id="menu__toggle" type="checkbox" defaultChecked={isChecked} checked={isChecked} onChange={()=>handleChange()}/>
          <label class="menu__btn" for="menu__toggle">
            <span></span>
          </label>

          <ul class="nav-menu menu menu__box">
            <li class="nav-menu-items menu__item">
              <a href="#about-me" onClick={()=>handleChange()}>About Me</a>
            </li>
            <li class="nav-menu-items menu__item">
              <a href="#skills" onClick={()=>handleChange()}>Skills</a>
            </li>
            <li class="nav-menu-items menu__item">
              <a href={downloadFile} target="_blank" rel="noreferrer" onClick={()=>handleChange()}>
                Resume
              </a>
            </li>
          </ul>


        </div>
      </div>


    </div>
  );
}

export default Header;