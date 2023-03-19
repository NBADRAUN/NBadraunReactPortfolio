import { useRef } from "react";
import emailjs from "@emailjs/browser";

const styles = {
  content: {
    marginLeft: "30%",
    marginRight: "30%",
    padding: "10px",
    textAlign: "center",
    fontFamily: "Tahoma, Verdana, sans-serif",
    background: "black",
    marginTop: "10px",
    display: "flex",
    flexDirection: "column",
    fontSize: "20px",
    color: "white",
  },
  form: {
    padding: "25px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
  },
};

function Form() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pw5vd3o",
        "template_glxql3a",
        form.current,
        "1KgGobVPyMrKQ2dzL"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section style={styles.content}>
      <div>
        <h2> Contact Me</h2>
        <form ref={form} onSubmit={sendEmail} style={styles.form}>
          <input
            type="text"
            placeholder="Full Name"
            name="user_name"
            required
          />
          <input type="email" placeholder="Email" name="user_email" required />
          <input type="text" placeholder="Subject" name="subject" required />
          <textarea name="message" cols="30" rows="10"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Form;
