"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Badge from "./Badge";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
  isMainHeading?: boolean;
}

export default function SectionHeading({
  badge,
  title,
  description,
  centered = false,
  className = "",
  isMainHeading = false,
}: SectionHeadingProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const elements = containerRef.current?.children;
      if (!elements) return;

      gsap.from(elements, {
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: containerRef },
  );

  const HeadingTag = isMainHeading ? "h1" : "h2";

  return (
    <div
      ref={containerRef}
      className={`${centered ? "text-center" : "text-left"} ${className} space-y-4`}
    >
      {badge && <Badge variant="primary">{badge}</Badge>}
      <HeadingTag
        className={`${
          isMainHeading ? "text-4xl sm:text-5xl" : "text-3xl sm:text-4xl"
        } font-semibold tracking-tight text-slate-950`}
      >
        {title}
      </HeadingTag>
      {description && (
        <p
          className={`${
            centered ? "mx-auto" : ""
          } max-w-3xl text-lg leading-8 text-slate-700`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
