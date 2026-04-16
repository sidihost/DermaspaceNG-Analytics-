import { Column, Grid, Label, Row, Text } from '@umami/react-zen';
import { useConfig, useLoginQuery, useMessages } from '@/components/hooks';
import { ROLES } from '@/lib/constants';
import { PasswordChangeButton } from './PasswordChangeButton';

// Profile item wrapper - clean flat design
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
      className="settings-card"
      style={{
        gridColumn: fullWidth ? '1 / -1' : undefined,
      }}
    >
      <Label
        style={{
          fontSize: '12px',
          fontWeight: 500,
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          color: 'var(--font-color-muted)',
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
      padding: '6px 12px',
      borderRadius: '6px',
      background: isAdmin ? 'var(--primary-color)' : 'var(--hover-bg)',
      color: isAdmin ? 'white' : 'var(--font-color)',
      fontSize: '13px',
      fontWeight: 500,
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
