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
              borderRadius: '8px',
              padding: '10px 12px',
              transition: 'all 0.15s ease',
              background: isSelected ? 'var(--active-bg)' : 'transparent',
              color: isSelected ? 'var(--primary-color)' : undefined,
              fontWeight: isSelected ? 500 : 400,
            }}
          >
            <IconLabel icon={icon}>{label}</IconLabel>
          </NavMenuItem>
        </Link>
      );
    });
  };

  return (
    <Column gap="3" overflowY="auto" justifyContent="space-between" position="sticky" top="20px">
      {title && (
        <Row padding="2">
          <Heading
            size="1"
            style={{
              fontSize: '18px',
              fontWeight: 600,
              color: 'var(--primary-color)',
              letterSpacing: '-0.01em',
            }}
          >
            {title}
          </Heading>
        </Row>
      )}
      <NavMenu gap="2" {...props}>
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
