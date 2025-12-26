
import Head from "next/head";
import { useRouter } from "next/router";
import RootLayout from "@/components/common/layout/RootLayout";
import BlogDetails1 from "@/components/blog/BlogDetails1";
import BlogRelated from "@/components/blog/BlogRelated";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";
import blogData from "@/data/blog.json";
import { useEffect, useState } from "react";

const BlogDetailsPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    if (slug) {
      const foundBlog = blogData.blogs.find((b) => b.slug === slug);
      setBlog(foundBlog);
    }
  }, [slug]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>{blog.title}</title>
        <meta name="description" content={blog.title} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header3" footer="footer3">
          <BlogDetails1 blog={blog} />
          <BlogRelated />
          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </>
  );
};

export default BlogDetailsPage;
