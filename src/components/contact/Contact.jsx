// Import React Icons.............
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import HoverDevCards from "./EmailForm";
import Footer from "./Footer";

export default function Contact() {
  return (
    <section>
      <div className="container contact-container">
        <h4 id='Contact'>Contact</h4>
        <div className="socials">
          <p>
            <a href=""><span><FaFacebook /></span></a>
            <a href="#"><span><FaInstagram /></span></a>
            <a href="#"><span><FaTwitter /></span></a>
            <a href="#"><span><FaGithub /></span></a>
          </p>
        </div>
        <div>
          <div className="contact-info"><HoverDevCards /></div>

          <Footer />
        </div>
      </div>
    </section>
  )
}
