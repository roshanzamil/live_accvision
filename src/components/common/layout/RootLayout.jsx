import { useEffect, useState } from "react";
import allNavData from "../../../data/navData.json";
import Preloader from "@/components/preloader/Preloader";
import CommonAnimation from "../CommonAnimation";
import ScrollSmootherComponents from "../ScrollSmootherComponents";
import ScrollTop from "../ScrollTop";
import Header1 from "@/components/header/Header1";
import Footer1 from "@/components/footer/Footer1";

const HeaderContent = ({ header, navData }) => {
  if (header == "header1") {
    return <Header1 navData={navData} />;
  } else if (header == "none") {
    return "";
  } else {
    return <Header1 navData={navData} />;
  }
};
const FooterContent = ({ footer }) => {
  if (footer == "footer1") {
    return <Footer1 />;
  } else if (footer == "none") {
    return "";
  } else {
    return <Footer1 />;
  }
};

export default function RootLayout({
  children,
  header = "",
  footer = "",
  defaultMode = "",
}) {
  const [mode, setMode] = useState(defaultMode);
  const [navData, setNavData] = useState({});

  useEffect(() => {
    setNavData(allNavData);
    if (typeof window !== "undefined") {
      if (mode == "dark") {
        document.querySelector("body").classList.add("dark");
      } else {
        document.querySelector("body").classList.remove("dark");
      }
    }
  }, [mode]);
  return (
    <>
      <CommonAnimation>
        <div className="has-smooth" id="has_smooth"></div>
        <ScrollSmootherComponents />
        <Preloader />
        <ScrollTop />
        <HeaderContent header={header} navData={navData} />
        <div id="smooth-wrapper">
          <div id="smooth-content">
            {children}
            <FooterContent footer={footer} />
          </div>
        </div>
      </CommonAnimation>
    </>
  );
}
