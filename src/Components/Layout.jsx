import Header from "./Header";
import Footer from './Footer';
import ScrollToTop from "./ScrollToTop";
import { LanguageProvider } from "../utils/LanguageContext";

export default function Layout({ children }) {
  return (
    <>
    <LanguageProvider >
      <div className="layout-wrapper">
        <Header />
        <ScrollToTop />
        <main className="layout-content">{children}</main>
        <Footer />
      </div>
    </LanguageProvider>
    </>
  );
}