import Sidebar from "./components/sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kemurnian Admin",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-grow p-4">{children}</main>
    </div>
  );
};

export default Layout;
