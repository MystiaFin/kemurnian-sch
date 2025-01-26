"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SubNavbar() {
  const pathname = usePathname();
  const normalStyle = "py-1 px-2 border-b-2 border-gray-500";
  const activeStyle = "bg-white py-1 px-2 border-b-4 border-red-700";

  return (
    <nav>
      <ul className="bg-gray-300 flex gap-1">
        <li className={pathname === "/" ? activeStyle : normalStyle}>
          <Link href="/">Home</Link>
        </li>
        <li
          className={
            pathname === "/sekolah/kemurnian-1" ? activeStyle : normalStyle
          }
        >
          <Link href="/sekolah/kemurnian-1">Kemurnian</Link>
        </li>
        <li
          className={
            pathname === "/sekolah/kemurnian-2" ? activeStyle : normalStyle
          }
        >
          <Link href="/sekolah/kemurnian-2">Kemurnian II</Link>
        </li>
        <li
          className={
            pathname === "/sekolah/kemurnian-3" ? activeStyle : normalStyle
          }
        >
          <Link href="/sekolah/kemurnian-3">Kemurnian III</Link>
        </li>
      </ul>
    </nav>
  );
}
