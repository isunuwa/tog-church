import ChurchHighlight from "../../assets/gif/raining-village.gif";

const TheBody = () => {
  return (
    <main className="tg-main" role="main">
      <div className="tg-hero">
        <div className="page-section dark-theme tg-section hero-welcome vertical-alignment--middle">
          <div className="container">
            <div className="row content-wrapper">
              <div className="col-md-10 mx-auto tag-h2 content tg-welcome">
                <span className="tag-thin">Welcome to</span>
                <h1 className="title">
                  Tabernacle of Grace <span className="tag-thin">Church.</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
        {/* video section */}
        <div className="hero-video">
          <div className="container py-100">
            <div className="pt-50">
              <a href="#about" className="hero-link-1">
                <i className="icon-arrow-down"></i>
              </a>
              <img
                src={ChurchHighlight}
                loading="lazy"
                alt="TG Church Intro Video"
                className="w-100 hero-video_item"
              />
            </div>
          </div>
        </div>
      </div>

      {/* about */}
      <div id="about">
        <div className="wave-wrapper">
          {/* wave */}
          <svg viewBox="0 0 120 28" fill="#0f0e17">
            <defs>
              <path
                id="wave"
                d="M 0,10 C 30,10 30,15 60,15 90,15 90,10 120,10 150,10 150,15 180,15 210,15 210,10 240,10 v 28 h -240 z"
              />
            </defs>
            <use
              id="wave1"
              className="wave tg-wave"
              xlinkHref="#wave"
              x="0"
              y="1"
            />
          </svg>
        </div>

        <div className="about-section dark-theme tg-section">
          <div className="container about-content-wrapper">
            <div className="row">
              <div className="quote col-md-10 mx-auto mb-10">
                <div className="quote-content col-md-9 mx-auto mb-5">
                  <p className="quote-text text-center">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Inventore soluta magnam natus tenetur rem cupiditate!
                  </p>
                  <span className="d-block text-center tag-light quote-ref">
                    Matthew 1: 1 - 2
                  </span>
                </div>
              </div>
              {/* section separator */}
              <div className="whoarewe py-100 mb-10">
                <div className="col-md-8 mx-auto mb-5">
                  <span className="tag-h1 section-heading tag-bold text-center d-block">
                    WE <i className="tag-light tag-italic">ARE</i>
                  </span>
                  <p className="whoarewe-info mx-auto text-center">
                    The kind of people who believe a life God-designed and
                    God-inspired.The kind of people who believe in the power of
                    the local Church.
                  </p>
                </div>

                <div className="col-md-10 mx-auto mb-5">
                  <div className="row glass-card row-flex justify-content-between">
                    <div className="col-md-4">
                      <div className="card h-100">
                        <div className="card-body">
                          <p className="card-text">
                            Not defined by color, creed, or background, but
                            defined by a passion for God, for life, and for
                            people.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="card h-100">
                        <div className="card-body">
                          <p className="card-text">
                            Not defined by color, creed, or background, but
                            defined by a passion for God, for life, and for
                            people.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="card h-100">
                        <div className="card-body">
                          <p className="card-text">
                            Not defined by color, creed, or background, but
                            defined by a passion for God, for life, and for
                            people.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* pastors */}
      <div id="pastors">
        <div className="pastor-section tg-section p-10">
          <div className="container">
            <div className="mb-5">
              <span className="tag-h1 section-heading text-center d-block">
                Our <i className="tag-light">Pastors</i>
              </span>
            </div>
            <div className="row justify-content-around pastor-wrapper pt-2">
              <div className="col-md-4 gallery-stack-wrapper">
                <div className="stack">
                  <div className="gallery-card img-gray-0">
                    <a href="profile.html" className="stack-link"></a>
                    <div className="image">
                      {/* Place image here */}
                      <img
                        src="assets/images/ps/ps-nabin.jpg"
                        alt="pastor image"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 gallery-stack-wrapper">
                <div className="stack">
                  <div className="gallery-card img-gray-0">
                    <a href="profile.html" className="stack-link"></a>
                    <div className="image">
                      {/* Place image here */}
                      <img
                        src="assets/images/ps/ps-bikram.png"
                        alt="pastor image"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 gallery-stack-wrapper">
                <div className="stack">
                  <div className="gallery-card img-gray-0">
                    <div className="image">
                      {/* Place image here */}
                      <img
                        src="assets/images/ps/ps-surya.jpg"
                        alt="pastor image"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 gallery-stack-wrapper">
                <div className="stack">
                  <div className="gallery-card img-gray-0">
                    <div className="image">
                      {/* Place image here */}
                      <img
                        src="assets/images/ps/ps-mahan.jpg"
                        alt="pastor image"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 gallery-stack-wrapper">
                <div className="stack">
                  <div className="gallery-card img-gray-0">
                    <div className="image">
                      {/* Place image here */}
                      <img
                        src="assets/images/ps/ps-prem.png"
                        alt="pastor image"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 gallery-stack-wrapper">
                <div className="stack">
                  <div className="gallery-card img-gray-0">
                    <div className="image">
                      {/* Place image here */}
                      <img
                        src="assets/images/ps/ps-ezekiel.jpg"
                        alt="pastor image"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* cta */}
      <div id="cta">
        <div className="cta-section dark-theme tg-section py-5">
          <div className="container">
            <div className="row cta-wrapper py-5">
              <div className="col-md-10 mx-auto">
                <div className="row">
                  <div className="col-md-6">
                    <div className="tag-h3 mb-2 tag-bold">Have Questions?</div>
                    <div className="tag-thin">
                      We Would Love To Answer Them!
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mt-4">
                      <div className="d-flex form-input form-input_v2 input-offset_border tg-btn_cta tg-btn_large tg-btn_white">
                        <input
                          type="email"
                          className="tg-input tg-input-v2"
                          placeholder="eg: johndoe@gmail.com"
                        />
                        <div className="btn btn-icon bg-white">
                          <img src="assets/svgs/icons/arrow-right.svg" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TheBody;
