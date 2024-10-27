// src/app/admin/layout.tsx
import { useEffect, useState } from "react";
import { onAuthStateChanged, getIdTokenResult } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import Sidebar from "./components/sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kemurnian Admin",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const tokenResult = await getIdTokenResult(user);
        if (tokenResult.claims.admin) {
          setIsAuthenticated(true);
          setIsAdmin(true);
        } else {
          setIsAuthenticated(true);
          setIsAdmin(false);
        }
      } else {
        window.location.href = "/admin-login";
      }
    });

    return () => unsubscribe();
  }, []);

  if (!isAuthenticated) {
    return <div>Loading...</div>;
  }

  if (!isAdmin) {
    return <div>Access Denied</div>;
  }

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-grow p-4">{children}</main>
    </div>
  );
};

export default Layout;
