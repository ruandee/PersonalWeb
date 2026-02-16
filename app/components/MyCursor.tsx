'use client';

import { useEffect, useState, useRef } from 'react';
import './MyCursor.css';

interface CursorPosition {
  x: number;
  y: number;
}

export default function MyCursor() {
  const [position, setPosition] = useState<CursorPosition>({ x: 0, y: 0 });
  const [isLocked, setIsLocked] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
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
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseover', handleMouseOver);
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`custom-cursor ${isLocked ? 'locked' : ''} ${isHovering ? 'hovering' : ''}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <div className="crosshair-corner top-left"></div>
      <div className="crosshair-corner top-right"></div>
      <div className="crosshair-corner bottom-left"></div>
      <div className="crosshair-corner bottom-right"></div>
      <div className="crosshair-center"></div>
      <div className="lock-ring"></div>
    </div>
  );
}
