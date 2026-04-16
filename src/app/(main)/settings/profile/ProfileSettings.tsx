import { Column, Grid, Label, Row, Text } from '@umami/react-zen';
import { useConfig, useLoginQuery, useMessages } from '@/components/hooks';
import { ROLES } from '@/lib/constants';
import { PasswordChangeButton } from './PasswordChangeButton';

// Profile item wrapper with enhanced styling
function ProfileItem({
  label,
  children,
  fullWidth = false,
}: {
  label: string;
  children: React.ReactNode;
  fullWidth?: boolean;
}) {
  return (
    <Column
      gap="2"
      style={{
        padding: 'clamp(16px, 3vw, 24px)',
        background:
          'linear-gradient(135deg, var(--card-gradient-start) 0%, var(--card-gradient-end) 100%)',
        borderRadius: '12px',
        border: '1px solid var(--card-border-subtle)',
        gridColumn: fullWidth ? '1 / -1' : undefined,
      }}
    >
      <Label
        style={{
          fontSize: 'clamp(11px, 2vw, 12px)',
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.5px',
          opacity: 0.6,
        }}
      >
        {label}
      </Label>
      <Text size="3" weight="medium" style={{ wordBreak: 'break-word' }}>
        {children}
      </Text>
    </Column>
  );
}

export function ProfileSettings() {
  const { user } = useLoginQuery();
  const { formatMessage, labels } = useMessages();
  const { cloudMode } = useConfig();

  if (!user) {
    return null;
  }

  const { username, role } = user;

  const renderRole = (value: string) => {
    if (value === ROLES.user) {
      return formatMessage(labels.user);
    }
    if (value === ROLES.admin) {
      return formatMessage(labels.admin);
    }
    if (value === ROLES.viewOnly) {
      return formatMessage(labels.viewOnly);
    }

    return formatMessage(labels.unknown);
  };

  const getRoleBadgeStyle = (value: string) => {
    const isAdmin = value === ROLES.admin;
    return {
      display: 'inline-flex',
      padding: '6px 14px',
      borderRadius: '20px',
      background: isAdmin ? 'var(--primary-color)' : 'var(--base-color-4)',
      color: isAdmin ? 'white' : 'var(--font-color)',
      fontSize: '13px',
      fontWeight: 600,
    };
  };

  return (
    <Grid
      columns={{ xs: '1fr', md: 'repeat(2, 1fr)' }}
      gap={{ xs: '3', md: '4' }}
      style={{ width: '100%', maxWidth: '800px' }}
    >
      <ProfileItem label={formatMessage(labels.username)}>{username}</ProfileItem>

      <ProfileItem label={formatMessage(labels.role)}>
        <span style={getRoleBadgeStyle(role)}>{renderRole(role)}</span>
      </ProfileItem>

      {!cloudMode && (
        <ProfileItem label={formatMessage(labels.password)} fullWidth>
          <Row>
            <PasswordChangeButton />
          </Row>
        </ProfileItem>
      )}
    </Grid>
  );
}
