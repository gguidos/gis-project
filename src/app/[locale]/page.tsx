import Hero from './components/Hero'
import Features from './components/Features';
import { useTranslations } from "next-intl";
export default function Home() {
  const t = useTranslations("Home");
  const mainClasses =
    "flex flex-col h-screen items-center text-center bg-white";
  const subMainClasses =
    "mx-auto mb-4 flex max-w-fit items-center justify-center text-center space-x-2 rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50";

  return (
    <div className="">
      <div className="w-[1440px] bg-red-500 py-8 border-b border-b-border">
        topbar
      </div>
      <div className={mainClasses}>
      <Hero />
      <Features />
      </div>
    </div>
  );
}
