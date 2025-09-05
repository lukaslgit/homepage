import Header from "./Header";
import Footer from './Footer';
import ScrollToTop from "./ScrollToTop";
import { LanguageProvider } from "../utils/LanguageContext";
import { NotificationProvider } from '../utils/NotificationContext';

export default function Layout({ children }) {
  return (
    <>
    <LanguageProvider >
      <NotificationProvider>
        <div className="layout-wrapper">
          <Header />
          <ScrollToTop />
          <main className="layout-content">{children}</main>
          <Footer />
        </div>
      </NotificationProvider>
    </LanguageProvider>
    </>
  );
}