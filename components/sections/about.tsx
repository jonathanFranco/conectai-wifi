"use client";

import { useEffect, useRef, useState } from "react";
import { PartyPopper, MapPin, Award, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

const stats = [
  {
    icon: PartyPopper,
    value: "50+",
    label: "Eventos Realizados",
  },
  {
    icon: MapPin,
    value: "50+",
    label: "Cidades Atendidas",
  },
  {
    icon: Award,
    value: "4",
    label: "Anos de Experiência",
  },
  {
    icon: TrendingUp,
    value: "99%",
    label: "Satisfação",
  },
];

export function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="sobre"
      ref={sectionRef}
      className="py-20 md:py-32 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-background to-secondary/5" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div
            className={cn(
              "transition-all duration-700",
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8",
            )}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              Sobre Nós
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
              <span className="text-foreground">Especialistas em </span>
              <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
                WiFi para eventos
              </span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                A Conectai WiFi nasceu da necessidade de oferecer internet de
                qualidade para eventos e estabelecimentos. Sabemos que uma
                conexão instável pode arruinar a experiência dos seus clientes e
                convidados.
              </p>
              <p>
                Nossa equipe é especializada em criar infraestruturas de rede
                temporárias e permanentes que suportam alta demanda sem perder
                performance. De festas particulares a grandes festivais, estamos
                preparados para qualquer desafio.
              </p>
              <p>
                Trabalhamos com bares, restaurantes, casas de show,
                organizadores de eventos corporativos e produtores de festivais.
                Nossa missão é garantir que a conectividade nunca seja um
                problema.
              </p>
            </div>
          </div>

          <div
            className={cn(
              "grid grid-cols-2 gap-4 transition-all duration-700 delay-200",
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8",
            )}
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className={cn(
                    "relative group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-xl",
                    index === 0 &&
                      "bg-linear-to-br from-primary/10 to-transparent",
                    index === 1 &&
                      "bg-linear-to-br from-secondary/10 to-transparent",
                    index === 2 &&
                      "bg-linear-to-br from-accent/10 to-transparent",
                    index === 3 &&
                      "bg-linear-to-br from-primary/10 via-accent/5 to-secondary/10",
                  )}
                >
                  <div
                    className={cn(
                      "w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-linear-to-br",
                      index === 0 && "from-primary to-accent",
                      index === 1 && "from-secondary to-accent",
                      index === 2 && "from-accent to-primary",
                      index === 3 && "from-primary to-secondary",
                    )}
                  >
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
