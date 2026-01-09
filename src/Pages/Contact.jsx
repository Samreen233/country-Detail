import React from "react";

const Contact = () => {
  const handleFormSubmit = (formData) => {
    // console.log(formData.enteries())
    // for backened to get the data in the form of objects 
    const formInputData = object.formEnteries(formData.enteries());
    // console.log(formInputData);
  };
  return (
    <section className="section-contact">
      <h2 className="container-title">Contact Us</h2>
      <div className="contact-wrapper container">
        <form action="">
          <input
            type="text"
            className="form-control"
            required
            autoComplete="off"
            placeholder="Enter your Name"
            name="username"
          />
          <input
            type="email"
            className="form-control"
            required
            autoComplete="off"
            placeholder="Enter your Email"
            name="email"
          />
          <textarea
            className="form-control"
            rows="10"
            required
            autoComplete="off"
            placeholder="Enter your message"
            name="message"
          />
          <button type="submit" value="send">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
