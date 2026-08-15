import confetti from "@/assets/images/image-confetti.webp";
import currency from "@/assets/images/image-currency.webp";
import plane from "@/assets/images/image-plane.webp";
import restaurant from "@/assets/images/image-restaurant.webp";
import {
  ApiIcon,
  BudgetingIcon,
  FacebookIcon,
  InstagramIcon,
  OnboardingIcon,
  OnlineBankingIcon,
  PinterestIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@/components/icons";
import type { Article, Feature, Link, SocialLink } from "./data.types";

export const navLinks: Link[] = [
  { label: "Home", href: "#" },
  { label: "About", href: "#" },
  { label: "Contact", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Careers", href: "#" },
];

export const footerLinks: Link[] = [
  { label: "About Us", href: "#" },
  { label: "Contact", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Careers", href: "#" },
  { label: "Support", href: "#" },
  { label: "Privacy Policy", href: "#" },
];

export const socialLinks: SocialLink[] = [
  { label: "Facebook", href: "#", Icon: FacebookIcon },
  { label: "YouTube", href: "#", Icon: YoutubeIcon },
  { label: "Twitter", href: "#", Icon: TwitterIcon },
  { label: "Pinterest", href: "#", Icon: PinterestIcon },
  { label: "Instagram", href: "#", Icon: InstagramIcon },
];

export const features: Feature[] = [
  {
    title: "Online Banking",
    description:
      "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
    Icon: OnlineBankingIcon,
  },
  {
    title: "Simple Budgeting",
    description:
      "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
    Icon: BudgetingIcon,
  },
  {
    title: "Fast Onboarding",
    description:
      "We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
    Icon: OnboardingIcon,
  },
  {
    title: "Open API",
    description:
      "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
    Icon: ApiIcon,
  },
];

export const articles: Article[] = [
  {
    author: "Claire Robinson",
    title: "Receive money in any currency with no fees",
    excerpt:
      "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …",
    image: currency,
  },
  {
    author: "Wilson Hutton",
    title: "Treat yourself without worrying about money",
    excerpt:
      "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
    image: restaurant,
  },
  {
    author: "Wilson Hutton",
    title: "Take your Digitalbank card wherever you go",
    excerpt:
      "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even ...",
    image: plane,
  },
  {
    author: "Claire Robinson",
    title: "Our invite-only Beta accounts are now live!",
    excerpt:
      "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through ...",
    image: confetti,
  },
];
