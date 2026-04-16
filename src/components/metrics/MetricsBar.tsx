import type { GridProps } from '@umami/react-zen';
import type { ReactNode } from 'react';

export interface MetricsBarProps extends GridProps {
  children?: ReactNode;
}

export function MetricsBar({ children, ...props }: MetricsBarProps) {
  return (
    <div
      className="metrics-grid-responsive"
      style={{
        width: '100%',
      }}
      {...props}
    >
      {children}
    </div>
  );
}
