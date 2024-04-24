import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
// import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "8a56a060-7346-4a3d-b1d2-0b8df865abbd");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact" id="contact">
      <div className="contact-col">
        <h3>
          Send us a message
          <img src={msg_icon} alt="" />
        </h3>
        <p>
          If you have any inquiries or wish to discuss potential collaborations,
          please feel free to reach out to me by completing the form provided
          below. I look forward to connecting with you.
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="" />
            priyalk2002@gmail.com
          </li>
          {/* <li>
            <img src={phone_icon} alt="" />
            7338789078
          </li> */}
          <li>
            <img src={location_icon} alt="" />
            Ambattur,
            <br />
            Chennai-77
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label>Phone Number</label>
          <input
            type="number"
            name="phone"
            placeholder="Enter your mobile"
            required
          />
          <label>Write your message here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Submit <img src={white_arrow} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
