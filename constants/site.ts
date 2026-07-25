export const SITE_NAME = "Web Dev";
export const SITE_DESCRIPTION =
  "Web development, business automation, website care, and digital advertising for growing businesses.";

export const CONTACT = {
  email: "teamph878@gmail.com",
  phone: "+639054043830",
  emailHref: "mailto:teamph878@gmail.com",
  phoneHref: "tel:+639054043830",
} as const;

export const NAV_LINKS = [
  { href: "/services", label: "Services" },
  { href: "/why-us", label: "Why Us" },
  { href: "/process", label: "Process" },
  { href: "/contact", label: "Contact Us" },
] as const;

export const FOOTER_LINKS = [
  { href: "/", label: "Home" },
  ...NAV_LINKS,
  { href: "/start-project", label: "Start a Project" },
] as const;
