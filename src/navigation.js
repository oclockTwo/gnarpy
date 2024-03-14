import { createSharedPathnamesNavigation } from "next-intl/navigation";

export const locales = ["en", "zh", "ja", "es", "de", "fr", "ko", "pt", "vi", "ru", "fi"];
export const localePrefix = "always"; // Default

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales, localePrefix });
