import React from 'react'
import './Contact.css'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'


const Contact = () => {

const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "6f9f2d7d-c2c1-44c2-8a6e-d061df7df94f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
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
    <>
    <div className="contacttitle">
        <h3>contact us</h3>
        <h1>get in touch</h1>
        </div>
    
    <div className='contact'>

        <div className="contact-col1">
        <h3>send us message:</h3>
        <p>
          "Reach out to us for information regarding admissions, campus facilities, or technical support, 
          and we will get back to you shortly."<br />
          "We value your feedback and suggestions as we strive to maintain the highest standards of excellence on our campus.
        </p>
        <ul>
            <li> <img src={mail_icon} alt="" />contact@iitmadras1212.com</li>
            <li> <img src={phone_icon} alt="" />+9124759353594</li>
            <li> <img src={location_icon} alt="" />sadashiv peth,bavdhan <br /> 411041 madras</li>
        </ul>
        </div>
        <div className="contact-col1">
            <form onSubmit={onSubmit}>
                <label>Your name</label>
                <input type="text" name='name' required placeholder='enter your name'/>
                <label>phone number</label>
                <input type="tel" name='phone' placeholder='enter your number' required/>
                                <label>write your message here</label>
                                <textarea name="message" rows="6" placeholder='enter your message' required></textarea>
<button type='submit' className='btn submit-btn'>submit</button>
            </form> 
            <span>{result}</span>
        </div>
    </div>
    </>
  )
}

export default Contact