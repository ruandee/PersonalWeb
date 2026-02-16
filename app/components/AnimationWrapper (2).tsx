'use client';

import MyCursor from './MyCursor';

interface AnimationWrapperProps {
  children: React.ReactNode;
}

export default function AnimationWrapper({ children }: AnimationWrapperProps) {
  return (
    <>
      <MyCursor />
      {children}
    </>
  );
}
