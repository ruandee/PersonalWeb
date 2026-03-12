'use client';

import { useEffect, useState, useRef } from 'react';
import './MyCursor.css';

interface CursorPosition {
  x: number;
  y: number;
}

export default function MyCursor() {
  const [position, setPosition] = useState<CursorPosition>({ x: -100, y: -100 });
  const [dotPosition, setDotPosition] = useState<CursorPosition>({ x: -100, y: -100 });
  const [isLocked, setIsLocked] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const mouseRef = useRef<CursorPosition>({ x: -100, y: -100 });
  const dotRef = useRef<CursorPosition>({ x: -100, y: -100 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    // test this :(
    const LERP = 0.12;

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      dotRef.current.x = lerp(dotRef.current.x, mouseRef.current.x, LERP);
      dotRef.current.y = lerp(dotRef.current.y, mouseRef.current.y, LERP);
      setDotPosition({ x: dotRef.current.x, y: dotRef.current.y });
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    const updatePosition = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a, button');
      if (link) {
        setIsLocked(true);
        setTimeout(() => setIsLocked(false), 800);
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
        className={`cursor-dot ${isHovering ? 'hovering' : ''}`}
        style={{
          left: `${dotPosition.x}px`,
          top: `${dotPosition.y}px`,
        }}
      />
    </>
  );
}
