import { Row, Text, ThemeButton } from '@umami/react-zen';
import { LanguageButton } from '@/components/input/LanguageButton';
import { PreferencesButton } from '@/components/input/PreferencesButton';

export function Header() {
  return (
    <Row as="header" justifyContent="space-between" alignItems="center" paddingY="3">
      <a href="https://dermaspace.ng" target="_blank" rel="noopener">
        <Row alignItems="center" gap>
          <img
            src="/images/icon.png"
            alt="Dermaspace"
            style={{ height: 28, objectFit: 'contain' }}
          />
          <Text weight="bold" style={{ color: '#6b2d8b' }}>
            DermaspaceNG
          </Text>
        </Row>
      </a>
      <Row alignItems="center" gap>
        <ThemeButton />
        <LanguageButton />
        <PreferencesButton />
      </Row>
    </Row>
  );
}
