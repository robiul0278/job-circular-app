import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Navbar />
      {children}
      <Footer />
    </main>
  )
}
export default RootLayout;