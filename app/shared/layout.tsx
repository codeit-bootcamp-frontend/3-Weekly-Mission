import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/Navbar';

export const metadata = {
  title: 'Linkbrary',
  description: 'CodeIt FE Sprint',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
