import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function openCalendly() {
  (window as any).Calendly?.initPopupWidget({
    url: "https://calendly.com/produxtech/ricky-gordon-clone-1?hide_gdpr_banner=1",
  });
}
