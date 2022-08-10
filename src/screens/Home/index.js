import React from 'react'
import classNames from 'classnames/bind'
import styles from './Home.module.scss'
import { Routes,Route,Link } from 'react-router-dom'
import { FaHome,FaUser,FaBriefcase,FaGraduationCap,FaEnvelope } from "react-icons/fa";

import HomePage from '../Page/HomePage'
import Skill from '../Page/Skill'
import Portfolio from '../Page/Portfolio'
import About from '../Page/About'
import Contact from '../Page/Contact';


const cx = classNames.bind(styles)

function Home() {
  return (
    <div className={cx('container')}>
      <div className={cx('main-left')}>
        <nav className={cx('nav')}>
          <img className={cx('nav-title')} src={'http://tokyo.ibthemespro.com/assets/img/logo/dark.png'} alt={'http://tokyo.ibthemespro.com/assets/img/logo/dark.png'} />
          <ul>
            <li>
              <FaHome className={cx('icon')} />           
              <Link className={cx('nav-link')} to='/'>Home</Link>             
            </li>
            <li>
              <FaUser className={cx('icon')} />
              <Link className={cx('nav-link')} to='/about'>About</Link>
            </li>
            <li>
              <FaGraduationCap className={cx('icon')} />
              <Link className={cx('nav-link')} to='/skill'>Skills</Link>
            </li>
            <li>
              <FaBriefcase className={cx('icon')} />
              <Link className={cx('nav-link')} to='/portfolio'>Portfolio</Link>
            </li>
            <li>
              <FaEnvelope className={cx('icon')} />
              <Link className={cx('nav-link')} to='/contact'>Contact</Link>
            </li>
          </ul>
          <div className={cx('copyright')}><p>© 2022 Tokyo <br /> Created by<a href="https://www.facebook.com/kiet.tan.754365/" target="_blank" rel="noreferrer"> BuiKiet</a></p></div>
        </nav>
      </div>
      <div className={cx('main-right')}>
        <div className={cx('section')}>
          <div className={cx('main-container')}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<About />} />
              <Route path="/skill" element={<Skill />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home