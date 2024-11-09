"use client";

import { useEffect, useRef } from "react";
import { PoseEngine } from "@geenee/bodyprocessors";
import { CustomRenderer } from "./CustomRenderer";
import { geeneeToken } from "../utils/geenee-config";

export default function ARExperience() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const engine = new PoseEngine();
    const renderer = new CustomRenderer(
      containerRef.current,
      "crop",
      true,
      "path/to/your/3d/model.glb"
    );

    async function setupAR() {
      await Promise.all([
        engine.addRenderer(renderer),
        engine.init({ token: geeneeToken }),
      ]);
      await engine.setup({ size: { width: 1920, height: 1080 }, rear: false });
      await engine.start();
    }

    setupAR();

    return () => {
      engine.stop();
    };
  }, []);

  return <div ref={containerRef} style={{ width: "100%", height: "100vh" }} />;
}
