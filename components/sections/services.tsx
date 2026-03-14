"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn, Links } from "@/lib/utils";
import {
  Beer,
  Building2,
  Check,
  MessageCircle,
  Music,
  PartyPopper,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    name: "Eventos Corporativos",
    icon: Building2,
    description:
      "Conexão estável para conferências, feiras e reuniões empresariais",
    features: [
      "Conexão dedicada e exclusiva",
      "Suporte técnico no local",
      "Rede segura e criptografada",
      "Alta capacidade de usuários",
      "Instalação e configuração inclusa",
    ],
    gradient: "from-primary/80 to-primary",
  },
  {
    name: "Festas e Shows",
    icon: PartyPopper,
    description: "WiFi de alta performance para festas, shows e festivais",
    popular: true,
    features: [
      "Cobertura ampla do espaço",
      "Suporta centenas de conexões",
      "Equipe técnica dedicada",
      "Monitoramento em tempo real",
      "Rede estável mesmo com lotação",
      "Backup de conexão automático",
    ],
    gradient: "from-secondary to-accent",
  },
  {
    name: "Bares e Restaurantes",
    icon: Beer,
    description: "Internet confiável para seu estabelecimento e clientes",
    features: [
      "WiFi para clientes separado",
      "Rede administrativa segura",
      "Suporte remoto 24h",
      "Fácil gerenciamento",
      "Relatórios de uso",
    ],
    gradient: "from-accent to-primary",
  },
  {
    name: "Hoteis e Pousadas",
    icon: Music,
    description: "Infraestrutura robusta para hotéis e pousadas",
    features: [
      "Alta densidade de conexões",
      "Sem quedas ou lentidão",
      "Configuração personalizada",
      "Suporte técnico presencial",
      "Manutenção preventiva",
      "Equipamentos de última geração",
    ],
    gradient: "from-primary via-accent to-secondary",
  },
];

export function Services() {
  const [isVisible, setIsVisible] = useState(false);
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

  const handleWhatsApp = () => {
    console.log("WhatsApp button clicked");
    const message = encodeURIComponent(
      "Olá! Gostaria de um orçamento para serviço de WiFi.",
    );
    window.open(`${Links.WHATSAPP_URL}?text=${message}`, "_blank");
  };

  return (
    <section
      id="servicos"
      ref={sectionRef}
      className="py-20 md:py-32 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-linear-to-b from-background via-muted/50 to-background" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div
          className={`text-center max-w-3xl mx-auto mb-12 md:mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            <span className="text-foreground">Soluções </span>
            <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
              para cada necessidade
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            WiFi profissional e estável para eventos de qualquer porte
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.name}
                className={cn(
                  "relative overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group flex flex-col h-full",
                  service.popular &&
                    "border-2 border-secondary shadow-xl shadow-secondary/10",
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8",
                )}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {service.popular && (
                  <div className="absolute top-0 right-0 bg-linear-to-r from-secondary to-accent text-secondary-foreground text-xs font-bold px-4 py-1 rounded-bl-lg">
                    Mais Pedido
                  </div>
                )}

                <div
                  className={cn(
                    "absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-5 transition-opacity bg-linear-to-br",
                    service.gradient,
                  )}
                />

                <CardHeader className="pb-4">
                  <div
                    className={cn(
                      "w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-linear-to-br",
                      service.gradient,
                    )}
                  >
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{service.name}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>

                <CardContent className="pb-4 flex-1">
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
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
                    onClick={handleWhatsApp}
                    className={cn(
                      "w-full font-semibold cursor-pointer",
                      service.popular
                        ? "bg-linear-to-r from-secondary to-accent hover:opacity-90 text-secondary-foreground shadow-lg shadow-secondary/25"
                        : "bg-linear-to-r from-primary to-accent hover:opacity-90 text-primary-foreground",
                    )}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Solicitar Orçamento
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8 md:mt-12">
          Orçamento personalizado para o seu evento. Entre em contato!
        </p>
      </div>
    </section>
  );
}
