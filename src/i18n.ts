"server-only";

import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { type AbstractIntlMessages } from "next-intl";
import { locales, type Locale } from "@/lib/locales";

const dictionaryImports = {
  sv: () => import("./dictionaries/sv.json"),
  no: () => import("./dictionaries/no.json"),
  fi: () => import("./dictionaries/fi.json"),
  en: () => import("./dictionaries/en.json"),
} as const satisfies Record<
  Locale,
  () => Promise<{ default: AbstractIntlMessages }>
>;

export function isValidLocale(locale: unknown): locale is Locale {
  return locales.some((l) => l === locale);
}

export default getRequestConfig(async (params) => {
  const baseLocale = new Intl.Locale(params.locale).baseName;
  if (!isValidLocale(baseLocale)) notFound();

  const messages = (await dictionaryImports[baseLocale]()).default;
  return {
    messages,
  };
});
