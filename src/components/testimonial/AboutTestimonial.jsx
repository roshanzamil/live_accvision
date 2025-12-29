
import { FreeMode, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/free-mode";

const AboutTestimonial = () => {
  return (
    <>
      <section className="testimonial__area-2">
        <div className="container g-0 line pb-140">
          <span className="line-3"></span>

          <div className="row g-0">
            <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
              <div className="testimonial__video">
                <video autoPlay muted loop>
                  <source src="assets/video/testimonial.mp4" type="video/mp4" />
                </video>
              </div>
            </div>

            <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
              <div className="testimonial__slider-wrapper-2">
                <div className="testimonial__slider">
                  <Swiper
                    modules={[FreeMode, Navigation]}
                    spaceBetween={0}
                    slidesPerView={1}
                    freeMode={true}
                    loop={true}
                    speed={2000}
                    navigation={{
                      nextEl: ".next-button",
                      prevEl: ".prev-button",
                    }}
                  >
                    <SwiperSlide>
                      <div className="testimonial__slide">
                        <div className="testimonial__inner-2">
                          <h2 className="testimonial__title-2">
                            A True Partner in Success
                          </h2>
                          <p className="testimonial__text-2">
                            Accvision transformed our financial operations. Their expertise and dedication are unmatched. They are a true partner in our success.
                          </p>
                          <h3 className="testimonial__author">Roshan</h3>
                          <h4 className="testimonial__role">Founder, BroCrypt</h4>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide className="swiper-slide ">
                      <div className="testimonial__slide">
                        <div className="testimonial__inner-2">
                          <h2 className="testimonial__title-2">
                            Strategic Tax Savings
                          </h2>
                          <p className="testimonial__text-2">
                            Tax planning was always a major source of stress for our company. Accvision's strategic advice not only made the process painless but also identified significant savings we had been missing for years. Their expertise is truly top-tier.
                          </p>
                          <h3 className="testimonial__author">Michael Rodriguez</h3>
                          <h4 className="testimonial__role">Director, R&D Innovations Inc.</h4>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="testimonial__slide">
                        <div className="testimonial__inner-2">
                          <h2 className="testimonial__title-2">
                            Effortless Business Setup
                          </h2>
                          <p className="testimonial__text-2">
                            Starting my gallery felt like navigating a maze of paperwork. Accvision handled our entire business setup, from registration to licensing, with incredible efficiency. They took the complexity out of the process, letting me focus on the art.
                          </p>
                          <h3 className="testimonial__author">Emily Davis</h3>
                          <h4 className="testimonial__role">Owner, Artisan's Gallery</h4>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>

                <div className="testimonial__pagination">
                  <div style={{ cursor: "pointer" }} className="prev-button">
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>
                  <div style={{ cursor: "pointer" }} className="next-button">
                    <i className="fa-solid fa-arrow-left"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutTestimonial;
