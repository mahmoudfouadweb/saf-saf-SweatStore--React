import  { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import logo from "../assets/small-img/logo-full-light.png";


const JoinForm = () => {
  
  const [isName, setIsName] = useState("");
  const [isEmail, setIsEmail] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    // EmailJS library
    emailjs
      .sendForm(
        "service_ieyf1y1",
        "template_efe0k4g",
        form.current,
        "WqDxqQBMKrCEXblsd"
      )
      .then(
        (result) => {
          console.log(result.text);

          console.log("success");
          setIsName("");
          setIsEmail("");
        },
        (error) => {
          console.log(error.text);
        }
      );
    console.log(e);
  };
  return (
    <>
      <img src={logo} alt="" className="join-us__logo" />

      <p className="join-us__mail-content">
        Join 50,000+ client and don't miss an event or a discount!
      </p>
      <form ref={form} onSubmit={sendEmail} className="join-us__form">
        <input
          type="text"
          name="from_name"
          value={isName}
          onChange={(e) => setIsName(e.currentTarget.value.toLowerCase())}
          className="join-us__form--name"
          placeholder="Your name here"
        />
        <input
          value={isEmail}
          onChange={(e) => setIsEmail(e.currentTarget.value.toLowerCase())}
          type="text"
          name="email"
          className="join-us__form--email"
          placeholder="Your e-mail here"
        />
        <input type="submit" value="Send" className="join-us__form--cta" />
      </form>
    </>
  );
};

export default JoinForm;
