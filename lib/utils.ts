import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export class Links {
  public static readonly COMPANY_NAME = "Conectai WiFi";
  public static readonly WHATSAPP_NUMBER = "5585920019279";
  public static readonly WHATSAPP_URL = `https://wa.me/${Links.WHATSAPP_NUMBER}`;
  public static readonly WHATSAPP_DISPLAY = "(85) 92001-9279";
  public static readonly INSTAGRAM = "https://www.instagram.com/conectai_wifi";
  public static readonly EMAIL = "mailto:comercial@conectaiwifi.com.br";
  public static readonly PHONE = "(85) 92001-9279";
  public static readonly CALL = "tel:+5585920019279";
  public static readonly MAP = "https://www.google.com/maps/place/Fortaleza+-+CE,+Brazil";
}

export function goToLink(url: string) {
  window.open(url, "_blank");
}
