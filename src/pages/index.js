import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import DigitalMarketingHero from "@/components/hero/DigitalMarketingHero";
import DigitalMarketingAbout from "@/components/about/DigitalMarketingAbout";
import DigitalMarketingTestimonial from "@/components/testimonial/DigitalMarketingTestimonial";
import DigitalMarketingWorkflow from "@/components/workflow/DigitalMarketingWorkflow";
import DigitalMarketingBlog from "@/components/blog/DigitalMarketingBlog";
import CreativeAgencyService from "@/components/service/CreativeAgencyService";

export default function DigitalMarketing() {
  return (
    <div>
      <Head>
        <title>Accvision</title>
        <meta name="description" content="Accvision - Accounting Software" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header1" footer="footer1">
          <DigitalMarketingHero />
          <DigitalMarketingAbout />
          <CreativeAgencyService />
          <DigitalMarketingTestimonial />
          <DigitalMarketingWorkflow />
          <DigitalMarketingBlog />
        </RootLayout>
      </main>
    </div>
  );
}
