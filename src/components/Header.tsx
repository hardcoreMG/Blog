import {
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
} from "@/components/navbar/MobileNavbar";
import { Navbar, NavBody, NavItems } from "@/components/navbar/Navbar";
import { NavbarLogo } from "@/components/navbar/NavbarLogo";

import { ThemeProvider } from "@/hooks/useTheme";
import { useState } from "react";
import ThemeToggleButton from "./navbar/ThemeToggleButton";

interface HeaderProps {
  current?: string;
}

export default function Header({ current = "" }: HeaderProps) {
  const navItems = [
    {
      name: "首页",
      link: "/",
    },
    {
      name: "关于我",
      link: "/about",
    },
    {
      name: "文章",
      link: "/blog",
    },
    {
      name: "项目",
      link: "/projects",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <ThemeProvider>
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} current={current} />
          <div className="flex items-center gap-4 ml-2">
            <ThemeToggleButton />
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <div className="flex items-center gap-4">
              <ThemeToggleButton />
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </div>
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300 text-lg"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </ThemeProvider>
  );
}
