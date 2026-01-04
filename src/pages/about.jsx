

import RootLayout from "@/components/common/layout/RootLayout";
import AboutCounter from "@/components/counter/AboutCounter";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";
import AboutHero from "@/components/hero/AboutHero";
import AboutStory from "@/components/story/AboutStory";
import Faq1 from "@/components/faq/Faq1";
import Head from "next/head";

const About = () => {
  return (
    <div>
      <Head>
        <title>About Accvision | Our Mission, Team, and Values</title>
        <meta name="description" content="Learn about Accvision's mission to provide financial clarity and expert support. Meet the dedicated team of professionals passionate about your business's success." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header1" footer="footer1">
          <AboutHero />
          <AboutStory />
          <AboutCounter />
          <Faq1 />
          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </div>
  );
};

export default About;
