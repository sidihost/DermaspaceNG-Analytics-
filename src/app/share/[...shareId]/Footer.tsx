import { Row, Text } from '@umami/react-zen';
import { CURRENT_VERSION, HOMEPAGE_URL } from '@/lib/constants';

export function Footer() {
  return (
    <Row as="footer" paddingY="6" justifyContent="flex-end">
      <a href={HOMEPAGE_URL} target="_blank">
        <Text weight="bold" style={{ color: '#6b2d8b' }}>
          DermaspaceNG Analytics
        </Text>{' '}
        {`v${CURRENT_VERSION}`}
      </a>
    </Row>
  );
}
