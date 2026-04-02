import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Aptitude — Engineering Blog | Common Lab Ventures',
  description:
    'Engineering blog for Aptitude, a vision-first system for learning assembly tasks from human demonstration. By Common Lab Ventures.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen flex flex-col bg-black text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
