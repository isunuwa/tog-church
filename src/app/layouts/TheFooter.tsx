import LogoFull from "../../assets/svg/logo/logo-full-black.svg";
import Logo from "../../assets/svg/logo/logo-black.svg";

const TheFooter = () => {
  return (
    <footer id="footer" className="tg-footer">
      <div className="container footer-content">
        <div className="row footer-top">
          <div className="col-md-3">
            <a href="index.html" title="Home" className="footer-brand">
              <img src={LogoFull} alt="Logo" loading="lazy" />
              {/* <img src={Logo} alt="Logo" loading="lazy"></img> */}
            </a>
          </div>
          <div className="col-md-3">
            <div className="footer-block">
              <div className="footer-block_title">Connect</div>
              <a href="location.html" className="footer-block_link">
                Location
              </a>
              <a href="groups.html" className="footer-block_link">
                Groups
              </a>
              <a href="nextstep.html" className="footer-block_link">
                Next Steps
              </a>
            </div>
          </div>
          <div className="col-md-3">
            <div className="footer-block">
              <div className="footer-block_title">Ministries</div>
              <a href="kids.html" className="footer-block_link">
                Kids
              </a>
              <a href="youth.html" className="footer-block_link">
                Youth
              </a>
              <a href="women.html" className="footer-block_link">
                Women
              </a>
            </div>
          </div>
          <div className="col-md-3">
            <div className="footer-block">
              <div className="footer-block_title">Resources</div>
              <a href="gallery.html" className="footer-block_link">
                Gallery
              </a>
              <a href="contact.html" className="footer-block_link">
                Contact
              </a>
              <a href="blog.html" className="footer-block_link">
                Blog
              </a>
              <a href="loveis.html" className="footer-block_link">
                Love Is
              </a>
            </div>
          </div>
        </div>
        <div className="tg-divider sep-4"></div>
        <div className="footer-bottom row">
          <div className="col-md-6">
            <div className="footer-copywright">
              &copy; 2023 TG Church. All right reserved
            </div>
          </div>
          <div className="col-md-6">
            <div className="footer-socl">
              <a
                href="https://facebook.com/"
                target="_blank"
                className="footer-socl_link"
              >
                <i className="icon-facebook"></i>
              </a>
              <a
                href="https://instagram.com/"
                target="_blank"
                className="footer-socl_link"
              >
                <i className="icon-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default TheFooter;
