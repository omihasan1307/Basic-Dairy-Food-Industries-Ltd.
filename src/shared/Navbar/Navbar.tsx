"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { img } from "../constant/imgExport";
import { FaBars } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";

const menuItems = [
  { id: 4, title: "about", link: "/about" },
  { id: 5, title: "Contact Us", link: "/contact" },
];

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const pathName = usePathname();
  const sidebarRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
      setIsSidebarOpen(false);
    }
  };

  const handleResize = () => {
    if (window.innerWidth >= 1024) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={`"fixed top-0 left-0 right-0  z-50 dark:bg-gradient-custom-dark" : "relative  dark:bg-gradient-custom-dark"}`}>
      <nav className="max-w-screen-xl mx-auto transition-all duration-300 ">
        <div className="flex items-center justify-between ">
          <Link href={"/"} className="flex items-center px-3 py-1">
            <Image src={img.Logo} alt="Logo" width={80} height={200} />
          </Link>
          <div className="lg:flex items-center justify-between space-x-6 hidden">
            {menuItems?.map((menu) => {
              const isActive = pathName === menu?.link;
              return (
                <Link
                  href={menu?.link}
                  key={menu?.id}
                  className={`uppercase px-2 border-b-0 transition ease-in-out delay-150  ${
                    isActive ? "border-b-[0.5px] scale-110 border-basicColor py-[13px]" : "underline-effect"
                  }`}>
                  {menu?.title}
                </Link>
              );
            })}
          </div>

          <div className="lg:hidden block cursor-pointer pe-5 lg:pe-0" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <FaBars />
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      {isSidebarOpen && (
        <div ref={sidebarRef} className="fixed z-50">
          <div className="fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-1/3 h-full shadow-[0_10px_300px_-15px_rgba(0,0,0,3)] z-50 m-0 p-5 bg-gradient-custom-light dark:bg-gradient-custom-dark">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-semibold">Menu</h2>
              <div className="cursor-pointer" onClick={() => setIsSidebarOpen(false)}>
                <IoIosCloseCircle />
              </div>
            </div>
            <div className="flex flex-col space-y-4 justify-center ">
              {menuItems?.map((menu) => {
                const isActive = pathName === menu?.link;
                return (
                  <Link
                    href={menu?.link}
                    key={menu?.id}
                    className={`uppercase font-semibold py-2 px-4 transition ease-in-out delay-150 duration-300 hover:bg-gray-200 ${
                      isActive
                        ? "bg-gradient-custom-light dark:bg-gradient-custom-dark text-basicColor border-b-[0.5px] scale-105 border-basicColor"
                        : ""
                    }`}
                    onClick={() => setIsSidebarOpen(false)}>
                    {menu?.title}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
      <hr />
    </div>
  );
};

export default Navbar;
