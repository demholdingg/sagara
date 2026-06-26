import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "navy" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  className?: string;
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  size = "md",
  href,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    primary:
      "bg-[#064e3b] text-white hover:bg-[#043d2f] shadow-sm hover:shadow-md",
    secondary:
      "border-2 border-[#064e3b] text-[#064e3b] bg-transparent hover:bg-[#064e3b] hover:text-white",
    navy: "bg-[#1e3a5f] text-white hover:bg-[#152b47] shadow-sm hover:shadow-md",
    ghost: "text-slate-600 hover:bg-slate-100 hover:text-slate-900",
  };

  const sizes = {
    sm: "px-4 py-1.5 text-xs",
    md: "px-6 py-2.5 text-sm",
    lg: "px-8 py-3.5 text-base",
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
}
