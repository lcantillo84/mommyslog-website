"use client";

import { useEffect, useRef } from "react";

type Direction = "up" | "left" | "right" | "pop" | "fade";

interface Props {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}

export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  className = "",
  as: Tag = "div",
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add("visible"), delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const AnyTag = Tag as any;
  return (
    <AnyTag ref={ref} className={`sr sr-${direction} ${className}`}>
      {children}
    </AnyTag>
  );
}
