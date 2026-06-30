import type { StaticImageData } from "next/image";

export type WorkCategory = "sacadas" | "fachadas" | "banheiro";

export type WorkSlide = {
  id: string;
  title: string;
  tag: string;
  category: WorkCategory;
  description: string;
  image: StaticImageData;
  specs: string[];
};

export type ContactInfo = {
  phone: string;
  phoneFormatted: string;
  address: string;
  addressMapUrl: string;
  hours: string;
  email: string;
};

export type ServiceCard = {
  title: string;
  description: string;
  specs: string[];
};

export type MainService = {
  title: string;
  description: string;
  icon: "layers" | "building" | "columns" | "shield";
  colorClassName: string;
};

export type GlassColorKey = "incolor" | "verde" | "fume";

export type GlassColor = {
  key: GlassColorKey;
  name: string;
};

export type BudgetProduct = {
  key: string;
  name: string;
  pricesPerSqm: Record<GlassColorKey, number>;
};
