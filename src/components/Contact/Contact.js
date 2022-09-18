import React, { useState } from "react";
import "./Contact.scss";
import TextField from "@mui/material/TextField";
function Contact() {
  const [user, setUser] = useState({
    fname: "",
    email: "",
    number: "",
    messege: "",
  });

  let name, value;
  const getUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUser({ ...user, [name]: value });
  };

  const submitData = async (e) => {
    e.preventDefault();
    const { fname, email, number, messege } = user;
    if (fname && email && number && messege) {
      const res = await fetch(
        "https://portfolio-contact-787-default-rtdb.firebaseio.com/userDara.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fname,
            email,
            number,
            messege,
          }),
        }
      );

      if (res) {
        setUser({
          fname: "",
          email: "",
          number: "",
          messege: "",
        });
        alert("Your data submitted");
      }
    } else {
      alert("fill the data");
    }
  };

  return (
    <div className="cr__contact-container section__padding" id="Contact">
      <div className="cr__contact-left-content">
        <h1>Get in Touch</h1>
        <h1>Contact me</h1>
        <div className="contact__details__subtittle">
          <p>
            Fill up the form and our Team will get back to you within 24 hours.
          </p>
        </div>
        <div className="contact__details__list">
          <li>+8801751552297</li>
          <li>coderrabbi@gmail.com</li>
          <li>8280,Barishal,Bangladesh</li>
        </div>
      </div>
      <div className="cr__contact-right-content">
        <form action="" method="POST">
          <div className="contact__name">
            <TextField
              id="filled-basic"
              label="Name"
              variant="filled"
              color="warning"
              type="text"
              name="fname"
              value={user.fname}
              onChange={getUserData}
              autoComplete="off"
              required
            />
          </div>
          <div className="email__phone">
            <TextField
              id="filled-basic"
              label="Email"
              variant="filled"
              color="warning"
              type="email"
              name="email"
              value={user.email}
              onChange={getUserData}
              autoComplete="off"
              required
            />

            <TextField
              id="standard-number"
              label="Number"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              variant="filled"
              color="warning"
              name="number"
              value={user.number}
              onChange={getUserData}
              autoComplete="off"
              required
            />
          </div>

          <div className="contact__textarea">
            <TextField
              id="filled-basic"
              label="Write Your Messege"
              variant="filled"
              color="warning"
              name="messege"
              value={user.messege}
              onChange={getUserData}
              multiline
              rows={4}
            />
          </div>

          <div className="contact__submit__button">
            <a href="contact">
              <button onClick={submitData}>Sent Messege</button>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
