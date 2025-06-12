import HomeBanner from "@/components/common/HomeBanner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="px-8">
      <HomeBanner />
      {children}
    </div>
  );
}
