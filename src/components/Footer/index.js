const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="container-footer">
          <nav>
            <a href="/">Terms and Conditions</a>
            <a href="/">Privacy Policy</a>
            <a href="/">Contact Us </a>
          </nav>
          <div className="social-media">
            <p>Follow us</p>
            <div className="social-media-icons">
              <a href="https://www.facebook.com/" target='_blank' rel="noreferrer">
                <span className="icon-facebook" />
              </a>
              <a href="https://www.twitter.com/" target='_blank' rel="noreferrer">
                <span className="icon-twitter" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;