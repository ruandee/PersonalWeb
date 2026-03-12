'use client';

import { useEffect, useState, useRef } from 'react';
import './MyCursor.css';

interface CursorPosition {
  x: number;
  y: number;
}

export default function MyCursor() {
  const [position, setPosition] = useState<CursorPosition>({ x: -100, y: -100 });
  const [ringPosition, setRingPosition] = useState<CursorPosition>({ x: -100, y: -100 });
  const [isLocked, setIsLocked] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const mouseRef = useRef<CursorPosition>({ x: -100, y: -100 });
  const cursorRef = useRef<CursorPosition>({ x: -100, y: -100 });
  const ringRef = useRef<CursorPosition>({ x: -100, y: -100 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const LERP_CURSOR = 0.12;
    const LERP_RING = 0.08;
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      cursorRef.current.x = lerp(cursorRef.current.x, mouseRef.current.x, LERP_CURSOR);
      cursorRef.current.y = lerp(cursorRef.current.y, mouseRef.current.y, LERP_CURSOR);
      setPosition({ x: cursorRef.current.x, y: cursorRef.current.y });

      ringRef.current.x = lerp(ringRef.current.x, mouseRef.current.x, LERP_RING);
      ringRef.current.y = lerp(ringRef.current.y, mouseRef.current.y, LERP_RING);
      setRingPosition({ x: ringRef.current.x, y: ringRef.current.y });

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    const updatePosition = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseDown = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a, button');
      if (link) {
        setIsLocked(true);
        setIsClicking(true);
        setTimeout(() => setIsLocked(false), 800);
        setTimeout(() => setIsClicking(false), 1000);
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a, button');
      setIsHovering(!!link);
    };

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseover', handleMouseOver);
    document.body.style.cursor = 'none';

    return () => {
      cancelAnimationFrame(rafRef.current);
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseover', handleMouseOver);
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <>
      <div
        className={`custom-cursor ${isLocked ? 'locked' : ''} ${isHovering ? 'hovering' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      >
        <div className="crosshair-corner top-left" />
        <div className="crosshair-corner top-right" />
        <div className="crosshair-corner bottom-left" />
        <div className="crosshair-corner bottom-right" />
        <div className="crosshair-center" />
        <div className="lock-ring" />
      </div>

      <div
        className={`cursor-ring ${isHovering ? 'hovering' : ''} ${isClicking ? 'clicking' : ''}`}
        style={{
          left: `${ringPosition.x}px`,
          top: `${ringPosition.y}px`,
        }}
      />
    </>
  );
}