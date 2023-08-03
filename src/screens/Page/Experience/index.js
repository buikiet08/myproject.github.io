import React from 'react'
import classNames from 'classnames/bind'
import styles from './Experience.module.scss'
import Title from '../../../component/Title'

const cx = classNames.bind(styles)

function Experience() {
  return (
    <div className={cx('skill')}>
      <Title label={"Experience"} title={"Work Experience"} />
      <div className={cx('wrapper')}>
        {/* <div className={cx('my-skill')}>
          {
            skills.map((skill,index) => 
              <div key={index} className={cx('skill-item')}>
                <div className={cx('skill-image')}>
                  <img className={cx('skill-image-link')} src={skill.image} alt={skill.name} />
                </div>
                <span className={cx('skill-name')}>{skill.name}</span>
              </div>
            )
          }
        </div> */}
        <div className={cx('experience')}>
          <div className={cx('experience-wrapper')}>
            <div className={cx('experience-item')} data-aos="fade-left" 
            data-aos-duration="700" >
              <div className={cx('experience-Work')}>
                <div className={cx('work-name')}>Internship</div>
                <span className={cx('work-time')}>12/2021 - 3/2022</span>
              </div>
              <div className={cx('experience-company')}>
                <h3 className={cx('company-name')}>TMS Holdings</h3>
                <div className={cx('company-content')}>
                  <span>- Build a complete website as required: figma, pdf, image,...</span>
                  <span>- Developing features according to customer requirements.</span>
                  <span>- Tech stack: Html, Css, JavaScript , CMS Nukeviet.</span>
                </div>
              </div>
            </div>

            <div className={cx('experience-item')} data-aos="fade-left" 
            data-aos-duration="700" >
              <div className={cx('experience-Work')}>
                <div className={cx('work-name')}>Front-end Developer</div>
                <span className={cx('work-time')}>4/2022 - 6/2023</span>
              </div>
              <div className={cx('experience-company')}>
                <h3 className={cx('company-name')}>ChoNhaGiau Electronics Trading Joint Stock Company</h3>
                <div className={cx('company-content')}>
                  <span>- Building app Chonhagiau</span>
                  <span>- Building warehouse management web - Warehouse
                    management is a software to manage inventory, revenue
                    sources, budgets, staff management, sales..</span>
                  <span>- Tech stack: Reactjs,React Native,TypeScript, Redux</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience