import './globals.css';

export const metadata = {
  title: 'LoveLines',
  description: 'Real stories. Real love.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
