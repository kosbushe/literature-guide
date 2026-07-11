"use client";

import type { ReactNode } from "react";
import { track, type GuideEvent } from "@/lib/analytics";

type Props = {
  href: string;
  event: GuideEvent;
  children: ReactNode;
  className?: string;
  external?: boolean;
};

export function EventLink({ href, event, children, className = "button", external = false }: Props) {
  return (
    <a
      className={className}
      href={href}
      onClick={() => track(event, { href })}
      rel={external ? "noreferrer" : undefined}
      target={external ? "_blank" : undefined}
    >
      {children}
    </a>
  );
}
