"use client";

import { Links } from "@/lib/utils";
import { Instagram } from "lucide-react";
import Image from "next/image";

const socialLinks = [
  {
    icon: Instagram,
    href: Links.INSTAGRAM,
    label: "Siga a Conectai WiFi",
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden">
      <div className="bg-foreground">
        <div className="container mx-auto px-4 md:px-6 py-10 md:py-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <a href="#inicio" className="flex items-center mb-4">
                <div className="grayscale-100 py-3">
                  <Image
                    src="/images/logo.png"
                    alt="Conectai WiFi"
                    width={150}
                    height={50}
                    className="h-10 w-auto object-contain"
                  />
                </div>
              </a>
              <p className="text-background/60 text-sm leading-relaxed max-w-sm">
                Conectando você ao que mais importa com internet de alta
                velocidade e qualidade.
              </p>
            </div>

            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    target="_blank"
                    className="relative z-20 w-fit px-3 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center gap-2 transition-colors"
                  >
                    <Icon className="w-5 h-5 text-background" />
                    <span className="text-background">{social.label}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-background/10">
          <div className="container mx-auto px-4 md:px-6 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-background/50 text-center md:text-left">
                © {new Date().getFullYear()} Conectai WiFi. Todos os direitos
                reservados.
              </p>
              <p className="text-sm text-background/50">
                CNPJ: 56.983.288/0001-16
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
