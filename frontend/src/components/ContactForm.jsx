import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      const response = await fetch("https://portfolio-full-stack-0n9m.onrender.com/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus(data.message || "Failed to send message");
      }
    } catch (error) {
      setStatus("Error: " + error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className='contact-form'>
        <h2 id='contact'>Contact Me</h2>
        <div>
          <label htmlFor="name">Name: </label>
          <input type="text" className='form-input' id="name" name="name" placeholder='Enter your name'
            value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" className='form-input' id="email" name="email" placeholder='Enter your email'
            value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="message">Message: </label>
          <textarea className='form-input' id="message" name="message" placeholder='Enter your message'
            value={formData.message} onChange={handleChange} required></textarea>
        </div>
        <button type="submit" className='form-button'>Send</button>
        <p>{status}</p>
      </form>
    </div>
  );
};

export default ContactForm;
