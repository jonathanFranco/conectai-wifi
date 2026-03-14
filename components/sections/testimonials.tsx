"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Ricardo Mendes",
    role: "Produtor de Eventos",
    avatar: "RM",
    content:
      "A Conectai foi essencial no nosso festival. Mais de 2.000 pessoas conectadas ao mesmo tempo sem nenhum problema. Impressionante!",
    rating: 5,
  },
  {
    name: "Fernanda Lima",
    role: "Dona de Bar",
    avatar: "FL",
    content:
      "Meus clientes sempre elogiavam a qualidade do WiFi. Desde que contratamos a Conectai, as avaliações online do bar melhoraram muito.",
    rating: 5,
  },
  {
    name: "Marcos Santos",
    role: "Gerente de Casa Noturna",
    avatar: "MS",
    content:
      "Antes tínhamos muitas reclamações sobre a internet. Agora, nossos clientes compartilham tudo em tempo real. Excelente serviço!",
    rating: 5,
  },
  {
    name: "Amanda Costa",
    role: "Organizadora de Casamentos",
    avatar: "AC",
    content:
      "Em casamentos, os convidados querem postar fotos na hora. A Conectai garantiu que todos pudessem compartilhar os melhores momentos.",
    rating: 5,
  },
  {
    name: "Paulo Ribeiro",
    role: "Diretor de Eventos Corporativos",
    avatar: "PR",
    content:
      "Conferência com 500 participantes e transmissão ao vivo sem falhas. A equipe técnica ficou no local o evento todo. Nota 10!",
    rating: 5,
  },
  {
    name: "Juliana Almeida",
    role: "Proprietária de Restaurante",
    avatar: "JA",
    content:
      "WiFi separado para clientes e para o sistema do restaurante. Organização e segurança que fazem toda diferença no dia a dia.",
    rating: 5,
  },
];

export function Testimonials() {
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

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-32 relative overflow-hidden bg-muted/30"
    >
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div
          className={cn(
            "text-center max-w-3xl mx-auto mb-12 md:mb-16 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            <span className="text-foreground">O que nossos </span>
            <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
              clientes dizem
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Histórias reais de eventos e estabelecimentos que confiam na
            Conectai
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.name}
              className={cn(
                "group relative overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-1 bg-card",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8",
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-12 h-12 text-primary" />
              </div>

              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-secondary text-secondary"
                    />
                  ))}
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {`"${testimonial.content}"`}
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-linear-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground text-sm font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
