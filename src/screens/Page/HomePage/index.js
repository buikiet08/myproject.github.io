import React from 'react'
import classNames from 'classnames/bind'
import { FaFacebookF,FaInstagram,FaGithub, FaLinkedin } from 'react-icons/fa';
import styles from './HomePage.module.scss'
import Aos from 'aos'
import 'aos/dist/aos.css'; // You can also use <link> for styles
import images from '../../../constains/images';
const cx = classNames.bind(styles)
function HomePage() {
  Aos.init({ duration: 2000 });
  return (
    <div className={cx('container')}>
      <div className={cx('avatar')}>
        <div className={cx('image')} data-aos="fade-right" data-aos-duration="700">
          <img src={images.avatar} alt={'http://tokyo.ibthemespro.com/assets/img/slider/1.jpg'} />
        </div>
      </div>

      <div className={cx('details')} data-aos="fade-left" data-aos-duration="700">
        <p className={cx('user-hello')}>Hi there <g-emoji class="g-emoji" alias="wave" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f44b.png">👋</g-emoji></p>
        <p className={cx('user-name')}><span>I'm </span>Bui Kiet</p>
        <p className={cx('job')} >I’m a Front-end Developer, love mobile and website .</p>
        <ul className={cx('social')}>
          <li>
            <a href="https://www.facebook.com/kiet.tan.754365" target="_blank" rel="noreferrer"><FaFacebookF className={cx('icon')} /></a>
          </li>
          <li>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><FaInstagram className={cx('icon')} /></a>
          </li>
          <li>
            <a href="https://github.com/buikiet08" target="_blank" rel="noreferrer"><FaGithub className={cx('icon')} /></a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/b%C3%B9i-ki%E1%BB%87t-928926272" target="_blank" rel="noreferrer"><FaLinkedin className={cx('icon')} /></a>
          </li>
          
        </ul>
      </div>
    </div>
  )
}

export default HomePage