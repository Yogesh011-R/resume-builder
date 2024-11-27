import { Navbar } from "@/components/layout/navbar";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default MainLayout;
