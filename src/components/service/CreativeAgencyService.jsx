import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger, ScrollSmoother } from "@/plugins";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const CreativeAgencyService = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        let animation_services_7 = gsap.utils.toArray(
          ".animation_service_7 .service__item-7"
        );
        gsap.set(animation_services_7, {
          opacity: 0,
          x: -30,
        });

        if (animation_services_7) {
          if (device_width < 1023) {
            animation_services_7.forEach((item, i) => {
              gsap.to(item, {
                scrollTrigger: {
                  trigger: item,
                  start: "top center+=200",
                  markers: false,
                },
                opacity: 1,
                x: -0,
                ease: "power2.out",
                duration: 2,
                stagger: {
                  each: 0.4,
                },
              });
            });
          } else {
            gsap.to(".animation_service_7 .service__item-7", {
              scrollTrigger: {
                trigger: ".animation_service_7",
                start: "top center+=200",
                markers: false,
              },
              opacity: 1,
              x: 0,
              ease: "power2.out",
              duration: 2,
              stagger: {
                each: 0.4,
              },
            });
          }
        }
      });
      return () => tHero.revert();
    }
  }, []);
  return (
    <>
      <section className="service__area-7 pt-130">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="service__items-7 animation_service_7">
                <div className="service__item-7">
                  <h3 className="service__title-7">
                    Accounting & <span>Bookkeeping</span>
                  </h3>
                  <p>
                    We provide meticulous accounting and bookkeeping to ensure your financials are accurate and up-to-date.
                  </p>
                  <ul>
                    <li>+ Financial Statements</li>
                    <li>+ General Ledger</li>
                    <li>+ Payroll</li>
                  </ul>
                </div>
                <div className="service__item-7">
                  <h3 className="service__title-7">
                    Tax <span>Services</span>{" "}
                  </h3>
                  <p>
                    Our expert tax services help you navigate complex tax laws and minimize your tax liabilities.
                  </p>
                  <ul>
                    <li>+ Tax Planning</li>
                    <li>+ Tax Preparation</li>
                    <li>+ IRS Representation</li>
                  </ul>
                </div>
                <div className="service__item-7">
                  <h3 className="service__title-7">
                    Business <span>Setup</span>{" "}
                  </h3>
                  <p>
                    We assist with business registration and setup to get your new venture off to a strong start.
                  </p>
                  <ul>
                    <li>+ Entity Selection</li>
                    <li>+ Registration</li>
                    <li>+ Licensing</li>
                  </ul>
                </div>
                <div className="service__item-7">
                  <h3 className="service__title-7">
                    Trade License <span>Renewal</span>{" "}
                  </h3>
                  <p>
                    We handle the annual renewal of your trade license, ensuring your business remains compliant.
                  </p>
                  <ul>
                    <li>+ Timely Renewals</li>
                    <li>+ Documentation</li>
                    <li>+ Compliance</li>
                  </ul>
                </div>
                <div className="service__item-7">
                  <h3 className="service__title-7">
                    Business <span>Support</span>
                  </h3>
                  <p>
                    Streamline your operations with our business support services and internal control implementation.
                  </p>
                  <ul>
                    <li>+ Process Improvement</li>
                    <li>+ Internal Controls</li>
                    <li>+ Strategic Planning</li>
                  </ul>
                </div>
                <div className="service__item-7">
                  <h3 className="service__title-7">
                    Financial<span>Advisory</span>{" "}
                  </h3>
                  <p>
                    Our advisory services provide the insights you need to achieve your financial objectives and grow your business.
                  </p>
                  <ul>
                    <li>+ Budgeting & Forecasting</li>
                    <li>+ Financial Analysis</li>
                    <li>+ Strategic Advice</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CreativeAgencyService;
