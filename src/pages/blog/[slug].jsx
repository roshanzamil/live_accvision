
import Head from "next/head";
import { useRouter } from "next/router";
import RootLayout from "@/components/common/layout/RootLayout";
import Link from "next/link";
import Image from "next/image";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";
import blogData from "@/data/blog.json";
import { useEffect, useState } from "react";

const BlogDetailsContent = ({ blog }) => {
  if (!blog) {
    return null;
  }
  return (
    <section>
      <div className="blog-details-container">
        <div className="blog-header">
          <h1 className="blog-title">{blog.title}</h1>
          <p className="blog-meta">
            <span>{blog.date}</span> | <span>{blog.category}</span>
          </p>
        </div>
        <div className="blog-image-wrapper">
          <Image
            src={blog.image}
            alt={blog.title}
            width={650}
            height={430}
            style={{ width: '100%', maxWidth: '650px', height: 'auto', objectFit: 'cover' }}
          />
        </div>
        <div className="blog-body">
          <p>{blog.content.introduction}</p>
          {blog.content.points.map((point, index) => (
            <div key={index}>
              <h2>{point.title}</h2>
              <p>{point.text}</p>
            </div>
          ))}
          <p>{blog.content.conclusion}</p>
        </div>
      </div>
      <style jsx>{`
        .blog-details-container {
          max-width: 850px;
          margin: 0 auto;
          padding: 110px 15px;
          color: #121212;
        }
        .blog-header {
          margin-bottom: 30px;
          text-align: left;
        }
        .blog-title {
          font-size: 42px;
          font-weight: 700;
          margin-bottom: 20px;
          line-height: 1.2;
        }
        .blog-meta {
          font-size: 16px;
          color: #666;
        }
        .blog-image-wrapper {
          margin-bottom: 40px;
        }
        .blog-body {
          font-size: 18px;
          line-height: 1.7;
        }
        .blog-body h2 {
          font-size: 28px;
          font-weight: 600;
          margin-top: 40px;
          margin-bottom: 15px;
        }
        .blog-body p {
          margin-bottom: 20px;
        }
        body.dark .blog-details-container {
            color: #f0f0f0;
        }
        body.dark .blog-meta {
            color: #a0a0a0;
        }
      `}</style>
    </section>
  );
};


const BlogRelated = ({ blogs }) => {
  return (
    <div className="blog__related">
      <div className="container">
        <div className="row pb-130">
          <div className="col-xxl-12">
            <h2 className="blog__related-title">Related Posts</h2>
          </div>
        </div>
        <div className="row">
          {blogs.slice(0, 3).map((blog) => (
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6" key={blog.id}>
              <article className="blog__item">
                <div className="blog__img-wrapper">
                  <Link href={`/blog/${blog.slug}`}>
                      <Image
                        priority
                        width={440}
                        height={330}
                        src={blog.image}
                        alt={blog.title}
                        style={{width: '100%', height: 'auto'}}
                      />
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
          <BlogDetailsContent blog={blog} />
          <BlogRelated blogs={relatedBlogs} />
          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </>
  );
};

export default BlogDetailsPage;
