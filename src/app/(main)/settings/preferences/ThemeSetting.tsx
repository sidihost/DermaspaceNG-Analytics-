import { Button, Icon, Row, Text, useTheme } from '@umami/react-zen';
import { useMessages } from '@/components/hooks';
import { Moon, Sun } from '@/components/icons';

export function ThemeSetting() {
  const { theme, setTheme } = useTheme();
  const { formatMessage, labels } = useMessages();

  return (
    <Row gap="2" wrap="wrap">
      <Button
        variant={theme === 'light' ? 'primary' : undefined}
        onPress={() => setTheme('light')}
        style={{
          flex: '1 1 auto',
          minWidth: '100px',
          justifyContent: 'center',
          gap: '8px',
          padding: '10px 16px',
          borderRadius: '8px',
          transition: 'all 0.15s ease',
        }}
      >
        <Icon>
          <Sun />
        </Icon>
        <Text size="2" weight="medium">
          {formatMessage(labels.light)}
        </Text>
      </Button>
      <Button
        variant={theme === 'dark' ? 'primary' : undefined}
        onPress={() => setTheme('dark')}
        style={{
          flex: '1 1 auto',
          minWidth: '100px',
          justifyContent: 'center',
          gap: '8px',
          padding: '10px 16px',
          borderRadius: '8px',
          transition: 'all 0.15s ease',
        }}
      >
        <Icon>
          <Moon />
        </Icon>
        <Text size="2" weight="medium">
          {formatMessage(labels.dark)}
        </Text>
      </Button>
    </Row>
  );
}
