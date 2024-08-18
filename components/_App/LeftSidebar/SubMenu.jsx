// components/_App/LeftSidebar/SubMenu.jsx
import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "@/components/_App/LeftSidebar/SubMenu.module.css";

const SidebarLabel = styled("span")(({ theme }) => ({
  position: "relative",
  top: "-3px",
}));

const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);
  const [currentPath, setCurrentPath] = useState("");
  const router = useRouter();

  const showSubnav = () => setSubnav(prev => !prev);

  useEffect(() => {
    setCurrentPath(router.asPath);
  }, [router.asPath]);

  return (
    <>
      <Link
        href={item.path}
        onClick={item.subNav ? showSubnav : undefined}
        className={`${styles.sidebarLink} ${
          currentPath === item.path ? "sidebarLinkActive" : ""
        }`}
      >
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </Link>
      {subnav && item.subNav &&
        item.subNav.map((subItem, index) => (
          <Link
            href={subItem.path}
            key={index}
            className={`${styles.sidebarLink2} ${
              currentPath === subItem.path ? "sidebarLinkActive2" : ""
            }`}
          >
            {subItem.icon}
            {subItem.title}
          </Link>
        ))}
    </>
  );
};

export default SubMenu;
