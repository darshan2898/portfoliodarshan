import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { BsPhone } from "react-icons/bs";

const ContactForm = () => {
  return (
    <section className="contact_form_section">
      <div className="contact_form_container container">
        <div className="left">
          <article>
            <div className="icon">
              <AiOutlineHome />
            </div>
            <div className="info">
              <h1>Ghatkopar, Mumbai</h1>
              <p>400 086</p>
            </div>
          </article>
          <article>
            <div className="icon">
              <BsPhone />
            </div>
            <div className="info">
              <h1>(+91) 9867581671</h1>
              <p>Mon to Sun 10am to 12am</p>
            </div>
          </article>
          <article>
            <div className="icon">
              <AiOutlineMail />
            </div>
            <div className="info">
              <h1>senkuchan2898@gmail.com</h1>
              <p>darshanahire15@gmail.com</p>
            </div>
          </article>
        </div>
        <div className="right">
          <form>
            <div className="titles">
              <input type="text" placeholder="enter your name" />
              <input type="email" placeholder="enter email address" />
              <input type="text" placeholder="enter subject" />
            </div>
            <div className="msg">
              <textarea
                name=""
                id=""
                cols="30"
                rows="7"
                placeholder="enter message"
              ></textarea>
            </div>
          </form>
        </div>
      </div>
      <div className="submit_btn container">
        <button>Send Message</button>
      </div>
    </section>
  );
};

export default ContactForm;
