import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './contact.css';

function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send form data to the backend
      const response = await axios.post('http://localhost:8080/contact', {
        name,
        email,
        message,
      });

      if (response.status === 200) {
        toast.success(response.data); // Display success message from backend
      } else {
        toast.error('Failed to submit the form. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form: ', error);
      toast.error('An error occurred while submitting the form.');
    }

    // Clear form after submission
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="outer-container">
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
          hideProgressBar={false}
          theme="light"
        />
      </div>
    </div>
  );
}

export default ContactUs;