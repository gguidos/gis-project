import TopBar from "./components/topbar";
import ToolMenu from "./components/toolMenu";
import RightMenu from "./components/right-menu";
import { GoogleMapProvider } from "../../providers/google-map-provider";
export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const mainClasses = "flex flex-col h-screen";

  return (
    <GoogleMapProvider>

    <section className={mainClasses}>
      
        <div className="">
          <section>
            <TopBar />
          </section>
        </div>
      <div className='flex'>
        <section className="flex border-b border-b-border border-b-4 border-r-border border-r-4">
          <ToolMenu />
        </section>
        {/* Left Menu or Content */}
        <section className="basis-full z-0 border-b border-b-border border-b-4">
          {children}
        </section>
        <section className="flex border-b border-b-border border-b-4 border-l-border border-l-4">
          {/* Right Section */}
          <RightMenu />
        </section>
      </div>
    </section>
    </GoogleMapProvider>
  );
}