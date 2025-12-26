
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Link from "next/link.js";
import Image from "next/image.js";
import blogData from "@/data/blog.json";

gsap.registerPlugin(ScrollTrigger);

const DigitalMarketingBlog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setBlogs(blogData.blogs.slice(0, 2));
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && blogs.length > 0) {
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        gsap.set(".blog__animation .blog__item-3", { x: 50, opacity: 0 });

        if (device_width < 1023) {
          const blogList = gsap.utils.toArray(".blog__animation .blog__item-3");
          blogList.forEach((item, i) => {
            let blogTl = gsap.timeline({
              scrollTrigger: {
                trigger: item,
                start: "top center+=200",
              },
            });
            blogTl.to(item, {
              x: 0,
              opacity: 1,
              ease: "power2.out",
              duration: 1.5,
            });
          });
        } else {
          gsap.to(".blog__animation .blog__item-3", {
            scrollTrigger: {
              trigger: ".blog__animation .blog__item-3",
              start: "top center+=300",
              markers: false,
            },
            x: 0,
            opacity: 1,
            ease: "power2.out",
            duration: 2,
            stagger: {
              each: 0.3,
            },
          });
        }
      });
      return () => tHero.revert();
    }
  }, [blogs]);
  return (
    <>
      <section className="blog__area-3 pb-140 blog__animation">
        <div className="container">
          <div className="row ">
            <div className="col-xxl-12">
              <div className="sec-title-wrapper text-anim pt-130">
                <h2 className="sec-sub-title">Recent Blog</h2>
                <h3 className="sec-title title-anim">
                  Accounting & Tax <br />
                  Insights
                </h3>
                <p>
                  Read our blog for the latest perspectives on accounting, tax, and business strategy. We are passionate about making financial knowledge accessible to everyone.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            {blogs.map((blog) => (
              <div className="col-xxl-6 col-xl-6 col-lg-6" key={blog.id}>
                <article className="blog__item-3">
                  <div className="blog__img-wrapper-3">
                    <Link href={`/blog/${blog.slug}`}>
                      <div className="img-box">
                        <Image
                          priority
                          width={580}
                          height={430}
                          className="image-box__item"
                          src={blog.image}
                          alt={blog.title}
                        />
                      </div>
                    </Link>
                  </div>
                  <div className="blog__info-3">
                    <h4 className="blog__meta">
                      <Link href="/category">{blog.category}</Link> . {blog.date}
                    </h4>
                    <h5>
                      <Link href={`/blog/${blog.slug}`} className="blog__title-3">
                        {blog.title}
                      </Link>
                    </h5>
                    <Link href={`/blog/${blog.slug}`} className="blog__btn">
                      Read More{" "}
                      <span>
                        <i className="fa-solid fa-arrow-right"></i>
                      </span>
                    </Link>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalMarketingBlog;
