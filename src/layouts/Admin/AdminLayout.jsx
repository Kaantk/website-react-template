import React, { useState, useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

export const AdminLayout = () => {
  const [headerHeight, setHeaderHeight] = useState(0);
  const [sidebarWidth, setSidebarWidth] = useState(0);

  const headerRef = useRef(null);
  const sidebarRef = useRef(null);

  useEffect(() => {
    // Header ve Sidebar referanslarını kontrol et
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
    if (sidebarRef.current) {
      setSidebarWidth(sidebarRef.current.offsetWidth);
    }

    // ResizeObserver kullanarak sidebar genişliğini takip et
    const sidebarElement = sidebarRef.current;
    if (sidebarElement) {
      const resizeObserver = new ResizeObserver(() => {
        setSidebarWidth(sidebarElement.offsetWidth);
      });

      resizeObserver.observe(sidebarElement);

      return () => resizeObserver.unobserve(sidebarElement);
    }
  }, []);

  useEffect(() => {
    // Header boyutunu güncelle
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
  }, [headerRef.current]);

  return (
    <>
      {/* Ana sarmalayici */}
      <div id="container">
        {/* Header */}
        <header
          style={{ width: `calc(100% - ${sidebarWidth}px)` }}
          className="border-b border-gray-200 fixed top-0 right-0 bg-yellow-500"
          ref={headerRef}
        >
          <Header />
        </header>

        {/* Sidebar */}
        <aside
          className="hidden lg:block fixed h-full top-0 left-0 z-20 bg-blue-200"
          ref={sidebarRef}
        >
          <Sidebar />
        </aside>

        {/* Main */}
        <main
          style={{
            marginTop: headerHeight,
            marginLeft: sidebarWidth,
          }}
          className="flex-1"
        >
          <section className="w-11/12 mx-auto lg:w-full lg:mx-0">
            {/* Sayfa icerikleri main icerisine dinamik olara gelir */}
            <Outlet />
          </section>
        </main>
      </div>
    </>
  );
};
