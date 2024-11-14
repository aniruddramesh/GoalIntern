import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './contact.css'

function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form Submitted:', { name, email, message });

    // Clear form after submission
    setName('');
    setEmail('');
    setMessage('');
    toast.success("Thank you for your response!");
  };

  return (
    <div className='outer-container'>
    <div className="contact-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="submit-button">Submit</button>
      </form>

      <div className="contact-info">
        <p>Or reach us directly at:</p>
        <p>Email: contact@yourcompany.com</p>
        <p>Phone: (123) 456-7890</p>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar="false"
        theme="light"
      />
    </div>
    </div>
    
  );
}

export default ContactUs;
