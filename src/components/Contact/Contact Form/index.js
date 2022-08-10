import React, { useRef } from 'react'
import './index.scss'
import emailjs from '@emailjs/browser'

const ContactForm = () => {
  const refForm = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_w32zada',
        'template_3c2360s',
        refForm.current,
        '8rUY2C3QciU5uGSNP'
      )
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <div className="contact-form">
      <form ref={refForm} onSubmit={sendEmail}>
        <ul>
          <li className="half">
            <input placeholder="Name" type="text" name="name" required />
          </li>
          <li className="half">
            <input placeholder="Email" type="email" name="email" required />
          </li>
          <li>
            <input placeholder="Subject" type="text" name="subject" required />
          </li>
          <li>
            <textarea placeholder="Message" name="message" required></textarea>
          </li>
          <li>
            <input type="submit" className="flat-button" value="SEND" />
          </li>
        </ul>
      </form>
    </div>
  )
}

export default ContactForm
