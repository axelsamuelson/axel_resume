"use client";

import { useEffect, useState } from "react";

export default function SideNav({ items }: { items: { href: string; label: string }[] }) {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const sections = items
      .map((i) => document.querySelector<HTMLElement>(i.href))
      .filter((el): el is HTMLElement => Boolean(el));
    const onScroll = () => {
      const y = window.scrollY + window.innerHeight * 0.3;
      let current = "";
      for (const s of sections) if (s.offsetTop <= y) current = `#${s.id}`;
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [items]);

  return (
    <nav className="side-nav" aria-label="Sections">
      {items.map((n) => (
        <a key={n.href} href={n.href} aria-current={active === n.href ? "true" : undefined}>
          {n.label}
        </a>
      ))}
    </nav>
  );
}
