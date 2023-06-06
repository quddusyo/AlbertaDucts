import React, { useRef, useState } from 'react'
import './ContactContent.css'
import emailjs from '@emailjs/browser'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SubmitBtn from './SubmitBtn';


const ContactContent = () => {
    const [isPending, setIsPending] = useState(false)
    const notifySuccess = () => toast("Thank you! Our team will contact you soon to schedule an appointment!");
    const notifyFailure = () => toast("Response could not be Submitted.");
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        // loading
        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
        .then((res) => {
                console.log('SUCCESS!', res.status, res.text);
                notifySuccess();
            }, (error) => {
                console.log('FAILED...', error);
                notifyFailure();
            })
        e.target.reset();
    };
  return (
    <div className='contact__container'>
        <ToastContainer
        position="top-center"
        autoClose={6000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
        <form className='contact__form' ref={form} onSubmit={sendEmail}>
            <h3>Schedule</h3>
            <label>Name</label>
            <input type='text' name='user_name' placeholder='Your Name' required />
            <label>Email</label>
            <input type='email' name='user_email' placeholder='Email' required />
            <label>Address</label>
            <input type='text' name='user_address' placeholder='Address (Optional)' />
            <label>Phone</label>
            <input type='phone' name='user_phone' placeholder='Phone no.' required />
            <label>Message</label>
            <textarea type='text' name='message' placeholder='How many ducts are in your house? 15%OFF applied at checkout.'></textarea>
            <SubmitBtn isPending={isPending} setIsPending={setIsPending}/>
        </form>
    </div>
  )
}

export default ContactContent