import React from 'react'
import classNames from 'classnames/bind'
import styles from './Button.module.scss'

const cx = classNames.bind(styles)
function Button(props) {
  return (
    <div className={cx('description-button')}>
        <button  className={cx('ib-button')} type={props.type} onClick={props.onClick}>{props.label}</button>
    </div>
  )
}

export default Button