import { useRef } from "react";
import emailjs from '@emailjs/browser';

export default function Contact(){

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_4igzb37', 'template_zzxd15m', form.current, {
            publicKey: 'XEXSei-l-cJ7zkKRe',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
          e.target.reset();
    };

    return(
        <section>
            <div className="">
                <h2>Contact Me</h2>
                <h4>Get in touch</h4>
                
                <div className = "form-box">
                <form ref={form} className="form" onSubmit={sendEmail}>

                    <input type='text' className='inputfield' placeholder="Full Name" name="user_name" required />
                    <input type='email' className='inputfield' placeholder="Email" name="user_email" required />
                    <input type='Text' className='inputfield' placeholder="Subject" name="subject" required />
                    <textarea name='message' className='text-field' cols='30' rows='10' />
                    <button type='submit' className="form-button">Send message</button>

                </form>
                </div>
            </div>
        </section>
    );
}
