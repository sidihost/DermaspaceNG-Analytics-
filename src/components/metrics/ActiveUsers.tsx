import { StatusLight, Text } from '@umami/react-zen';
import { useMemo } from 'react';
import { LinkButton } from '@/components/common/LinkButton';
import { useActyiveUsersQuery, useMessages } from '@/components/hooks';

export function ActiveUsers({
  websiteId,
  value,
  refetchInterval = 60000,
}: {
  websiteId: string;
  value?: number;
  refetchInterval?: number;
}) {
  const { formatMessage, labels } = useMessages();
  const { data } = useActyiveUsersQuery(websiteId, { refetchInterval });

  const count = useMemo(() => {
    if (websiteId) {
      return data?.visitors || 0;
    }

    return value !== undefined ? value : 0;
  }, [data, value, websiteId]);

  if (count === 0) {
    return null;
  }

  return (
    <LinkButton
      href={`/websites/${websiteId}/realtime`}
      variant="quiet"
      style={{
        background: 'var(--success-light)',
        borderRadius: '20px',
        padding: '6px 14px',
        transition: 'all 0.2s ease',
      }}
    >
      <StatusLight variant="success">
        <span
          className="live-indicator"
          style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
        >
          <Text size="2" weight="bold" style={{ color: '#16a34a' }}>
            {count} {formatMessage(labels.online)}
          </Text>
        </span>
      </StatusLight>
    </LinkButton>
  );
}
