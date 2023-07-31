import React from 'react'
import classNames from 'classnames/bind'
import styles from './PortfolioItem.module.scss'
import Button from '../Button'

const cx = classNames.bind(styles)

function PortfolioItem(props) {
  return (
    <div className={cx('portfolio-item')}>
      <img src={props.image} alt={props.title} />
      <div className={cx('portfolio-content')}>
        <h5>{props.title}</h5>
        <p>{props.tech}</p>
        <div className={cx('detail-button')}>
          <Button label="View demo" className={cx('button')} onClick={() => {
            window.open(props.link)
          }} />
          {
            props.github &&
            <Button label="Link Github" className={cx('button')} onClick={() => {
              window.open(props.github)
            }} />
          }
        </div>
      </div>
      <div className={cx('overlay')}></div>
    </div>
  )
}

export default PortfolioItem