"use client";

import { ReactLenis } from "@studio-freight/react-lenis";
import { ReactNode } from "react";

/**
 * Komponen SmoothScroll menggunakan Lenis untuk memberikan pengalaman scroll yang halus.
 * Konfigurasi lerp dan duration disesuaikan agar terasa responsif namun tetap elegan.
 */
export default function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 1.5,
        smoothWheel: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}
