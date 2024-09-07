import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export const PublicLayout = () => {
  return (
    <>
      {/* Ana sarmalayici */}
      <div id="wrapper">
        {/* Header */}
        <Header />
        {/* Main */}
        <main className="flex-1">
          <section className="w-11/12 mx-auto lg:max-w-[1200px]">
            {/* Sayfa icerikleri main icerisine dinamik olara gelir */}
            <Outlet />
          </section>
        </main>
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};
