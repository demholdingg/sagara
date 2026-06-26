import React from "react";

interface BadgeProps {
  variant?: "primary" | "navy" | "accent" | "gray" | "outline";
  className?: string;
  children: React.ReactNode;
}

export default function Badge({
  variant = "gray",
  className = "",
  children,
}: BadgeProps) {
  const baseStyles =
    "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider";

  const variants = {
    primary: "bg-[#064e3b] text-white",
    navy: "bg-[#1e3a5f] text-white",
    accent: "bg-[#f59e0b] text-white", // Amber/Gold dari palette v2.0
    gray: "bg-slate-200 text-slate-700",
    outline: "border border-slate-300 text-slate-600 bg-transparent",
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  return <span className={combinedClassName}>{children}</span>;
}
