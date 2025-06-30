import Navbar from "@/components/shared/Navbar";

const Layout = ({children}:{children: React.ReactNode}) => {
  return (
    <div>
      <Navbar/>
      {children}
    </div>
  )
}

export default Layout;