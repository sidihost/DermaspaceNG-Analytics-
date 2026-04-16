import { Column, FloatingTooltip, Row, StatusLight, Text } from '@umami/react-zen';
import type { ReactNode } from 'react';

export function ChartTooltip({
  title,
  color,
  value,
}: {
  title?: string;
  color?: string;
  value?: ReactNode;
}) {
  return (
    <FloatingTooltip>
      <Column
        gap="2"
        style={{
          padding: '10px 14px',
          borderRadius: '8px',
          background: 'var(--card-bg)',
          border: '1px solid var(--card-border)',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        }}
      >
        {title && (
          <Row alignItems="center">
            <Text size="1" style={{ color: 'var(--font-color-muted)', fontWeight: 500 }}>
              {title}
            </Text>
          </Row>
        )}
        <Row alignItems="center">
          <StatusLight color={color}>
            <Text size="2" weight="bold">
              {value}
            </Text>
          </StatusLight>
        </Row>
      </Column>
    </FloatingTooltip>
  );
}
