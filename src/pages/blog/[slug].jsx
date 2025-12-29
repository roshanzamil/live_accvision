
import Head from "next/head";
import { useRouter } from "next/router";
import RootLayout from "@/components/common/layout/RootLayout";
import Link from "next/link";
import Image from "next/image";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";
import blogData from "@/data/blog.json";
import { useEffect, useState } from "react";
import BlogDetails1 from "@/components/blog/BlogDetails1";

const BlogRelated = ({ blogs }) => {
  return (
    <div className="blog__related">
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <h2 className="blog__related-title">Related Posts</h2>
          </div>
        </div>
        <div className="row">
          {blogs.slice(0, 2).map((blog) => (
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6" key={blog.id}>
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
    </div>
  );
};


const BlogDetailsPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);

  useEffect(() => {
    if (slug) {
      const allBlogs = blogData.blogs;
      const foundBlog = allBlogs.find((b) => b.slug === slug);
      setBlog(foundBlog);

      if (foundBlog) {
        const related = allBlogs.filter((b) => b.id !== foundBlog.id);
        setRelatedBlogs(related);
      }
    }
  }, [slug]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>{blog.title}</title>
        <meta name="description" content={blog.content.introduction} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header1" footer="footer1">
          <BlogDetails1 blog={blog} />
          <BlogRelated blogs={relatedBlogs} />
          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </>
  );
};

export default BlogDetailsPage;
