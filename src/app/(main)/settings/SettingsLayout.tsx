'use client';
import { Column, Grid } from '@umami/react-zen';
import type { ReactNode } from 'react';
import { PageBody } from '@/components/common/PageBody';
import { SettingsNav } from './SettingsNav';

export function SettingsLayout({ children }: { children: ReactNode }) {
  return (
    <Grid columns={{ xs: '1fr', lg: 'auto 1fr' }} width="100%" height="100%">
      <Column
        display={{ xs: 'none', lg: 'flex' }}
        width="240px"
        height="100%"
        marginRight="2"
        padding="4"
        style={{
          borderRight: '1px solid var(--card-border)',
        }}
      >
        <SettingsNav />
      </Column>
      <Column
        gap="6"
        padding={{ xs: '3', md: '4' }}
        style={{
          minHeight: '100%',
        }}
      >
        <PageBody>{children}</PageBody>
      </Column>
    </Grid>
  );
}
