// components/layout/Layout.tsx
import Sidebar from './components/Sidebar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-grow p-4">
        {children}
      </main>
    </div>
  );
};

export default Layout;
