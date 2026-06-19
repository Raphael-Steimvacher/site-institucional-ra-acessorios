import { CONTACT_DATA } from "@/features/landing/constants/landing-content";

export function createWhatsappUrl(message: string) {
  return `https://wa.me/${CONTACT_DATA.phone}?text=${encodeURIComponent(message)}`;
}
