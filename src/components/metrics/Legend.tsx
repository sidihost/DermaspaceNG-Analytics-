import { Row, StatusLight, Text } from '@umami/react-zen';
import type { LegendItem } from 'chart.js/auto';
import { colord } from 'colord';

export function Legend({
  items = [],
  onClick,
}: {
  items: any[];
  onClick: (index: LegendItem) => void;
}) {
  if (!items.find(({ text }) => text)) {
    return null;
  }

  return (
    <Row gap="3" wrap="wrap" justifyContent="center" style={{ padding: '12px 0' }}>
      {items.map(item => {
        const { text, fillStyle, hidden } = item;
        const color = colord(fillStyle);

        return (
          <Row
            key={text}
            onClick={() => onClick(item)}
            style={{
              cursor: 'pointer',
              padding: '6px 10px',
              borderRadius: '6px',
              background: hidden ? 'transparent' : 'var(--hover-bg)',
              transition: 'all 0.15s ease',
              opacity: hidden ? 0.4 : 1,
            }}
          >
            <StatusLight color={color.alpha(color.alpha() + 0.2).toHex()}>
              <Text
                size="2"
                weight="medium"
                color={hidden ? 'disabled' : undefined}
                truncate={true}
                style={{ maxWidth: '180px' }}
              >
                {text}
              </Text>
            </StatusLight>
          </Row>
        );
      })}
    </Row>
  );
}
