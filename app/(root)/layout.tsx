import Footer from "@/components/shared/footer";
import Navbar from "@/components/shared/navbar";

const AdminDashboard = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Navbar />
      {children}
      <Footer />
    </main>
  )
}
export default AdminDashboard;