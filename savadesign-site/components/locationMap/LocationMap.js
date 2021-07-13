import classes from "./LocationMap.module.scss";
import { useState } from "react";
import { validateForm } from "../../middleware/validateForm";
const LocationMap = ({ displayMessageBox }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    const usersEmail = {
      name,
      email,
      phoneNumber,
      message,
    };
    const validation = await validateForm(name, email, message);

    if (validation.errorMessage) {
      displayMessageBox(validation.errorMessage.message);
      return;
    }

    const response = await fetch("/api/email", {
      method: "post",
      body: JSON.stringify({
        usersEmail: usersEmail,
      }),
    });
    const data = await response.json();
    if (data.error) {
      displayMessageBox(data.error);
    } else {
      displayMessageBox(data.msg);
    }
  };

  return (
    <div className={classes.container}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2822.6981505449735!2d19.609222315754636!3d44.97012687429468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475ba527c16bb297%3A0x5345bea30c297612!2sSvetog%20Dimitrija%2019%2C%20Sremska%20Mitrovica%20320202!5e0!3m2!1sen!2srs!4v1626178758446!5m2!1sen!2srs"
        style={{ border: 0, width: "100%", height: 500 }}
        loading="lazy"
      ></iframe>
      <div className={classes.contactForm}>
        <h4>Send Us a Message</h4>
        <p>We are here to assist you.</p>
        <form>
          <div className={classes.inputGroup}>
            <p>
              Name <span>*</span>
            </p>
            <input
              type="text"
              name="name"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className={classes.inputGroup}>
            <p>
              Email <span>*</span>
            </p>
            <input
              type="email"
              name="email"
              placeholder="johndoe@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={classes.inputGroup}>
            <p>Phone Number</p>
            <input
              type="text"
              name="phoneNumber"
              placeholder="+32494322456"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className={classes.inputGroup}>
            <p>
              Message <span>*</span>
            </p>
            <textarea
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div className={classes.inputGroup}>
            <button onClick={handleSubmit} type="button">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LocationMap;
