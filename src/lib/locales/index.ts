export const locales = ["sv", "no", "fi", "en"] as const;
export const defaultLocale = "sv" satisfies Locale;
export type Locale = (typeof locales)[number];
