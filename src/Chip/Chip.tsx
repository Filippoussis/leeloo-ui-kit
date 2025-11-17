import type React from 'react';

interface Props {
  children: React.ReactNode;
}

export const Chip = ({ children }: Props) => {
  return (
    <span className="rounded-md p-2 border-2 border-slate-500">{children}</span>
  );
};
