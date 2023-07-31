import React, { useRef } from 'react'
import classNames from 'classnames/bind'
import styles from './Contact.module.scss'
import emailjs from 'emailjs-com'
import { useForm } from "react-hook-form";
import { useAlert } from "react-alert";

import Title from '../../../component/Title'
import Button from '../../../component/Button'
const cx = classNames.bind(styles)

function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const form = useRef();
  const alert = useAlert();

  const sendEmail = (e) => {
    // e.preventDefault();

    emailjs.sendForm('service_168', 'template_kg6mcyh', form.current, 'wVd7qeRnxmh1-uthW')
      .then((result) => {
        console.log(result.text);
        alert.success("Success");
      }, (error) => {
        console.log(error.text);
      });
    // e.target.reset();

  }
  return (
    <div className={cx('contact')}>
      <Title label="Contact" title="Get in Touch" />
      <div className={cx('wrapper')}>
        <div className={cx('map_wrapper')} data-aos="fade-right" data-aos-duration="700">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.5844466285607!2d106.66003137092741!3d10.843079234359223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529af5bf4d5b3%3A0x4bb2e6300a37f6c2!2zxJAuIFRo4buRbmcgTmjhuqV0LCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1690805746239!5m2!1svi!2s" className={cx('map')} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className={cx('fields')} data-aos="fade-left" data-aos-duration="700">
          <form ref={form} className={cx('contact_form')} onSubmit={handleSubmit(sendEmail)}>
            <div className={cx('first')}>
              <ul>
                <li>
                  <input
                    {...register('name', { required: true })}
                    name="name"
                    type="text"
                    placeholder="Name" />
                  {Object.keys(errors).length !== 0 &&
                    <span className={cx('errors')}>
                      {errors.name?.type === 'required' && <p>Name is required</p>}
                    </span>
                  }
                </li>
                <li>
                  <input
                    {...register('email', {
                      required: true,
                      pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,

                    })}
                    name="email"
                    type="email"
                    placeholder="Email" />
                  {Object.keys(errors).length !== 0 &&
                    <span className={cx('errors')}>
                      {errors.email?.type === 'required' && <p>Email is required</p>}
                      {errors.email?.type === 'pattern' && <p>Invalid Email Address</p>}
                    </span>
                  }
                </li>
                <li>
                  <textarea
                    {...register('message', { required: true })}
                    name="message"
                    placeholder="Message"></textarea>
                  {Object.keys(errors).length !== 0 &&
                    <span className={cx('errors')}>
                      {errors.message?.type === 'required' && <p>Message is required</p>}
                    </span>
                  }
                </li>
              </ul>
            </div>
            <Button label="Send Message" type="submit" />
            <success />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact