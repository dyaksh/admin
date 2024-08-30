// import React from "react";

import { Link } from "react-router-dom";
import { useState } from "react";

const Sidebar = () => {
  // Function to get the current page slug
  const getPageSlug = () => {
    const url = window.location.pathname.split("/");
    return url[url.length - 2];
  };

  const pageSlug = getPageSlug();

  const [openMenuIndex, setOpenMenuIndex] = useState(null);

  const menuItems = [
    {
      title: "Our Works",
      path: "/ourworks",
      submenu: [
        { title: "Print Media", path: "/ourworks/printmedia" },
        { title: "Digital Media", path: "/ourworks/digitalmedia" },
        { title: "TV COM DOCS", path: "/ourworks/tvcomdocs" },
        { title: "Audio", path: "/ourworks/audio" },
        { title: "Exhibition", path: "/ourworks/exhibition" },
      ],
    },
  ]

  const toggleSubmenu = (index) => {
    setOpenMenuIndex(openMenuIndex === index ? null : index);
  };

  return (
    <>
      <aside
        id="sidebar"
        className="fixed hidden z-20 h-full top-0 left-0 pt-16 flex lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75"
        aria-label="Sidebar"
      >
        <div className="relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white pt-0">
          <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <div className="flex-1 px-3 bg-white divide-y space-y-1">
              <ul className="space-y-2 pb-2">
                <li>
                  <form action="#" method="GET" className="lg:hidden">
                    <label htmlFor="mobile-search" className="sr-only">
                      Search
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg
                          className="w-5 h-5 text-gray-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                        </svg>
                      </div>
                      <input
                        type="text"
                        name="email"
                        id="mobile-search"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-600 block w-full pl-10 p-2.5"
                        placeholder="Search"
                      />
                    </div>
                  </form>
                </li>
                <li>
                  <Link
                    to="/employees"
                    className={`text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group ${pageSlug === "inbox" ? "bg-gray-100" : ""
                      }`}
                  >
                    <svg
                      className="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="ml-3 flex-1 whitespace-nowrap">Employee</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/career"
                    className={`text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group ${pageSlug === "inbox" ? "bg-gray-100" : ""
                      }`}
                  >
                    <svg
                      className="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 2a2 2 0 00-2 2v1H6a4 4 0 00-4 4v5a2 2 0 002 2h12a2 2 0 002-2v-5a4 4 0 00-4-4h-2V4a2 2 0 00-2-2zm0 6V4h2v4h-2zM6 9a2 2 0 012-2h4a2 2 0 012 2v1H6V9z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="ml-3 flex-1 whitespace-nowrap">Career</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className={`text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group ${pageSlug === "inbox" ? "bg-gray-100" : ""
                      }`}
                  >
                    <svg
                      className="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5 2a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V4a2 2 0 00-2-2H5zm10 14H5V4h10v12zm-5 1a1 1 0 110-2 1 1 0 010 2z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="ml-3 flex-1 whitespace-nowrap">Contact</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                    className={`text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group ${pageSlug === "inbox" ? "bg-gray-100" : ""
                      }`}
                  >
                    <svg
                      className="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 3a1 1 0 011-1h10a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V3zm1 0v14h10V3H5zm2 3h6v2H7V6zm0 4h6v2H7v-2z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="ml-3 flex-1 whitespace-nowrap">Blog</span>
                  </Link>
                </li>
                {menuItems.map((menuItem, index) => (
                  <li key={index}>
                    <div
                      onClick={() => toggleSubmenu(index)}
                      className={`text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group cursor-pointer ${openMenuIndex === index ? "bg-gray-100" : ""}`}
                    >
                      <svg
                        className="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 2a1 1 0 011-1h2a1 1 0 011 1v2h4a3 3 0 013 3v11a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4V2zm1 2v2h2V4h-2zm-5 5h12v9a1 1 0 001-1V7a1 1 0 00-1-1H6a1 1 0 00-1 1v9a1 1 0 001 1V9zm7 5a1 1 0 10-2 0v2a1 1 0 102 0v-2z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="ml-3 flex-1 whitespace-nowrap">{menuItem.title}</span>
                      <svg
                        className={`w-4 h-4 ml-auto transition-transform duration-300 ${openMenuIndex === index ? 'transform rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>

                    {openMenuIndex === index && (
                      <ul className="pl-8 mt-1 space-y-1">
                        {menuItem.submenu.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <Link to={subItem.path} className="text-base text-gray-700 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group">
                              {subItem.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
                <li>
                  <Link
                    to="/testimonial"
                    className={`text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group ${pageSlug === "inbox" ? "bg-gray-100" : ""
                      }`}
                  >
                    <svg
                      className="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.48 2 2 6.48 2 12c0 1.66.33 3.24.91 4.68L2 22l5.22-1.82C8.36 20.55 10.12 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 4c-.83 0-1.5.67-1.5 1.5S11.17 9 12 9s1.5-.67 1.5-1.5S12.83 6 12 6zm0 6c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="ml-3 flex-1 whitespace-nowrap">Testimonials</span>
                  </Link>
                </li>
              </ul>
              <div className="space-y-2 pt-2">
                <ul className="space-y-2 pb-2">
                  <li>
                    <Link to="/signin" class="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group ">
                      <svg className="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd"></path></svg>
                      <span className="ml-3 flex-1 whitespace-nowrap">Sign In</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div >
      </aside >
      <div
        className="bg-gray-900 opacity-50 hidden fixed inset-0 z-10"
        id="sidebarBackdrop"
      ></div>
    </>
  );
};

export default Sidebar;
