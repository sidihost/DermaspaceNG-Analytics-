'use client';
import { Column } from '@umami/react-zen';
import { ExpandedViewModal } from '@/app/(main)/websites/[websiteId]/ExpandedViewModal';
import { WebsiteChart } from './WebsiteChart';
import { WebsiteControls } from './WebsiteControls';
import { WebsiteMetricsBar } from './WebsiteMetricsBar';
import { WebsitePanels } from './WebsitePanels';

export function WebsitePage({ websiteId }: { websiteId: string }) {
  return (
    <Column
      gap="4"
      style={{
        paddingBottom: 'clamp(16px, 4vw, 32px)',
      }}
    >
      <WebsiteControls websiteId={websiteId} />

      {/* Metrics Cards Section */}
      <section style={{ marginTop: '8px' }}>
        <WebsiteMetricsBar websiteId={websiteId} showChange={true} />
      </section>

      {/* Chart Section */}
      <section style={{ marginTop: '8px' }}>
        <WebsiteChart websiteId={websiteId} />
      </section>

      {/* Panels Section */}
      <section style={{ marginTop: '8px' }}>
        <WebsitePanels websiteId={websiteId} />
      </section>

      <ExpandedViewModal websiteId={websiteId} />
    </Column>
  );
}
