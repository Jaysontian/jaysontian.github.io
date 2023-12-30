"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

type NavLinkProps = {
  href: string;
  children: ReactNode;
};

export default function NavLink({href, children} : NavLinkProps) {
    const pathname = `/${usePathname().split("/")[1]}`;
    const active = pathname === href;

    const style = active ? "px-4 py-1 rounded-lg bg-linkHover transition border border-stone-200/75" : 'px-4 py-1 rounded-lg border-2 border-white/0 hover:bg-linkHover transition';

    return(
        <Link className={style}  href={href}>{children}</Link>
    );

}