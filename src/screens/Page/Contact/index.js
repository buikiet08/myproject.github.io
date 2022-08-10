import React,{ useRef } from 'react'
import classNames from 'classnames/bind'
import styles from './Contact.module.scss'
import emailjs from 'emailjs-com'
import { useForm } from "react-hook-form";

import Title from '../../../component/Title'
import Button from '../../../component/Button'
const cx = classNames.bind(styles)

function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const form = useRef();
  
  const sendEmail = (e) => {
    // e.preventDefault();
    console.log(e)
      // emailjs.sendForm('service_168', 'template_kg6mcyh', e.target, 'wVd7qeRnxmh1-uthW')
      //   .then((result) => {
      //       console.log(result.text);
      //   }, (error) => {
      //       console.log(error.text);
      //   });
      //   e.target.reset();
    
  };
  return (
    <div className={cx('contact')}>
      <Title label="Contact" title="Get in Touch" />
      <div className={cx('wrapper')}>
        <div className={cx('map_wrapper')}>

        </div>
        <div className={cx('fields')}>
          <form ref={form} className={cx('contact_form')} onSubmit={handleSubmit(sendEmail)}>
            <div className={cx('first')}>
              <ul>
                <li>
                  <input 
                  {...register('name', {required : true})}
                  name="name" 
                  type="text" 
                  placeholder="Name" />
                  {Object.keys(errors).length > 0 ??
                    errors.name?.type === 'required' ? 
                      <span>Name is required</span> :
                      <span></span>
                    
                  }
                </li>
                <li>
                  <input 
                  {...register('email',{
                    required : true,
                    pattern:/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  
                  })}
                  name="email" 
                  type="email" 
                  placeholder="Email" />
                  {Object.keys(errors).length !== 0 ??
                    errors.email?.type === 'required' ? 
                      <span>Email is required</span>
                     : errors.email?.type === 'pattern' ? 
                      <span>Invalid Email Address</span>
                     : <span></span>                   
                  }
                </li>
                <li>
                  <textarea 
                  {...register('message',{required : true})}
                  name="message" 
                  placeholder="Message"></textarea>
                  {Object.keys(errors).length > 0 ??
                    errors.message?.type === 'required' ? 
                      <span>Message is required</span> :
                      <span></span>
                    
                  }
                </li>
              </ul>
            </div>
            <Button label="Send Message" type="submit" />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact