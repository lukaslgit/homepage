import Header from "./Header";
import Footer from './Footer';
import ScrollToTop from "./ScrollToTop";
import { LanguageProvider } from "../utils/LanguageContext";

export default function Layout({ children }) {
  return (
    <>
    <LanguageProvider >
      <Header />
      <ScrollToTop />
      <main>{children}</main>
      <Footer />
    </LanguageProvider>
    </>
  );
}