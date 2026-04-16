import { Icon, Row, type RowProps, Text } from '@umami/react-zen';
import type { ReactNode } from 'react';
import { ArrowRight } from '@/components/icons';

export function ChangeLabel({
  value,
  size,
  reverseColors,
  children,
  ...props
}: {
  value: number;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  title?: string;
  reverseColors?: boolean;
  showPercentage?: boolean;
  children?: ReactNode;
} & RowProps) {
  const positive = value > 0;
  const negative = value < 0;
  const neutral = value === 0 || Number.isNaN(value);
  const good = reverseColors ? negative : positive;

  const getClassName = () => {
    if (neutral) return 'change-label-neutral';
    if (good) return 'change-label-positive';
    return 'change-label-negative';
  };

  return (
    <Row {...props} className={getClassName()} alignItems="center" alignSelf="flex-start" gap="1">
      {!neutral && (
        <Icon rotate={positive ? -90 : 90} size={size || 'xs'}>
          <ArrowRight />
        </Icon>
      )}
      <Text style={{ fontSize: 'inherit', fontWeight: 'inherit' }}>{children || value}</Text>
    </Row>
  );
}
