"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn, Links } from "@/lib/utils";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const contactInfo = [
  {
    icon: Phone,
    title: "Telefone",
    content: Links.PHONE,
    description: "Ligação gratuita",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    content: Links.WHATSAPP_DISPLAY,
    description: "Resposta rápida",
  },
  {
    icon: Mail,
    title: "E-mail",
    content: Links.EMAIL.replace("mailto:", ""),
    description: "Respondemos em 24h",
  },
  {
    icon: Clock,
    title: "Horário",
    content: "Durante o evento",
    description: "Todos os dias",
  },
];

const handleWhatsApp = () => {
  const message = encodeURIComponent(
    "Olá! Gostaria de um orçamento para serviço de WiFi.",
  );
  window.open(`${Links.WHATSAPP_URL}?text=${message}`, "_blank");
};

export function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
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
      id="contato"
      ref={sectionRef}
      className="py-20 md:py-32 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-linear-to-b from-background via-muted/30 to-background" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div
          className={cn(
            "text-center max-w-3xl mx-auto mb-12 md:mb-16 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Fale Conosco
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            <span className="text-foreground">Entre em </span>
            <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
              contato
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Estamos prontos para atender você e tirar todas as suas dúvidas
          </p>
        </div>

        <div
          className={cn(
            "grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <Card
                key={info.title}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div
                    className={cn(
                      "w-14 h-14 rounded-2xl flex items-center justify-center bg-linear-to-br mb-4 group-hover:scale-110 transition-transform",
                      index === 0 && "from-primary to-accent",
                      index === 1 && "from-secondary to-accent",
                      index === 2 && "from-accent to-primary",
                      index === 3 && "from-primary to-secondary",
                    )}
                  >
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="text-sm text-muted-foreground mb-1">
                    {info.title}
                  </div>
                  <div className="font-semibold text-foreground text-lg">
                    {info.content}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {info.description}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card
          className={cn(
            "overflow-hidden transition-all duration-700 delay-300 p-0",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          <CardContent className="p-0">
            <div className="relative h-64 md:h-80">
              <iframe
                title="Mapa de cobertura"
                src="https://www.google.com/maps?q=Brasil&z=5&output=embed"
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-black/50 z-10" />

              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="text-center px-4">
                  <div className="w-20 h-20 rounded-full bg-linear-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                    <MapPin className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-white/80 mb-2">
                    Atendemos em mais de 120 cidades
                  </h3>
                  <p className="text-white/50 mb-4">
                    Verifique se sua região está na nossa área de cobertura
                  </p>
                  <Button
                    onClick={handleWhatsApp}
                    className="relative z-30 bg-linear-to-r cursor-pointer from-primary to-secondary hover:opacity-90 text-primary-foreground font-semibold shadow-lg shadow-primary/25"
                  >
                    Verificar cobertura
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
