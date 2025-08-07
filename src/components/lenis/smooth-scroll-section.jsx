"use client";

import { useEffect, useState } from "react";
import Lenis from "lenis";

export default function SmoothScrollSection() {
  const [lenisRef, setLenis] = useState(null);
  const [rafState, setRaf] = useState(null);

  useEffect(() => {
    const scroller = new Lenis();
    let rf;

    function raf(time) {
      scroller.raf(time);
      requestAnimationFrame(raf);
    }
    rf = requestAnimationFrame(raf);
    setRaf(rf);
    setLenis(scroller);

    return () => {
      if (lenisRef && rafState) {
        cancelAnimationFrame(rafState);
        lenisRef.destroy();
      }
    };
  }, []);

  return <section></section>;
}
