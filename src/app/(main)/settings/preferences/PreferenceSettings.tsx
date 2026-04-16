import { Column, Grid, Label, Text } from '@umami/react-zen';
import { useLoginQuery, useMessages } from '@/components/hooks';
import { DateRangeSetting } from './DateRangeSetting';
import { LanguageSetting } from './LanguageSetting';
import { ThemeSetting } from './ThemeSetting';
import { TimezoneSetting } from './TimezoneSetting';

// Setting item wrapper - clean flat design
function SettingItem({
  label,
  description,
  children,
}: {
  label: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <Column gap="3" className="settings-card">
      <Column gap="1">
        <Label
          style={{
            fontSize: '14px',
            fontWeight: 600,
            color: 'var(--font-color)',
          }}
        >
          {label}
        </Label>
        {description && (
          <Text
            size="1"
            style={{
              color: 'var(--font-color-muted)',
              lineHeight: 1.5,
            }}
          >
            {description}
          </Text>
        )}
      </Column>
      {children}
    </Column>
  );
}

export function PreferenceSettings() {
  const { user } = useLoginQuery();
  const { formatMessage, labels } = useMessages();

  if (!user) {
    return null;
  }

  return (
    <Grid
      columns={{ xs: '1fr', md: 'repeat(2, 1fr)' }}
      gap={{ xs: '3', md: '4' }}
      style={{ width: '100%', maxWidth: '800px' }}
    >
      <SettingItem
        label={formatMessage(labels.defaultDateRange)}
        description="Set the default date range for your analytics dashboard"
      >
        <DateRangeSetting />
      </SettingItem>

      <SettingItem
        label={formatMessage(labels.timezone)}
        description="Choose your timezone for accurate data display"
      >
        <TimezoneSetting />
      </SettingItem>

      <SettingItem
        label={formatMessage(labels.language)}
        description="Select your preferred language"
      >
        <LanguageSetting />
      </SettingItem>

      <SettingItem
        label={formatMessage(labels.theme)}
        description="Choose between light and dark mode"
      >
        <ThemeSetting />
      </SettingItem>
    </Grid>
  );
}
