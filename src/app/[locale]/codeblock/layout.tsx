export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const mainClasses = "flex flex-col h-screen";

  return (
    <section className={mainClasses}>
        <div className="flex border-b border-b-border border-b-4">
          <section>
            Topbar
          </section>
        </div>
      <div className='flex'>
        {/* Content */}
        <section className="basis-full z-0 border-b border-b-border border-b-4">
          {children}
        </section>
      </div>
    </section>
  );
}