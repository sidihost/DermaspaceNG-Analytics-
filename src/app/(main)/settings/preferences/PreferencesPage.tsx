'use client';
import { Column, Text } from '@umami/react-zen';
import { PageBody } from '@/components/common/PageBody';
import { PageHeader } from '@/components/common/PageHeader';
import { useMessages } from '@/components/hooks';
import { PreferenceSettings } from './PreferenceSettings';

export function PreferencesPage() {
  const { formatMessage, labels } = useMessages();

  return (
    <PageBody>
      <Column gap={{ xs: '4', md: '6' }} style={{ width: '100%' }}>
        <Column gap="2">
          <PageHeader title={formatMessage(labels.preferences)} />
          <Text
            size="2"
            style={{
              opacity: 0.6,
              maxWidth: '500px',
            }}
          >
            Customize your analytics experience with your preferred settings
          </Text>
        </Column>
        <PreferenceSettings />
      </Column>
    </PageBody>
  );
}
