import { useEffect, useState } from "react";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Solumina" },
  ];
}

export default function Home() {
    const [time, setTime] = useState(0);

    useEffect(() => {
        let animationId;
        let lastTime = 0;

        const animate = (currentTime) => {
            if (currentTime - lastTime >= 16) { // ~60fps
                setTime(prevTime => prevTime + 0.03);
                lastTime = currentTime;
            }
            animationId = requestAnimationFrame(animate);
        };

        animationId = requestAnimationFrame(animate);

        return () => {
            if (animationId) {
                cancelAnimationFrame(animationId);
            }
        };
    }, []);

    const gradient1X = 70 + Math.sin(time * 0.4) * 4;
    const gradient1Y = 40 + Math.cos(time * 0.3) * 3;
    const gradient1Size = 120 + Math.sin(time * 0.5) * 8;

    const gradient2X = 30 + Math.cos(time * 0.35) * 3;
    const gradient2Y = 60 + Math.sin(time * 0.45) * 3;
    const gradient2Size = 100 + Math.cos(time * 0.4) * 6;

    const gradient3X = 50 + Math.sin(time * 0.25) * 3;
    const gradient3Y = 30 + Math.cos(time * 0.55) * 4;
    const gradient3Size = 90 + Math.sin(time * 0.3) * 7;

    const gradient4X = 80 + Math.cos(time * 0.2) * 5;
    const gradient4Y = 70 + Math.sin(time * 0.35) * 4;
    const gradient4Size = 110 + Math.cos(time * 0.25) * 9;

    return (
        <main
            className="w-screen h-screen flex items-center justify-center transition-all duration-100 ease-out"
            style={{
                background: `
          radial-gradient(ellipse ${gradient1Size}% 80% at ${gradient1X}% ${gradient1Y}%, rgba(255, 20, 147, 0.15), transparent 50%),
          radial-gradient(ellipse ${gradient2Size}% 60% at ${gradient2X}% ${gradient2Y}%, rgba(0, 255, 255, 0.12), transparent 60%),
          radial-gradient(ellipse ${gradient3Size}% 70% at ${gradient3X}% ${gradient3Y}%, rgba(138, 43, 226, 0.18), transparent 65%),
          radial-gradient(ellipse ${gradient4Size}% 50% at ${gradient4X}% ${gradient4Y}%, rgba(255, 215, 0, 0.08), transparent 40%),
          #000000
        `
            }}
        >
            <h1 className="text-3xl text-white">Solumina.</h1>
        </main>
    );
}