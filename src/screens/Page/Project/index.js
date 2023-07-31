import React from 'react'
import classNames from 'classnames/bind'
import styles from './Project.module.scss'
import Aos from 'aos'
import 'aos/dist/aos.css';
import { FaArrowLeft } from "react-icons/fa";

import Title from '../../../component/Title'
import { projects } from '../../../data/data'
import PortfolioItem from '../../../component/PortfolioItem';
const cx = classNames.bind(styles)

function Project() {
  // useEffects(() => {
  //   Aos.init({ duration: 2000 });
  // }, [])
    Aos.init({ duration: 2000 });

  return (
    <div className={cx('portfolio')}>
      <Title label={"Project"} title={"Project"} />
      <div className={cx('wrapper')}>
        <ul className={cx('portfolio_list')}>
          {
            projects.map((project,index) =>
            <li 
            key={index} 
            data-aos="fade-left" 
            data-aos-duration="700" 
            className={cx('')}>
              <PortfolioItem 
              image={project.image} 
              title={project.title} 
              tech={project.tech}
              link={project.link}
              github={project.github} />
            </li>
            )
          }
        </ul>
      </div>
    </div>

  )
}

export default Project