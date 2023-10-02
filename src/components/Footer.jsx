import { SocialIcon } from "react-social-icons";

const Footer = () => {
  var today = new Date();
  return (
    <>
      <footer className="footer">
        <div className="footer-wrapper">
          <div className="footer-legal-info">
            <div className="footer-section">
              <h3>Legal Information</h3>
              <ul>
                <li>
                  <a href="/terms">Terms of Use</a>
                </li>
                <li>
                  <a href="/privacy">Privacy Policy</a>
                </li>
                <li>
                  <a href="/cookies">Cookies Policy</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-connect">
            <div className="footer-section">
              <h3>Connect with Us</h3>
              <ul>
                <div style={{ padding: "10px", display: "inline" }}>
                  <SocialIcon
                    style={{ height: "40px", width: "40px" }}
                    url="https://instagram.com"
                  />
                </div>
                <div style={{ padding: "10px", display: "inline" }}>
                  <SocialIcon
                    style={{ height: "40px", width: "40px" }}
                    url="https://facebook.com"
                  />
                </div>
                <div style={{ padding: "10px", display: "inline" }}>
                  <SocialIcon
                    style={{ height: "40px", width: "40px" }}
                    url="https://twitter.com"
                  />
                </div>
                <div style={{ padding: "10px", display: "inline" }}>
                  <SocialIcon
                    style={{ height: "40px", width: "40px" }}
                    url="https://whatsapp.com"
                  />
                </div>
              </ul>
            </div>
          </div>
          <div className="footer-company-info">
            <div className="footer-section">
              <h3>Company Information</h3>
              <ul>
                <li>
                  <a href="/about">Our Story</a>
                </li>
                <li>
                  <a href="/blog">Blog</a>
                </li>
                <li>
                  <a href="/careers">Careers</a>
                </li>
                <li>
                  <a href="/testimonials">Testimonials</a>
                </li>
                <li>
                  <a href="/press">Press</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-cities">
          <p>
            CITIES WE DELIVER TO: Mumbai, Pune, Gurugram, Bengaluru, Hyderabad,
            Chennai, Delhi, Noida, Ghaziabad, Faridabad
          </p>
        </div>
        <div className="footer-copyright">
          &copy; {today.getFullYear()} RentalInc. All Rights Reserved
        </div>
      </footer>
    </>
  );
};

export default Footer;
