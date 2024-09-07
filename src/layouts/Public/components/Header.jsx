import React from "react";
import { Drawer } from "flowbite-react";
import { useState } from "react";
import { Icon } from "~/assets/icons/icons";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);
  return (
    <>
      {/* Header */}
      <header className=" border-b border-gray-200">
        <section className="w-11/12 mx-auto py-1 lg:max-w-[1200px]">
          <div className="flex items-center justify-between">
            {/* Logo yer alıcak */}
            <div>
              <a href="#">Logo</a>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(true)}
                className="flex items-center text-gray-700"
              >
                <Icon name="menu" />
              </button>
            </div>

            <div className="hidden lg:block">
              <nav>
                <ul>
                  <li>
                    <a href="#"></a>
                  </li>
                  <li>
                    <Popover className="relative">
                      <PopoverButton>Solutions</PopoverButton>
                      <PopoverPanel
                        anchor="bottom"
                        className="flex flex-col border border-gray-200 p-2 rounded bg-white shadow"
                      >
                        <a href="#">Analytics</a>
                        <a href="#">Engagement</a>
                        <a href="#">Security</a>
                        <a href="#">Integrations</a>
                      </PopoverPanel>
                    </Popover>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </section>
      </header>
      <Drawer
        open={isOpen}
        onClose={handleClose}
        className="w-3/4 md:w-2/5 lg:hidden"
      >
        <div>
          <div className="flex items-center justify-between">
            <div>Logo</div>
            <button onClick={() => setIsOpen(false)} className="text-gray-700">
              <Icon name="close" />
            </button>
          </div>
        </div>
      </Drawer>
    </>
  );
};
