import Logo from "../../assets/svg/logo/logo.svg";

const TheHeader = () => {
  return (
    <header id="header" className="tg-nav">
      <div className="container nav-content">
        <div className="nav-logo">
          <a
            href="index.html"
            title="Home"
            className="c-nav-logo-link w-inline-block"
          >
            <img src={Logo} loading="lazy" alt="Logo" />
          </a>
        </div>
        <div className="nav-items">
          <div className="nav-menu-btn-wrap burger-box">
            <div className="burger-inner nav-menu-icon-doubleLineHamburger">
              <div className="top-bun"></div>
              <div className="patty"></div>
              <div className="bottom-bun"></div>
            </div>
          </div>
          <div className="nav-menu-overlay">
            <div className="nav-menu-content">
              <div className="tg-menu-links nav-menu-links">
                <div className="tg-menu-item">
                  <a
                    href="location.html"
                    className="menu-item-link"
                    title="Nav Link"
                  >
                    <span className="menu-item-text">Locations</span>
                  </a>
                </div>
                <div className="tg-menu-item">
                  <a
                    href="groups.html"
                    className="menu-item-link"
                    title="Nav Link"
                  >
                    <span className="menu-item-text">Groups</span>
                  </a>
                </div>
                <div className="tg-menu-item">
                  <a
                    href="aboutus.html"
                    className="menu-item-link"
                    title="Nav Link"
                  >
                    <span className="menu-item-text">About Us</span>
                  </a>
                </div>
                <div className="tg-menu-item">
                  <a
                    href="gallery.html"
                    className="menu-item-link"
                    title="Nav Link"
                  >
                    <span className="menu-item-text">Gallery</span>
                  </a>
                </div>
              </div>
              <div className="tg-menu-socl-links mt-10">
                <div className="footer-socl">
                  <a href="" target="_blank" className="footer-socl_link">
                    <img
                      src="assets/svgs/socials/discord.svg"
                      alt="Discord Icon"
                      loading="lazy"
                    />
                  </a>
                  <a href="" target="_blank" className="footer-socl_link">
                    <img
                      src="assets/svgs/socials/podcast.svg"
                      alt="Podcast Icon"
                      loading="lazy"
                    />
                  </a>
                  <a href="" target="_blank" className="footer-socl_link">
                    <img
                      src="assets/svgs/socials/facebook.svg"
                      alt="Podcast Icon"
                      loading="lazy"
                    />
                  </a>
                  <a href="" target="_blank" className="footer-socl_link">
                    <img
                      src="assets/svgs/socials/instagram.svg"
                      alt="Podcast Icon"
                      loading="lazy"
                    />
                  </a>
                </div>
              </div>
            </div>
            {/* background */}
            <div className="nav-menu-overlay-bg">
              <div className="nav-menu-bg-overlay"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TheHeader;
