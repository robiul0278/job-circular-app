import ScrollToTopButton from "@/components/ScrollToTopButton";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Navbar />
      {children}
      <Footer />
        <ScrollToTopButton/>
        <WhatsAppButton/>
    </main>
  )
}
export default RootLayout;