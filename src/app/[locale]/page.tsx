import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { useTranslations } from "next-intl";
export default function Home() {
  const t = useTranslations("Home");
  const mainClasses =
    "mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center";
  const subMainClasses =
    "mx-auto mb-4 flex max-w-fit items-center justify-center text-center space-x-2 rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50";

  return (
    <>
      <div className={mainClasses}>
        <h1 className="text-5xl, max-w-4xl font-bold md:text-6xl lg:text-7xl ">
          <span className="text-green-600">Get Off</span> the Grid!
        </h1>
        <h1 className="text-5xl, max-w-4xl font-bold md:text-6xl lg:text-7xl">
          {t("welcome", { name: "Ignacio" })}
        </h1>
        <p className="mt-5 max-w-prose text-gray-700 text-3xl sm:text-3lg">
          The Solar Panel Calculator assists you finding the best solution for
          your power needs.
        </p>
        <Link
          className={buttonVariants({
            size: "lg",
            className: "mt-5",
          })}
          href="/calculator"
          target="_blank"
        >
          Get Started <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </>
  );
}
