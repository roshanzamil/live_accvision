
import animationCharCome from "@/lib/utils/animationCharCome";
import animationWordCome from "@/lib/utils/animationWordCome";
import { useEffect, useRef, useState } from "react";

const Contact1 = () => {
  const charAnim = useRef();
  const wordAnim = useRef();
  const [status, setStatus] = useState(null); // 'sending', 'success', 'error'

  useEffect(() => {
    animationCharCome(charAnim.current);
    animationWordCome(wordAnim.current);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('success');
        e.target.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <>
      <section className="contact__area-6">
        <div className="container g-0 line pt-120 pb-110">
          <span className="line-3"></span>
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="sec-title-wrapper">
                <h2 className="sec-title-2 animation__char_come" ref={charAnim}>
                  Get in Touch
                </h2>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="contact__text">
                <p>
                  We&apos;re here to help your business thrive. For any inquiries, or to schedule a consultation, please don&apos;t hesitate to reach out.
                </p>
              </div>
            </div>
          </div>
          <div className="row contact__btm">
            <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
              <div className="contact__info">
                <h3
                  className="sub-title-anim-top animation__word_come"
                  ref={wordAnim}
                >
                  Let&apos;s start a conversation.
                </h3>
                <ul>
                  <li>
                    <a href="tel:+971563506425">+971 56 350 6425</a>
                  </li>
                  <li>
                    <a href="mailto:info@accvisionaccounting.com">info@accvisionaccounting.com</a>
                  </li>
                  <li>
                    <span>
                      20th street, Deira - al murar, <br /> Dubai.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
              <div className="contact__form">
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-xxl-6 col-xl-6 col-12">
                      <input type="text" name="name" placeholder="Name *" required />
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-12">
                      <input type="email" name="email" placeholder="Email *" required />
                    </div>
                  </div>
                  <div className="row g-3">
                    <div className="col-xxl-6 col-xl-6 col-12">
                      <input type="tel" name="phone" placeholder="Phone" />
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-12">
                      <input
                        type="text"
                        name="subject"
                        placeholder="Subject *"
                        required
                      />
                    </div>
                  </div>
                  <div className="row g-3">
                    <div className="col-12">
                      <textarea
                        name="message"
                        placeholder="Messages *"
                        required
                      ></textarea>
                    </div>
                  </div>
                  <div className="row g-3">
                    <div className="col-12">
                      <div className="btn_wrapper">
                        <button 
                          className="wc-btn-primary btn-hover btn-item" 
                          type="submit"
                          disabled={status === 'sending'}
                        >
                          <span></span> {status === 'sending' ? 'Sending...' : 'Send'} <br />
                          Messages <i className="fa-solid fa-arrow-right"></i>
                        </button>
                      </div>
                      {status === 'success' && (
                        <p className="mt-3" style={{ color: '#325841', fontWeight: 'bold' }}>
                          Thank you! Your message has been sent successfully.
                        </p>
                      )}
                      {status === 'error' && (
                        <p className="mt-3 text-danger">
                          Oops! Something went wrong. Please try again later.
                        </p>
                      )}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact1;
