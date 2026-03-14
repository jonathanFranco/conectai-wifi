"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

const navLinks = [
  { name: "Início", href: "#inicio" },
  { name: "Serviços", href: "#servicos" },
  { name: "Benefícios", href: "#beneficios" },
  { name: "Sobre", href: "#sobre" },
  { name: "Contato", href: "#contato" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleNavClick =
    (href: string, closeMenu = false) =>
    (e: any) => {
      e.preventDefault();
      if (closeMenu) setIsMobileMenuOpen(false);
      const id = href.replace("#", "");
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-lg border-b border-border shadow-lg"
          : "bg-background/80 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none",
      )}
    >
      <nav className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a
            href="#inicio"
            onClick={handleNavClick("#inicio")}
            className="flex items-center group"
          >
            <Image
              src="/images/logo.png"
              alt="Conectai WiFi"
              width={160}
              height={50}
              className="h-10 md:h-12 w-auto object-contain"
              priority
            />
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleNavClick(link.href)}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-linear-to-r from-primary to-secondary group-hover:w-3/4 transition-all duration-300" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full hover:bg-muted cursor-pointer"
              aria-label="Alternar tema"
            >
              {mounted &&
                (theme === "dark" ? (
                  <Sun className="w-5 h-5 text-secondary" />
                ) : (
                  <Moon className="w-5 h-5 text-primary" />
                ))}
            </Button>

            <Button
              asChild
              className="hidden md:flex bg-linear-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground font-semibold shadow-lg shadow-primary/25"
            >
              <a href="#servicos" onClick={handleNavClick("#servicos")}>
                Orçamento
              </a>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>

        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300",
            isMobileMenuOpen ? "max-h-96 pb-4" : "max-h-0",
          )}
        >
          <div className="flex flex-col gap-2 pt-4 border-t border-border">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleNavClick(link.href, true)}
                className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Button
              asChild
              className="mt-2 bg-linear-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground font-semibold"
            >
              <a href="#servicos" onClick={handleNavClick("#servicos", true)}>
                Solicitar Orçamento
              </a>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}
