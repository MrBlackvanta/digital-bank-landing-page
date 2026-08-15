import type { StaticImageData } from "next/image";

export type SvgIcon = React.ComponentType<React.SVGProps<SVGSVGElement>>;

export type Link = {
  label: string;
  href: string;
};

export type SocialLink = Link & {
  Icon: SvgIcon;
};

export type Feature = {
  title: string;
  description: string;
  Icon: SvgIcon;
};

export type Article = {
  author: string;
  title: string;
  excerpt: string;
  image: StaticImageData;
};
