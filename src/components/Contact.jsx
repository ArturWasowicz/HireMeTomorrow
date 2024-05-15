// Import React Icons.............
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section id='Contact'>
      <div className="container contact-container">
        <div className="contact-info">
          <h4>Contact</h4>
          <a href="mailto:YourEmail">A.Wasowicz@gmx.de</a>
          <div className="socials">
            <p>
              I'm currently looking to join a cross-functional team that values improving people's lives
              through accessible design. or have a project in mind? Let's connect.
            </p>
            <a href=""><span><FaFacebook /></span></a>
            <a href="#"><span><FaInstagram /></span></a>
            <a href="#"><span><FaTwitter /></span></a>
            <a href="#"><span><FaGithub /></span></a>
          </div>


        </div>

        <div className="empty"></div>
      </div>
    </section>
  )
}
