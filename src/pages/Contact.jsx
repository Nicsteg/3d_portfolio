import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', message: ''});
  const [isLoading, setIsLoading] = useState(false);
  
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleFocus = () => {};
  const handleBlur = () => {};
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    console.log('Submission started, setting loading true');
  
    console.log(import.meta.env.VITE_APP_EMAILJS_SERVICE_ID);
    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: 'Nicolas Steger',
        from_email: form.email,
        to_email: 'Nicksteger@live.com',
        message: form.message,
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then((result) => {
      console.log('Email sent:', result.text);
      setIsLoading(false);
      setForm({ name: '', email: '', message: '' });
      console.log('Setting loading false after email sent');
    }).catch((err) => {
      console.error('Error sending email:', err);
      setIsLoading(false);
      console.log('Setting loading false after error');
    });
  };

  return (
    <section className='relative flex lg:flex-row flex-col max-container'
      onSubmit={handleSubmit}
    >
      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>
          Contact
        </h1>
        <form className='w-full flex flex-col gap-7 mt-14'>
          <label className='text-black-500 font-semibold'>
            Name
            <input 
            type='text' 
            name="name" 
            className='input' 
            placeholder='Enter Name' 
            required 
            value={form.name}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            />
          </label>
          <label className='text-black-500 font-semibold'>
            Email
            <input 
            type='email' 
            name="email" 
            className='input' 
            placeholder='john@gmail.com' 
            required 
            value={form.email}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            />
          </label>
          <label className='text-black-500 font-semibold'>
            Message
            <textarea 
            name="message" 
            rows={4}
            className='input' 
            placeholder='Send Message' 
            required 
            value={form.message}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            />
          </label>
          <button 
            type='submit' 
            className='btn'
            disabled={isLoading}
            onFocus={handleFocus}
            onBlur={handleBlur} 
            >
              {isLoading ? 'Loading...' : 'Send Message'}
            </button>
        </form>
      </div>
    </section>
  )
}

export default Contact