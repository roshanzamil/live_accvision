
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import animationWordCome from "@/lib/utils/animationWordCome";

const BlogDetails1 = ({ blog }) => {
  const wordAnim = useRef();
  const wordAnim2 = useRef();
  useEffect(() => {
    animationWordCome(wordAnim.current);
    animationWordCome(wordAnim2.current);
  }, []);

  return (
    <>
      <section className="blog__detail">
        <div className="container g-0 line pt-140">
          <span className="line-3"></span>
          <div className="row">
            <div className="col-xxl-8 col-xl-10 offset-xxl-2 offset-xl-1">
              <div className="blog__detail-top">
                <h2
                  className="blog__detail-date animation__word_come"
                  ref={wordAnim}
                >
                  {blog.category} <span>{blog.date}</span>
                </h2>
                <h3
                  className="blog__detail-title animation__word_come"
                  ref={wordAnim2}
                >
                  {blog.title}
                </h3>
              </div>
            </div>
            <div className="col-xxl-12">
              <div className="blog__detail-thumb">
                <Image
                  priority
                  width={1280}
                  height={600}
                  style={{ width: "100%", height: "auto" }}
                  src={blog.image}
                  alt={blog.title}
                  data-speed="0.5"
                />
              </div>
            </div>
            <div className="col-xxl-8 col-xl-10 offset-xxl-2 offset-xl-1">
              <div className="blog__detail-content">
                <p>{blog.content.introduction}</p>
                {blog.content.points.map((point, index) => (
                  <div key={index}>
                    <h2>{point.title}</h2>
                    <p>{point.text}</p>
                  </div>
                ))}
                <p>{blog.content.conclusion}</p>
              </div>
              <div className="blog__detail-tags">
                <p className="sub-title-anim">
                  tags: <Link href="/blog">accounting</Link>,{" "}
                  <Link href="/blog">tax</Link>,
                  <Link href="/blog">business</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetails1;
