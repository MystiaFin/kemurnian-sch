<<<<<<< HEAD
import logo from "assets/logo.webp";

export default function NavbarDesktop() {
  return (
    <nav className="flex flex-col justify-between w-60 h-[100vh] p-2 bg-primary-red text-white">
      <img src={logo.src} alt="logo" className="pr-1" />
      <ul className="flex flex-col gap-1">
        <li>
          <a href="">
            <button className="w-full bg-dark-red text-left p-2 rounded-md">
              Dashboard
            </button>
          </a>
        </li>
        <li>
          <a href="/admin/p/sliders">
            <button className="w-full hover:bg-semi-dark-red text-left p-2 rounded-md">
              Sliders
            </button>
          </a>
        </li>
        <li>
          <a href="/admin/p/ppdb">
            <button className="w-full hover:bg-semi-dark-red text-left p-2 rounded-md">
              PPDB
            </button>
          </a>
        </li>
        <li>
          <a href="/admin/p/home-news">
            <button className="w-full hover:bg-semi-dark-red text-left p-2 rounded-md">
              News
            </button>
          </a>
        </li>
        <li>
          <a href="#">
            <button className="w-full hover:bg-semi-dark-red text-left p-2 rounded-md">
              School
            </button>
          </a>
        </li>
      </ul>
      <div>
        <button className="w-full bg-red-600 rounded-md py-2">logout</button>
=======
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "assets/logo.webp";

export default function NavbarDesktop() {
  const pathname = usePathname();

  const navItems = [
    { href: "/admin", label: "Dashboard" },
    { href: "/admin/p/sliders", label: "Sliders" },
    { href: "/admin/p/ppdb", label: "PPDB" },
    { href: "/admin/p/news", label: "News" },
    { href: "/admin/p/school", label: "School" },
  ];

  return (
    <nav className="flex flex-col justify-between w-60 h-[100vh] p-2 bg-primary-red text-white">
      <Image src={logo} alt="logo" className="pr-1" />
      <ul className="flex flex-col gap-1">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="block">
              <button
                className={`w-full text-left p-2 rounded-md ${
                  pathname === item.href
                    ? "bg-dark-red"
                    : "hover:bg-semi-dark-red"
                }`}
              >
                {item.label}
              </button>
            </Link>
          </li>
        ))}
      </ul>
      <div>
        <button className="flex justify-center bg-red-500 w-full p-2 rounded-md">
          Logout
        </button>
>>>>>>> f61eca8651540081d47e047888e9c1dbf92e4a38
      </div>
    </nav>
  );
}
