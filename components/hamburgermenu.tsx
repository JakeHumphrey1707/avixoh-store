// HamburgerMenu.tsx
import React from "react";
import { Category } from "@/types";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface HamburgerMenuProps {
  data: Category[];
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ data }) => {
  const pathname = usePathname();

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  return (
    <nav className="block sm:hidden">
      <div className="flex flex-col space-y-4">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              'text-xl font-extrabold transition-colors hover:text-neutral-500',
              route.active ? 'text-neutral-500' : 'text-black'
            )}
          >
            {route.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default HamburgerMenu;
