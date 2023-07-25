"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu as MenuIcon, X as CloseIcon } from "lucide-react"; // Import the Menu and X icons from lucide-react

import { cn } from "@/lib/utils";
import { Category } from "@/types";

interface MobileNavProps {
  data: Category[];
}

const MobileNav: React.FC<MobileNavProps> = ({ data }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsMenuOpen((prevState) => !prevState);

  const closeMenu = () => setIsMenuOpen(false); // Function to close the menu

  const pathname = usePathname();

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  // Function to handle click outside the menu to close it
  const handleClickOutsideMenu = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      // Add event listener to detect clicks outside the menu when it's open
      document.addEventListener("click", handleClickOutsideMenu);
    } else {
      // Remove event listener when the menu is closed
      document.removeEventListener("click", handleClickOutsideMenu);
    }

    return () => {
      // Clean up the event listener on component unmount
      document.removeEventListener("click", handleClickOutsideMenu);
    };
  }, [isMenuOpen]);

  return (
    <div className="sm:hidden" ref={menuRef}>
      <div className="relative">
        <button
          onClick={toggleMenu}
          className="block px-1 py-2 text-2xl font-extrabold transition-colors hover:text-neutral-500"
        >
          {isMenuOpen ? <CloseIcon size={40} /> : <MenuIcon size={40} />}{" "}
          {/* Use the Close or Menu icon from lucide-react based on isMenuOpen state */}
        </button>
        {isMenuOpen && (
          <nav
            className="ml-2 bg-white p-4 z-10 absolute border rounded-lg shadow-lg"
            style={{ minWidth: "200px" }}
          >
            <div className="space-y-4">
             
                <a href="/"
                  className={cn(
                    "block text-xl font-extrabold transition-colors hover:text-neutral-500",
                    pathname === "/" ? "text-neutral-500" : "text-black"
                  )}
                  onClick={closeMenu} // Close the menu when the "Home" link is clicked
                >
                  Home
                </a>
              
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className={cn(
                    "block text-xl font-extrabold transition-colors hover:text-neutral-500",
                    route.active ? "text-neutral-500" : "text-black"
                  )}
                  onClick={closeMenu} // Close the menu when any category link is clicked
                >
                  {route.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </div>
  );
};

export default MobileNav;
