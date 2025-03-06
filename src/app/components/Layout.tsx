import { Nav } from "../navigation";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <Nav />
      <div className="pt-16">
        {children}
      </div>
    </div>
  );
};

export default Layout;