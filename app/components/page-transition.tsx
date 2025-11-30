"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function PageTransition({ children }: Props) {
  const pathname = usePathname();

  // key={pathname} forces this wrapper to remount on every route change,
  // which restarts the CSS animation.
  return (
    <div key={pathname} className="animate-page-fade-in">
      {children}
    </div>
  );
}
