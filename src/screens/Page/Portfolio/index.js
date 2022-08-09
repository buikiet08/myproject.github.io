import React,{useEffects} from 'react'
import classNames from 'classnames/bind'
import styles from './Portfolio.module.scss'
import Aos from 'aos'
import 'aos/dist/aos.css';

import Title from '../../../component/Title'
const cx = classNames.bind(styles)

function Portfolio() {
  // useEffects(() => {
  //   Aos.init({ duration: 2000 });
  // }, [])
    Aos.init({ duration: 2000 });

  return (
    <div className={cx('portfolio')}>
      <Title label={"Portfolio"} title={"Creative Portfolio"} />
      <div className={cx('wrapper')}>
        <ul className={cx('portfolio_list')}>
          <li className={cx('portfolio_item')}>
            1
          </li>

        </ul>
      </div>
    </div>

  )
}

export default Portfolio