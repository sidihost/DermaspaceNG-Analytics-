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
          padding: '8px 12px',
          borderRadius: '10px',
          backdropFilter: 'blur(12px)',
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.12)',
        }}
      >
        {title && (
          <Row alignItems="center">
            <Text size="1" style={{ opacity: 0.7, fontWeight: 500 }}>
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
