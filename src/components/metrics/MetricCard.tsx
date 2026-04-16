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
        padding: 'clamp(12px, 3vw, 20px)',
        borderRadius: '12px',
        minHeight: 'clamp(100px, 15vw, 130px)',
        gap: '8px',
      }}
    >
      <Row alignItems="center" justifyContent="space-between" gap="2">
        {showLabel && (
          <Text
            weight="bold"
            wrap="nowrap"
            style={{
              fontSize: 'clamp(11px, 2vw, 13px)',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              opacity: 0.7,
            }}
          >
            {label}
          </Text>
        )}
        {icon && (
          <div
            style={{
              opacity: 0.5,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
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
          fontSize: 'clamp(24px, 5vw, 36px)',
          lineHeight: 1.1,
          fontVariantNumeric: 'tabular-nums',
        }}
      >
        <AnimatedDiv title={value?.toString()}>{props?.x?.to(x => formatValue(x))}</AnimatedDiv>
      </Text>

      {showChange && (
        <Row alignItems="center" style={{ marginTop: '4px' }}>
          <ChangeLabel value={change} title={formatValue(change)} reverseColors={reverseColors}>
            <AnimatedDiv>{changeProps?.x?.to(x => `${Math.abs(~~x)}%`)}</AnimatedDiv>
          </ChangeLabel>
        </Row>
      )}
    </Column>
  );
};
