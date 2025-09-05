import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useContext } from "react";
import translationConfig from "../Locales/translation-config";
import { LanguageContext } from "../utils/LanguageContext";
import { useNotificationContext } from '../utils/NotificationContext';

import '../Styles/contact.css';

export default function Contact() {

  const { showNotification } = useNotificationContext();

  const form = useRef();

  const [isLoading, setIsLoading] = useState(false)

  const sendEmail = (e) => {

    
    try {

      e.preventDefault();

      const name = form.current.user_name.value.trim();
      const email = form.current.user_email.value.trim();
      const message = form.current.message.value.trim();

      if (!name || !email || !message) {
        console.log('ERROR: All fields must be filled!');
        showNotification("All fields must be filled!")
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        console.log('ERROR: Please enter a valid email!');
        showNotification("Please enter a valid email!")
        return;
      }

      setIsLoading(true)

      emailjs
        .sendForm('service_rnjiswg', 'template_sxm2n6m', form.current, {
          publicKey: 'kN3aXCQ_8MihyT80s',
        })
        .then(
          () => {
            console.log('SUCCESS: Email sent!');
            form.current.reset();
            setIsLoading(false);
            showNotification("Email sent, thank you!", "succes")
          },
          (error) => {
            console.log('FAILED: ', error.text);
            setIsLoading(false);
          },
        );
      
    } catch (error) {
      console.log(error)
    }
  }


  const { lang, setLang } = useContext(LanguageContext);
      
  const t = translationConfig[lang];

  return (
    <section className='top-section-contact'>

    <div className='content'>
      <h1>{t.getInTouch}</h1>
      <p>{t.contactpage_main1}</p>
    </div>

    

    <div className='contact'>

      <form className='contactForm' ref={form} onSubmit={sendEmail}>
        <label>{t.name}</label>
        <input type="text" name="user_name" />
        <label>{t.email}</label>
        <input type="text" name="user_email" />
        <label>{t.msg}</label>
        <textarea name="message" />
        <button type="submit"><span>{t.send}</span></button>
        {isLoading && <div className='loader'>
          <div className='loaderElement'></div>
        </div>}
      </form>
    </div>
    </section>
  );
};