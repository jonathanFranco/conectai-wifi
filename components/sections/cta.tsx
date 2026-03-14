"use client";

import { cn } from "@/lib/utils";
import { Globe, Signal, Wifi, Zap } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function CTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const sectionTop = rect.top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight && sectionTop > -rect.height) {
          setScrollY((windowHeight - sectionTop) * 0.1);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-32 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-linear-to-br from-primary via-accent to-secondary" />

      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-20 -left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />
        <div
          className="absolute top-1/2 -right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"
          style={{ transform: `translateY(${-scrollY * 0.3}px)` }}
        />
        <div
          className="absolute -bottom-20 left-1/3 w-72 h-72 bg-white/10 rounded-full blur-3xl"
          style={{ transform: `translateY(${-scrollY * 0.4}px)` }}
        />

        <div
          className="absolute top-1/4 left-1/4 opacity-20"
          style={{
            transform: `translateY(${scrollY * 0.6}px) translateX(${scrollY * 0.2}px)`,
          }}
        >
          <div
            className="w-32 h-32 border-2 border-white/30 rounded-full animate-ping"
            style={{ animationDuration: "3s" }}
          />
          <div
            className="absolute inset-4 border-2 border-white/20 rounded-full animate-ping"
            style={{ animationDuration: "3s", animationDelay: "0.5s" }}
          />
          <div
            className="absolute inset-8 border-2 border-white/10 rounded-full animate-ping"
            style={{ animationDuration: "3s", animationDelay: "1s" }}
          />
        </div>

        <div
          className="absolute bottom-1/4 right-1/4 opacity-20"
          style={{
            transform: `translateY(${-scrollY * 0.5}px) translateX(${-scrollY * 0.15}px)`,
          }}
        >
          <div
            className="w-40 h-40 border-2 border-white/30 rounded-full animate-ping"
            style={{ animationDuration: "4s" }}
          />
          <div
            className="absolute inset-4 border-2 border-white/20 rounded-full animate-ping"
            style={{ animationDuration: "4s", animationDelay: "0.7s" }}
          />
          <div
            className="absolute inset-8 border-2 border-white/10 rounded-full animate-ping"
            style={{ animationDuration: "4s", animationDelay: "1.4s" }}
          />
        </div>

        <div
          className="absolute top-20 right-1/4 text-white/10"
          style={{
            transform: `translateY(${scrollY * 0.8}px) rotate(${scrollY * 0.1}deg)`,
          }}
        >
          <Wifi className="w-16 h-16" />
        </div>
        <div
          className="absolute bottom-20 left-[20%] text-white/10"
          style={{
            transform: `translateY(${-scrollY * 0.6}px) rotate(${-scrollY * 0.15}deg)`,
          }}
        >
          <Signal className="w-12 h-12" />
        </div>
        <div
          className="absolute top-1/3 right-10 text-white/10"
          style={{
            transform: `translateY(${scrollY * 0.4}px) rotate(${scrollY * 0.2}deg)`,
          }}
        >
          <Globe className="w-14 h-14" />
        </div>
        <div
          className="absolute bottom-1/3 left-10 text-white/10"
          style={{
            transform: `translateY(${-scrollY * 0.7}px) rotate(${-scrollY * 0.1}deg)`,
          }}
        >
          <Zap className="w-10 h-10" />
        </div>

        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              top: `${10 + i * 6}%`,
              left: `${5 + i * 6.5}%`,
              transform: `translateY(${scrollY * (0.2 + i * 0.08)}px)`,
            }}
          />
        ))}
      </div>

      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)`,
          backgroundSize: "50px 50px",
          transform: `translateY(${scrollY * 0.1}px)`,
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div
          className={cn(
            "max-w-4xl mx-auto text-center transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm mb-8 animate-pulse-glow">
            <Wifi className="w-10 h-10 text-primary-foreground" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 text-balance">
            Internet estável e eficiente para seu evento ou estabelecimento
          </h2>

          <p className="text-lg md:text-xl text-primary-foreground/90 mb-4 max-w-2xl mx-auto leading-relaxed">
            Conectamos pessoas e experiências com tecnologia de ponta. Seu
            evento merece uma conexão que não falha.
          </p>

          <p className="text-sm text-primary-foreground/70 font-medium">
            Mais de 50 eventos realizados com sucesso
          </p>
        </div>
      </div>
    </section>
  );
}
