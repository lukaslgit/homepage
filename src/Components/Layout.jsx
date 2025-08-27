import Header from "./Header";
import Footer from './Footer';
import ScrollToTop from "./ScrollToTop";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <ScrollToTop />
      <main>{children}</main>
      <Footer />
    </>
  );
}