import { useMemo } from 'react';
import { LoadingPanel } from '@/components/common/LoadingPanel';
import { useDateRange, useTimezone } from '@/components/hooks';
import { useWebsitePageviewsQuery } from '@/components/hooks/queries/useWebsitePageviewsQuery';
import { PageviewsChart } from '@/components/metrics/PageviewsChart';

export function WebsiteChart({
  websiteId,
  compareMode,
}: {
  websiteId: string;
  compareMode?: boolean;
}) {
  const { timezone } = useTimezone();
  const { dateRange, dateCompare } = useDateRange({ timezone: timezone });
  const { startDate, endDate, unit, value } = dateRange;
  const { data, isLoading, isFetching, error } = useWebsitePageviewsQuery({
    websiteId,
    compare: compareMode ? dateCompare?.compare : undefined,
  });
  const { pageviews, sessions, compare } = (data || {}) as any;

  const chartData = useMemo(() => {
    if (data) {
      const result: {
        pageviews: any[];
        sessions: any[];
        compare?: {
          pageviews: any[];
          sessions: any[];
        };
      } = {
        pageviews,
        sessions,
      };

      if (compare) {
        result.compare = {
          pageviews: result.pageviews.map(({ x }, i) => ({
            x,
            y: compare.pageviews[i]?.y,
            d: compare.pageviews[i]?.x,
          })),
          sessions: result.sessions.map(({ x }, i) => ({
            x,
            y: compare.sessions[i]?.y,
            d: compare.sessions[i]?.x,
          })),
        };
      }

      return result;
    }
    return { pageviews: [], sessions: [] };
  }, [data, startDate, endDate, unit]);

  // Loading skeleton for chart
  if (isLoading) {
    return (
      <div
        className="metric-loading chart-container-enhanced"
        style={{
          height: 'clamp(280px, 40vw, 400px)',
          borderRadius: '16px',
          width: '100%',
        }}
      />
    );
  }

  return (
    <LoadingPanel data={data} isFetching={isFetching} isLoading={isLoading} error={error}>
      <PageviewsChart
        key={value}
        data={chartData}
        minDate={startDate}
        maxDate={endDate}
        unit={unit}
      />
    </LoadingPanel>
  );
}
