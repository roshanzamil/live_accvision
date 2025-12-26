
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Link from "next/link";
import Image from "next/image";
import animationCharCome from "@/lib/utils/animationCharCome";
import blogData from "@/data/blog.json";

gsap.registerPlugin(ScrollTrigger);

const Blog1 = () => {
  const charAnim = useRef();
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setBlogs(blogData.blogs);
  }, []);

  useEffect(() => {
    animationCharCome(charAnim.current);
    if (typeof window !== "undefined" && blogs.length > 0) {
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        gsap.set(".blog__animation .blog__item", { x: 50, opacity: 0 });

        if (device_width < 1023) {
          const blogList = gsap.utils.toArray(".blog__animation .blog__item");
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
          gsap.to(".blog__animation .blog__item", {
            scrollTrigger: {
              trigger: ".blog__animation .blog__item",
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
      <section className="blog__area-6 blog__animation">
        <div className="container g-0 line pt-110 pb-110">
          <span className="line-3"></span>
          <div className="row pb-130">
            <div className="col-xxl-8 col-xl-7 col-lg-6 col-md-6">
              <div className="sec-title-wrapper">
                <h2 className="sec-title-2 animation__char_come" ref={charAnim}>
                  Our latest <br />
                  Insights
                </h2>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-5 col-lg-6 col-md-6">
              <div className="blog__text">
                <p>
                  Read our blog for the latest perspectives on accounting, tax, and business strategy. We are passionate about making financial knowledge accessible to everyone.
                </p>
              </div>
            </div>
          </div>

          <div className="row reset-grid">
            {blogs.map((blog) => (
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4" key={blog.id}>
                <article className="blog__item">
                  <div className="blog__img-wrapper">
                    <Link href={`/blog/${blog.slug}`}>
                      <div className="img-box">
                        <Image
                          priority
                          width={440}
                          height={330}
                          className="image-box__item"
                          src={blog.image}
                          alt={blog.title}
                        />
                      </div>
                    </Link>
                  </div>
                  <h4 className="blog__meta">
                    <Link href="/category">{blog.category}</Link> . {blog.date}
                  </h4>
                  <h5>
                    <Link href={`/blog/${blog.slug}`} className="blog__title">
                      {blog.title}
                    </Link>
                  </h5>
                  <Link href={`/blog/${blog.slug}`} className="blog__btn">
                    Read More{" "}
                    <span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                  </Link>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog1;
