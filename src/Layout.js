import { Navbar } from "./Components/Navbar";





const Layout = ({ children }) => {


  return (
    <main className="relative">
      
      <Navbar/>
      {children}

    </main>
  );
};

export default Layout;
