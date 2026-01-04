
import animationCharCome from "@/lib/utils/animationCharCome";
import { useEffect, useRef } from "react";
import { Accordion } from "react-bootstrap";

const Faq1 = () => {
  const charAnim = useRef();
  useEffect(() => {
    animationCharCome(charAnim.current);
  }, []);
  return (
    <>
      <section className="faq__area-6">
        <div className="container g-0 line pb-140">
          <div className="line-3"></div>
          <div className="row">
            <div className="col-xxl-12">
              <div className="sec-title-wrapper">
                <h2 className="sec-title-2 animation__char_come" ref={charAnim}>
                  FAQ
                </h2>
                <p className="">
                  Frequently asked questions to help you understand our services.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xxl-12">
              <div className="faq__list-6">
                <Accordion
                  defaultActiveKey="0"
                  className="accordion"
                  id="accordionExample"
                >
                  <Accordion.Item eventKey="0" className="accordion-item">
                    <Accordion.Header
                      className="accordion-header"
                      id="headingOne"
                    >
                      What services do you offer?
                    </Accordion.Header>

                    <Accordion.Body className="accordion-body">
                      <p>
                        We offer a comprehensive suite of financial services including accounting and bookkeeping, tax planning and preparation, business setup, trade license renewal, and business support services. Our goal is to be your one-stop-shop for all your business&apos;s financial needs.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="1" className="accordion-item">
                    <Accordion.Header
                      className="accordion-header"
                      id="headingTwo"
                    >
                      What is your pricing structure?
                    </Accordion.Header>

                    <Accordion.Body className="accordion-body">
                      <p>
                        Our pricing is tailored to the specific needs of your business. We offer a variety of packages, from monthly subscriptions for ongoing services to one-time fees for specific projects. Contact us for a custom quote that aligns with your budget and requirements.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="2" className="accordion-item">
                    <Accordion.Header
                      className="accordion-header"
                      id="headingThree"
                    >
                      Who are your typical clients?
                    </Accordion.Header>

                    <Accordion.Body className="accordion-body">
                      <p>
                        We work with a diverse range of clients, from startups and small businesses to established enterprises across various industries. Our expertise is adaptable to any business looking to strengthen its financial operations and achieve sustainable growth.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="3" className="accordion-item">
                    <Accordion.Header
                      className="accordion-header"
                      id="headingFour"
                    >
                      How do you ensure data security?
                    </Accordion.Header>

                    <Accordion.Body className="accordion-body">
                      <p>
                        We take data security very seriously. We use industry-leading encryption and security protocols to protect your financial information. Our team is trained in best practices for confidentiality and data protection to ensure your information is always safe.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="4" className="accordion-item">
                    <Accordion.Header
                      className="accordion-header"
                      id="headingFive"
                    >
                      How can I get started with Accvision?
                    </Accordion.Header>

                    <Accordion.Body className="accordion-body">
                      <p>
                        Getting started is easy! Simply reach out to us through our contact page to schedule a free consultation. We&apos;ll discuss your business needs, answer your questions, and create a customized plan to help you achieve your financial goals.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq1;
