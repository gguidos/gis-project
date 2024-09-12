import type { Metadata } from "next";
import { TooltipProvider } from '@radix-ui/react-tooltip';
import { NextIntlClientProvider } from "next-intl";
import { Inter as FontSans } from "next/font/google";
import { getMessages, getTranslations } from "next-intl/server";
import ReduxProvider from "./storeProvider";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { MapContextProvider } from "./providers/map-context-provider";
import AppInitializer from './initializers/AppInit';
import MaxWidthWrapper from "@/components/utils/MaxWidthWrapper";
import { cn } from "@/lib/utils";
import "./globals.css";
import { Locale } from "@/lib/locales";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "root" });

  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
  };
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const mainClasses =
    "w-full p-0 items-center justify-center text-left";

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning={true}>
      <body className={cn("grainy min-h-screen antialiased", fontSans.className)}>
        <MapContextProvider>
          <AppInitializer>
              <ReduxProvider>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                  <NextIntlClientProvider messages={messages}>
                    <TooltipProvider>
                      <MaxWidthWrapper className={mainClasses}>
                        {children}
                      </MaxWidthWrapper>
                    </TooltipProvider>
                  </NextIntlClientProvider>
                </ThemeProvider>
              </ReduxProvider>
          </AppInitializer>
        </MapContextProvider>
      </body>
    </html>
  );
}
