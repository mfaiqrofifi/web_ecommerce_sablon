import { siteConfig } from "@/data/site";

export const whatsappNumber = siteConfig.whatsapp;

export function createWhatsAppLink(message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function createProductOrderLink(productName: string) {
  return createWhatsAppLink(
    `Halo Lancar Clothing, saya mau order ${productName}. Bisa info detail harga dan bahan?`,
  );
}
