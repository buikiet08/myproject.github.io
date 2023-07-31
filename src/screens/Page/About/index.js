import React from 'react'
import classNames from 'classnames/bind'
import styles from './About.module.scss'
import {NavLink} from 'react-router-dom'
import { FaUser,FaSchool,FaTools } from 'react-icons/fa';
import Button from '../../../component/Button'

const cx = classNames.bind(styles)
function About() {
  return (
    <div className={cx('about')}>
      {/* <div className={cx('about_image')}>
        <img src="http://tokyo.ibthemespro.com/assets/img/slider/1.jpg" alt="about" />
      </div> */}
      <div className={cx('description')}>
        <div className={cx('description_inner')}>
          <div className={cx('right')} data-aos="fade-right" data-aos-duration="700">
            <h3 className={cx('name')}><FaUser className={cx('icon')} />Contact information</h3>
            <ul>
              <li>
                <p><span>Birthday:</span>16.08.2001</p>
              </li>
              <li>
                <p><span>Age:</span>22</p>
              </li>
              <li>
                <p><span>Address:</span>Ho Chi Minh City</p>
              </li>
              <li>
                <p><span>Email:</span><a href="mailto:mail@gmail.com">buikiet16801@gmail.com</a></p>
              </li>
              <li>
                <p><span>Phone:</span><a href="tel:+770221770505">+84 866 760 042</a></p>
              </li>
            </ul>
          </div>
          <div className={cx('right')} data-aos="fade-left" data-aos-duration="700">
            <h3 className={cx('name')}><FaSchool className={cx('icon')} />Education</h3>
            <ul>
              <li>
                <p><span>2019 - persent: </span> Infomation technology at <b>Industrial University of Ho Chi Minh City</b></p>
              </li>
              <li>
                <p><span>8/2022 - 10/2022: </span> ReactJs Master at <b>CFD Circle</b></p>
              </li>
            </ul>
          </div>
          <div className={cx('right')} data-aos="fade-right" data-aos-duration="700">
            <h3 className={cx('name')}><FaUser className={cx('icon')} />Personal preference</h3>
            <ul>
              <li>
                <p>Sport</p>
              </li>
              <li>
                <p>Music</p>
              </li>
              <li>
                <p>photographer</p>
              </li>
            </ul>
          </div>
          <div className={cx('right')} data-aos="fade-left" data-aos-duration="700">
            <h3 className={cx('name')}><FaTools className={cx('icon')} />Skills</h3>
            <ul>
              <li>
                <p>HTML, CSS, JAVASCRIPT</p>
              </li>
              <li>
                <p>Bootstrap, Tailwind CSS, SCSS</p>
              </li>
              <li>
                <p>ReactJs, React Native</p>
              </li>
              <li>
                <p>Typescript</p>
              </li>
              <li>
                <p>NodeJS, NextJS</p>
              </li>
              <li>
                <p>MySql</p>
              </li>
              <li>
                <p>Git</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About