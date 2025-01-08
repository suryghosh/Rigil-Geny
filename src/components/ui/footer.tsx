"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";
import { createNoise3D } from "simplex-noise";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}: {
  children?: any;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
  [key: string]: any;
}) => {
  const noise = createNoise3D();
  let w: number,
    h: number,
    nt: number,
    i: number,
    x: number,
    ctx: any,
    canvas: any;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const getSpeed = () => {
    switch (speed) {
      case "slow":
        return 0.001;
      case "fast":
        return 0.002;
      default:
        return 0.001;
    }
  };

  const init = () => {
    canvas = canvasRef.current;
    ctx = canvas.getContext("2d");
    w = ctx.canvas.width = window.innerWidth;
    h = ctx.canvas.height = window.innerHeight/2;
    ctx.filter = `blur(${blur}px)`;
    nt = 0;
    window.onresize = function () {
      w = ctx.canvas.width = window.innerWidth;
      h = ctx.canvas.height = window.innerHeight;
      ctx.filter = `blur(${blur}px)`;
    };
    render();
  };

  const waveColors = colors ?? [
    "#38bdf8",
    "#818cf8",
    "#c084fc",
    "#e879f9",
    "#22d3ee",
  ];
  const drawWave = (n: number) => {
    nt += getSpeed();
    for (i = 0; i < n; i++) {
      ctx.beginPath();
      ctx.lineWidth = waveWidth || 50;
      ctx.strokeStyle = waveColors[i % waveColors.length];
      for (x = 0; x < w; x += 5) {
        var y = noise(x / 800, 0.3 * i, nt) * 100;
        ctx.lineTo(x, y + h * 0.5); // adjust for height, currently at 50% of the container
      }
      ctx.stroke();
      ctx.closePath();
    }
  };

  let animationId: number;
  const render = () => {
    ctx.fillStyle = backgroundFill || "black";
    ctx.globalAlpha = waveOpacity || 0.5;
    ctx.fillRect(0, 0, w, h);
    drawWave(5);
    animationId = requestAnimationFrame(render);
  };

  useEffect(() => {
    init();
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    // I'm sorry but i have got to support it on safari.
    setIsSafari(
      typeof window !== "undefined" &&
        navigator.userAgent.includes("Safari") &&
        !navigator.userAgent.includes("Chrome")
    );
  }, []);

  return (
    <div
      className={cn(
        "h-[50vh] flex flex-col items-center justify-center",
        containerClassName
      )}
      
    >
        
      <canvas
        className="absolute inset-0 z-0"
        ref={canvasRef}
        id="canvas"
        style={{
          ...(isSafari ? { filter: `blur(${blur}px)` } : {}),
        }}
      ></canvas>
      <div className={cn("relative z-10", className)} {...props}>
        {children}
        <div className="flex flex-col justify-center items-center w-[100vw]">
            <h1 className="text-8xl font-bold mb-6">
                Rigil Geny
            </h1>

            <p className="text-2xl w-[60vw] text-center mb-6"> With decades of expertise, strategic partnerships, and a NABL-certified lab, the company delivers precision engineering to empower industries worldwide.</p>
            <div className="flex flex-row justify-between items-center mt-6 w-[100vw] bottom-0">
                <div className="text-left ml-2 text-xl space-y-1">
                    <h4>Address: G-282, G Block, Sector 63, Noida, Uttar Pradesh 201301</h4>
                    <h4>Email: info@rigilgeny.com</h4>
                    <h4>Business Hours: 08:00 AM - 06:00 PM</h4>
                </div>
                <div className="flex flex-row space-x-4 ">
                  <FaInstagram className="w-8 h-8"/>
                  <FaFacebook className="w-8 h-8"/>
                  <FaTwitter className="w-8 h-8"/>
                  <FaLinkedin className="w-8 h-8"/>
                </div>
            </div>
            <div className="flex flex-row justify-between items-center mt-6 w-[100vw] bottom-0">
                <div className="text-left ml-2 text-xl space-y-1 text-gray-500">
                    <h4>© 2025 Rigi Geny. All rights reserved.</h4>
                </div>
                <div className="flex flex-row space-x-8 ">
                  <h4 className="text-xl  text-gray-500">Terms of use</h4>
                  <h4 className="text-xl  text-gray-500">Privacy policy</h4>
                </div>
            </div>

        </div>

      </div>
    </div>
  );
};
