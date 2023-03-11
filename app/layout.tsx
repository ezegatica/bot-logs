import './globals.css';
import Navbar from '@components/Navbar';
export const metadata = {
  title: "<Eze page='logs'/>",
  description: 'Sitio web sobre los logs del bot de Ezequiel Gatica'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
