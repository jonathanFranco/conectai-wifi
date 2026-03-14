"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check, Wifi, Zap, Rocket, Crown } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Básico",
    icon: Wifi,
    speed: "100 Mbps",
    price: "79",
    description: "Ideal para uso básico e navegação",
    features: [
      "Download até 100 Mbps",
      "Upload até 50 Mbps",
      "Wi-Fi Dual Band",
      "Suporte por chat",
      "Instalação gratuita",
    ],
    popular: false,
    linear: "from-primary/80 to-primary",
  },
  {
    name: "Turbo",
    icon: Zap,
    speed: "300 Mbps",
    price: "119",
    description: "Perfeito para streaming e games",
    features: [
      "Download até 300 Mbps",
      "Upload até 150 Mbps",
      "Wi-Fi Dual Band",
      "Suporte prioritário 24h",
      "Instalação gratuita",
      "IP Fixo incluso",
    ],
    popular: true,
    linear: "from-secondary to-accent",
  },
  {
    name: "Ultra",
    icon: Rocket,
    speed: "500 Mbps",
    price: "169",
    description: "Para quem precisa de mais velocidade",
    features: [
      "Download até 500 Mbps",
      "Upload até 250 Mbps",
      "Wi-Fi 6 Mesh",
      "Suporte VIP 24h",
      "Instalação express",
      "IP Fixo incluso",
      "Antivírus incluso",
    ],
    popular: false,
    linear: "from-accent to-primary",
  },
  {
    name: "Giga",
    icon: Crown,
    speed: "1 Gbps",
    price: "249",
    description: "Máxima performance sem limites",
    features: [
      "Download até 1 Gbps",
      "Upload até 500 Mbps",
      "Wi-Fi 6 Mesh Premium",
      "Suporte VIP dedicado",
      "Instalação express",
      "IP Fixo incluso",
      "Antivírus e Backup",
      "Prioridade de rede",
    ],
    popular: false,
    linear: "from-primary via-accent to-secondary",
  },
];

export function Plans() {
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
      id="planos"
      ref={sectionRef}
      className="py-20 md:py-32 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-linear-to-b from-background via-muted/50 to-background" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div
          className={`text-center max-w-3xl mx-auto mb-12 md:mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
            Nossos Planos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            <span className="text-foreground">Escolha o plano </span>
            <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
              ideal para você
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Planos flexíveis para atender todas as suas necessidades de conexão
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <Card
                key={plan.name}
                className={cn(
                  "relative overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group flex flex-col h-full",
                  plan.popular &&
                    "border-2 border-secondary shadow-xl shadow-secondary/10",
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8",
                )}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-linear-to-r from-secondary to-accent text-secondary-foreground text-xs font-bold px-4 py-1 rounded-bl-lg">
                    Mais Popular
                  </div>
                )}

                <div
                  className={cn(
                    "absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity bg-linear-to-br",
                    plan.linear,
                  )}
                />

                <CardHeader className="pb-4">
                  <div
                    className={cn(
                      "w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-linear-to-br",
                      plan.linear,
                    )}
                  >
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>

                <CardContent className="pb-4 flex-1">
                  <div className="mb-6">
                    <span className="text-sm text-muted-foreground">
                      a partir de
                    </span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-sm text-muted-foreground">R$</span>
                      <span className="text-4xl font-bold text-foreground">
                        {plan.price}
                      </span>
                      <span className="text-muted-foreground">/mês</span>
                    </div>
                    <div
                      className={cn(
                        "inline-flex items-center gap-1 mt-2 px-3 py-1 rounded-full text-sm font-medium bg-linear-to-r text-primary-foreground",
                        plan.linear,
                      )}
                    >
                      <Zap className="w-3 h-3" />
                      {plan.speed}
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <Check className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="mt-auto pt-6">
                  <Button
                    className={cn(
                      "w-full font-semibold",
                      plan.popular
                        ? "bg-linear-to-r from-secondary to-accent hover:opacity-90 text-secondary-foreground shadow-lg shadow-secondary/25"
                        : "bg-linear-to-r from-primary to-accent hover:opacity-90 text-primary-foreground",
                    )}
                  >
                    Assinar Agora
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8 md:mt-12">
          Todos os planos incluem instalação gratuita e sem fidelidade
        </p>
      </div>
    </section>
  );
}
