"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Shield, Users, Wifi } from "lucide-react";
import { useEffect, useState } from "react";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      <div className="absolute inset-0 bg-linear-to-br from-background via-muted to-background" />

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-glow delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]"
        style={{
          backgroundImage: `linear-linear(rgba(0,0,0,0.1) 1px, transparent 1px), linear-linear(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div
          className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-primary/10 to-secondary/10 border border-primary/20 mb-6 md:mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
            </span>
            <span className="text-sm font-medium text-foreground">
              Internet profissional para eventos e estabelecimentos
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="text-foreground">WiFi </span>
            <span className="bg-linear-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-linear-x">
              Estável
            </span>
            <span className="text-foreground"> para seu </span>
            <br />
            <span className="bg-linear-to-r from-secondary to-primary bg-clip-text text-transparent">
              Evento
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-8 md:mb-10 leading-relaxed">
            Conexão eficiente e estável para eventos corporativos, festas,
            bares, restaurantes, hotéis e pousadas. Seus clientes sempre
            conectados.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 md:mb-16">
            <Button
              size="lg"
              asChild
              className="w-full sm:w-auto bg-linear-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground font-semibold px-8 py-6 text-lg shadow-xl shadow-primary/25 group"
            >
              <a href="#servicos">
                Nossos Serviços
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto px-8 py-6 text-lg border-2 group cursor-pointer"
            >
              <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              Como Funciona
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto">
            <div className="flex flex-col items-center p-4 rounded-2xl bg-card/50 backdrop-blur-sm border border-border">
              <Wifi className="w-6 h-6 md:w-8 md:h-8 text-primary mb-2" />
              <span className="text-2xl md:text-3xl font-bold text-foreground">
                100%
              </span>
              <span className="text-xs md:text-sm text-muted-foreground">
                Estabilidade
              </span>
            </div>
            <div className="flex flex-col items-center p-4 rounded-2xl bg-card/50 backdrop-blur-sm border border-border">
              <Users className="w-6 h-6 md:w-8 md:h-8 text-secondary mb-2" />
              <span className="text-2xl md:text-3xl font-bold text-foreground">
                50+
              </span>
              <span className="text-xs md:text-sm text-muted-foreground">
                Eventos
              </span>
            </div>
            <div className="flex flex-col items-center p-4 rounded-2xl bg-card/50 backdrop-blur-sm border border-border">
              <Shield className="w-6 h-6 md:w-8 md:h-8 text-accent mb-2" />
              <span className="text-2xl md:text-3xl font-bold text-foreground">
                24/7
              </span>
              <span className="text-xs md:text-sm text-muted-foreground">
                Suporte
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-background to-transparent" />
    </section>
  );
}
