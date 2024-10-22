// admin/layout.tsx
import Sidebar from './components/Sidebar'; // Adjust the path if necessary
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const AdminLayout = ({ children }: LayoutProps) => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <main style={{ flex: 1, padding: '20px' }}>
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;
