import './globals.css';

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html className="h-full">
      <body className="min-h-full flex flex-con">{children}</body>
    </html>
  );
}
