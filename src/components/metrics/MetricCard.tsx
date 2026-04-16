import { useSpring } from '@react-spring/web';
import { Column, Row, Text } from '@umami/react-zen';
import { AnimatedDiv } from '@/components/common/AnimatedDiv';
import { ChangeLabel } from '@/components/metrics/ChangeLabel';
import { formatNumber } from '@/lib/format';

export interface MetricCardProps {
  value: number;
  previousValue?: number;
  change?: number;
  label?: string;
  reverseColors?: boolean;
  formatValue?: (n: any) => string;
  showLabel?: boolean;
  showChange?: boolean;
  icon?: React.ReactNode;
}

export const MetricCard = ({
  value = 0,
  change = 0,
  label,
  reverseColors = false,
  formatValue = formatNumber,
  showLabel = true,
  showChange = false,
  icon,
}: MetricCardProps) => {
  const diff = value - change;
  const pct = ((value - diff) / diff) * 100;
  const props = useSpring({
    x: Number(value) || 0,
    from: { x: 0 },
    config: { tension: 120, friction: 14 },
  });
  const changeProps = useSpring({
    x: Number(pct) || 0,
    from: { x: 0 },
    config: { tension: 120, friction: 14 },
  });

  return (
    <Column
      justifyContent="space-between"
      className="metric-card-enhanced"
      style={{
        padding: 'clamp(14px, 3vw, 20px)',
        minHeight: 'clamp(110px, 18vw, 140px)',
        gap: '10px',
      }}
    >
      <Row alignItems="center" justifyContent="space-between" gap="2">
        {showLabel && (
          <Text
            wrap="nowrap"
            style={{
              fontSize: 'clamp(12px, 2vw, 13px)',
              fontWeight: 500,
              color: 'var(--font-color-muted)',
              letterSpacing: '0.01em',
            }}
          >
            {label}
          </Text>
        )}
        {icon && (
          <div
            style={{
              color: 'var(--primary-color)',
              opacity: 0.6,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            {icon}
          </div>
        )}
      </Row>

      <Text
        weight="bold"
        wrap="nowrap"
        className="metric-value-gradient"
        style={{
          fontSize: 'clamp(28px, 6vw, 42px)',
          lineHeight: 1,
          fontVariantNumeric: 'tabular-nums',
          letterSpacing: '-0.02em',
        }}
      >
        <AnimatedDiv title={value?.toString()}>{props?.x?.to(x => formatValue(x))}</AnimatedDiv>
      </Text>

      {showChange && (
        <Row alignItems="center">
          <ChangeLabel value={change} title={formatValue(change)} reverseColors={reverseColors}>
            <AnimatedDiv>{changeProps?.x?.to(x => `${Math.abs(~~x)}%`)}</AnimatedDiv>
          </ChangeLabel>
        </Row>
      )}
    </Column>
  );
};
