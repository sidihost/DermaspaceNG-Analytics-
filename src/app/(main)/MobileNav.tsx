import { Grid, IconLabel, NavMenu, NavMenuItem, Row, Text } from '@umami/react-zen';
import Link from 'next/link';
import { WebsiteNav } from '@/app/(main)/websites/[websiteId]/WebsiteNav';
import { useMessages, useNavigation } from '@/components/hooks';
import { Globe, Grid2x2, LinkIcon } from '@/components/icons';
import { MobileMenuButton } from '@/components/input/MobileMenuButton';
import { NavButton } from '@/components/input/NavButton';
import { AdminNav } from './admin/AdminNav';
import { SettingsNav } from './settings/SettingsNav';

export function MobileNav() {
  const { formatMessage, labels } = useMessages();
  const { pathname, websiteId, renderUrl } = useNavigation();
  const isAdmin = pathname.includes('/admin');
  const isSettings = pathname.includes('/settings');

  const links = [
    {
      id: 'websites',
      label: formatMessage(labels.websites),
      path: '/websites',
      icon: <Globe />,
    },
    {
      id: 'links',
      label: formatMessage(labels.links),
      path: '/links',
      icon: <LinkIcon />,
    },
    {
      id: 'pixels',
      label: formatMessage(labels.pixels),
      path: '/pixels',
      icon: <Grid2x2 />,
    },
  ];

  return (
    <Grid
      columns="auto 1fr"
      flexGrow={1}
      borderRadius
      style={{
        background:
          'linear-gradient(135deg, var(--card-gradient-start) 0%, var(--card-gradient-end) 100%)',
        border: '1px solid var(--card-border-subtle)',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
        borderRadius: '12px',
      }}
    >
      <MobileMenuButton>
        {({ close }) => {
          return (
            <>
              <NavMenu padding="3" onItemClick={close} border="bottom">
                <NavButton />
                {links.map(link => {
                  return (
                    <Link key={link.id} href={renderUrl(link.path)}>
                      <NavMenuItem>
                        <IconLabel icon={link.icon} label={link.label} />
                      </NavMenuItem>
                    </Link>
                  );
                })}
              </NavMenu>
              {websiteId && <WebsiteNav websiteId={websiteId} onItemClick={close} />}
              {isAdmin && <AdminNav onItemClick={close} />}
              {isSettings && <SettingsNav onItemClick={close} />}
            </>
          );
        }}
      </MobileMenuButton>
      <Row alignItems="center" justifyContent="center" flexGrow={1} gap="2">
        <img
          src="/images/icon.png"
          alt="Dermaspace"
          style={{ width: 24, height: 24, objectFit: 'contain' }}
        />
        <Text weight="bold" style={{ color: 'var(--primary-color)' }}>
          DermaspaceNG
        </Text>
      </Row>
    </Grid>
  );
}
