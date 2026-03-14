"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export function Loader() {
  const [isLoading, setIsLoading] = useState(true);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => setIsHidden(true), 400);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isHidden) return null;

  return (
    <div
      className={`fixed inset-0 z-100 flex items-center justify-center bg-background transition-opacity duration-400 ${
        isLoading ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex flex-col items-center gap-4">
        <div className="relative">
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse" />
          <Image
            src="/images/favicon.png"
            alt="Conectai WiFi"
            width={80}
            height={80}
            className="relative w-16 h-16 md:w-20 md:h-20 animate-pulse"
            priority
          />
        </div>

        <div className="w-6 h-6 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
      </div>
    </div>
  );
}
