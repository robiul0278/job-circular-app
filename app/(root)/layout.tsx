import Footer from "@/components/shared/footer";
import Navbar from "@/components/shared/navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Navbar />
      {children}
      <Footer />
    </main>
  )
}
export default Layout;