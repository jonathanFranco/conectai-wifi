"use client";

import { useEffect, useRef, useState } from "react";
import {
  Wifi,
  Shield,
  Headphones,
  Clock,
  Users,
  Router,
  Activity,
  Wrench,
} from "lucide-react";
import { cn } from "@/lib/utils";

const benefits = [
  {
    icon: Activity,
    title: "Conexão Estável",
    description:
      "Garantimos estabilidade mesmo com alta demanda de usuários simultâneos no seu evento.",
    gradient: "from-primary to-accent",
  },
  {
    icon: Shield,
    title: "Rede Segura",
    description:
      "Proteção avançada contra ameaças e redes separadas para clientes e administração.",
    gradient: "from-secondary to-accent",
  },
  {
    icon: Headphones,
    title: "Suporte Dedicado",
    description:
      "Equipe técnica disponível durante todo o evento para qualquer necessidade.",
    gradient: "from-accent to-primary",
  },
  {
    icon: Clock,
    title: "Instalação Rápida",
    description:
      "Montagem e configuração ágil para que tudo esteja pronto antes do evento começar.",
    gradient: "from-primary to-secondary",
  },
  {
    icon: Users,
    title: "Alta Capacidade",
    description:
      "Infraestrutura preparada para suportar centenas de conexões simultâneas.",
    gradient: "from-secondary to-primary",
  },
  {
    icon: Router,
    title: "Equipamentos Premium",
    description:
      "Utilizamos roteadores e access points de última geração para máxima eficiência.",
    gradient: "from-accent to-secondary",
  },
  {
    icon: Wrench,
    title: "Manutenção Inclusa",
    description:
      "Monitoramento em tempo real e manutenção durante todo o período contratado.",
    gradient: "from-primary via-accent to-secondary",
  },
  {
    icon: Wifi,
    title: "Cobertura Total",
    description:
      "Analisamos o espaço para garantir sinal em todos os ambientes do local.",
    gradient: "from-secondary via-accent to-primary",
  },
];

export function Benefits() {
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
      id="beneficios"
      ref={sectionRef}
      className="py-20 md:py-32 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-linear-to-b from-muted/30 via-background to-muted/30" />

      <div className="absolute top-1/4 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div
          className={`text-center max-w-3xl mx-auto mb-12 md:mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Por que escolher a Conectai?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            <span className="text-foreground">Diferenciais que </span>
            <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
              garantem qualidade
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Entenda por que somos referência em WiFi para eventos
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className={cn(
                  "group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:-translate-y-1",
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8",
                )}
                style={{ transitionDelay: `${index * 75}ms` }}
              >
                <div
                  className={cn(
                    "w-14 h-14 rounded-xl flex items-center justify-center mb-4 bg-linear-to-br transition-transform group-hover:scale-110",
                    benefit.gradient,
                  )}
                >
                  <Icon className="w-7 h-7 text-primary-foreground" />
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
