import React from 'react'
import classNames from 'classnames/bind'
import styles from './Home.module.scss'
import { Routes,Route,NavLink } from 'react-router-dom'
import { FaHome,FaUser,FaBriefcase,FaGraduationCap,FaEnvelope } from "react-icons/fa";

import HomePage from '../Page/HomePage'
import About from '../Page/About'
import Contact from '../Page/Contact';
import Main from '../Page/Main';
import Experience from '../Page/Experience';
import Project from '../Page/Project';

const cx = classNames.bind(styles)

function Home() {
  return (
    <div className={cx('container')}>
      <div className={cx('main-left')}>
        <nav className={cx('nav')}>
          <h1 className={cx('nav-title')} >Portfolio</h1>
          {/* <img className={cx('nav-title')} src={'http://tokyo.ibthemespro.com/assets/img/logo/dark.png'} alt={'http://tokyo.ibthemespro.com/assets/img/logo/dark.png'} /> */}
          <ul>
            <li>
              <NavLink className={({ isActive }) => cx(isActive ? 'active' : 'nav-link')}  to='/'>
                <FaHome className={cx('icon')} />           
                Home
              </NavLink>             
            </li>
            <li>
              <NavLink className={({ isActive }) => cx(isActive ? 'active' : 'nav-link')} to='/about'>
                <FaUser className={cx('icon')} />
                About
              </NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => cx(isActive ? 'active' : 'nav-link')} to='/experience'>
                <FaGraduationCap className={cx('icon')} />
                Experience
              </NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => cx(isActive ? 'active' : 'nav-link')} to='/project'>
                <FaBriefcase className={cx('icon')} />
                Project
              </NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => cx(isActive ? 'active' : 'nav-link')} to='/contact'>
                <FaEnvelope className={cx('icon')} />
                Contact
              </NavLink>
            </li>
          </ul>
          <div className={cx('copyright')}><p>© 2023 buikiet <br /> Created by<a href="https://www.facebook.com/kiet.tan.754365/" target="_blank" rel="noreferrer"> BuiKiet</a></p></div>
        </nav>
      </div>
      <div className={cx('main-right')}>
        <div className={cx('section')}>
          <div className={cx('main-container')}>
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route path="/about" element={<About />} />
              <Route path="/about/about" element={<Main />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/project" element={<Project />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home