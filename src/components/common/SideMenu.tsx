import {
  Column,
  Heading,
  IconLabel,
  NavMenu,
  NavMenuGroup,
  NavMenuItem,
  type NavMenuProps,
  Row,
} from '@umami/react-zen';
import Link from 'next/link';

interface SideMenuData {
  id: string;
  label: string;
  icon?: any;
  path: string;
}

interface SideMenuItems {
  label?: string;
  items: SideMenuData[];
}

export interface SideMenuProps extends NavMenuProps {
  items: SideMenuItems[];
  title?: string;
  selectedKey?: string;
  allowMinimize?: boolean;
}

export function SideMenu({
  items = [],
  title,
  selectedKey,
  allowMinimize,
  ...props
}: SideMenuProps) {
  const renderItems = (items: SideMenuData[]) => {
    return items?.map(({ id, label, icon, path }) => {
      const isSelected = selectedKey === id;

      return (
        <Link key={id} href={path}>
          <NavMenuItem
            isSelected={isSelected}
            style={{
              borderRadius: '10px',
              padding: '10px 14px',
              transition: 'all 0.2s ease',
              background: isSelected
                ? 'linear-gradient(135deg, var(--primary-color) 0%, var(--accent-color) 100%)'
                : 'transparent',
              color: isSelected ? 'white' : undefined,
            }}
          >
            <IconLabel icon={icon}>{label}</IconLabel>
          </NavMenuItem>
        </Link>
      );
    });
  };

  return (
    <Column gap="4" overflowY="auto" justifyContent="space-between" position="sticky" top="20px">
      {title && (
        <Row padding="2">
          <Heading
            size="1"
            style={{
              fontSize: 'clamp(16px, 3vw, 20px)',
              fontWeight: 700,
              background: 'var(--metric-value-gradient)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {title}
          </Heading>
        </Row>
      )}
      <NavMenu gap="4" {...props}>
        {items?.map(({ label, items }, index) => {
          if (label) {
            return (
              <NavMenuGroup
                title={label}
                key={`${label}${index}`}
                gap="1"
                allowMinimize={allowMinimize}
                marginBottom="3"
              >
                {renderItems(items)}
              </NavMenuGroup>
            );
          }
          return null;
        })}
      </NavMenu>
    </Column>
  );
}
