// components/_App/Layout.jsx
import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import LeftSidebar from "@/components/_App/LeftSidebar";
import TopNavbar from "@/components/_App/TopNavbar";
import Footer from "@/components/_App/Footer";
import ScrollToTop from "./ScrollToTop.jsx";
import ControlPanelModal from "@/components/_App/ControlPanelModal/index.jsx"; // Updated import

const Layout = ({ children }) => {
  const router = useRouter();
  const [active, setActive] = useState(false);

  const toggleActive = () => {
    setActive(prevActive => !prevActive);
  };

  const isAuthPath = [
    "/authentication/sign-in",
    "/authentication/sign-up",
    "/authentication/forgot-password",
    "/authentication/lock-screen",
    "/authentication/confirm-mail",
    "/authentication/logout"
  ].includes(router.pathname);

  return (
    <>
      <Head>
        <title>SUFNOOR Systems</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className={`main-wrapper-content ${active ? "active" : ""}`}>
        {!isAuthPath && (
          <>
            <TopNavbar toggleActive={toggleActive} />
            <LeftSidebar toggleActive={toggleActive} />
          </>
        )}

        <div className="main-content">
          {children}
          {!isAuthPath && <Footer />}
        </div>
      </div>
      
      {/* ScrollToTop */}
      <ScrollToTop />
      
      {!isAuthPath && <ControlPanelModal />}
    </>
  );
};

export default Layout;
