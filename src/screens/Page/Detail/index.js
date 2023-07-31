import React from 'react'
import { useParams } from 'react-router-dom'
import classNames from 'classnames/bind'
import styles from './Detail.module.scss'
import { projects } from '../../../data/data'
import Button from '../../../component/Button'

const cx = classNames.bind(styles)

function Detail() {
    const { title } = useParams()
    return (
        <div className={cx('detail')}>
            {
                projects.filter(project => project.title === title).map((item, index) =>
                    <div className={cx('wrapper')}>
                        <h3>{item.title}</h3>
                        <div className={cx('detail-image')}>
                            {
                                item?.imageDetail.map((item, index) => (
                                    <img key={index} src={item} alt={item.title} />

                                ))
                            }
                        </div>
                        <div className={cx('detail-description')}>
                            <span>-{item.description}</span>
                        </div>
                        <div className={cx('detail-technology')}>
                            <h4>Technology used</h4>
                            <ul>
                                {item.technology.map((item, index) => (
                                    <li key={index}>. {item}</li>
                                ))}
                            </ul>
                        </div>
                        <div className={cx('detail-button')}>
                            <Button label="View demo" onClick={() => {
                                window.open(item.link)
                            }} />
                            <Button label="Link Github" onClick={() => {
                                window.open(item.github)
                            }} />
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Detail