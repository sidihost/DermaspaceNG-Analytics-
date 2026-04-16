import { useTheme } from '@umami/react-zen';
import { useCallback, useMemo } from 'react';
import { BarChart, type BarChartProps } from '@/components/charts/BarChart';
import { useLocale, useMessages } from '@/components/hooks';
import { renderDateLabels } from '@/lib/charts';
import { getThemeColors } from '@/lib/colors';
import { generateTimeSeries } from '@/lib/date';

export interface PageviewsChartProps extends BarChartProps {
  data: {
    pageviews: any[];
    sessions: any[];
    compare?: {
      pageviews: any[];
      sessions: any[];
    };
  };
  unit: string;
}

export function PageviewsChart({ data, unit, minDate, maxDate, ...props }: PageviewsChartProps) {
  const { formatMessage, labels } = useMessages();
  const { theme } = useTheme();
  const { locale, dateLocale } = useLocale();
  const { colors } = useMemo(() => getThemeColors(theme), [theme]);

  const chartData: any = useMemo(() => {
    if (!data) return;

    const isDark = theme === 'dark';

    return {
      __id: Date.now(),
      datasets: [
        {
          type: 'bar',
          label: formatMessage(labels.visitors),
          data: generateTimeSeries(data.sessions, minDate, maxDate, unit, dateLocale),
          borderWidth: 0,
          barPercentage: 0.75,
          categoryPercentage: 0.85,
          borderRadius: 6,
          borderSkipped: false,
          backgroundColor: isDark ? 'rgba(168, 85, 247, 0.8)' : 'rgba(107, 45, 139, 0.7)',
          hoverBackgroundColor: isDark ? 'rgba(168, 85, 247, 1)' : 'rgba(107, 45, 139, 0.9)',
          order: 3,
        },
        {
          type: 'bar',
          label: formatMessage(labels.views),
          data: generateTimeSeries(data.pageviews, minDate, maxDate, unit, dateLocale),
          barPercentage: 0.75,
          categoryPercentage: 0.85,
          borderWidth: 0,
          borderRadius: 6,
          borderSkipped: false,
          backgroundColor: isDark ? 'rgba(192, 132, 252, 0.5)' : 'rgba(155, 77, 202, 0.4)',
          hoverBackgroundColor: isDark ? 'rgba(192, 132, 252, 0.8)' : 'rgba(155, 77, 202, 0.7)',
          order: 4,
        },
        ...(data.compare
          ? [
              {
                type: 'line',
                label: `${formatMessage(labels.views)} (${formatMessage(labels.previous)})`,
                data: generateTimeSeries(
                  data.compare.pageviews,
                  minDate,
                  maxDate,
                  unit,
                  dateLocale,
                ),
                borderWidth: 2,
                backgroundColor: 'transparent',
                borderColor: '#6b2d8b',
                pointBackgroundColor: '#6b2d8b',
                pointBorderColor: '#fff',
                pointBorderWidth: 2,
                pointRadius: 4,
                pointHoverRadius: 6,
                tension: 0.4,
                order: 1,
              },
              {
                type: 'line',
                label: `${formatMessage(labels.visitors)} (${formatMessage(labels.previous)})`,
                data: generateTimeSeries(data.compare.sessions, minDate, maxDate, unit, dateLocale),
                borderWidth: 2,
                backgroundColor: 'transparent',
                borderColor: '#9b4dca',
                pointBackgroundColor: '#9b4dca',
                pointBorderColor: '#fff',
                pointBorderWidth: 2,
                pointRadius: 4,
                pointHoverRadius: 6,
                tension: 0.4,
                order: 2,
              },
            ]
          : []),
      ],
    };
  }, [data, locale, theme]);

  const renderXLabel = useCallback(renderDateLabels(unit, locale), [unit, locale]);

  return (
    <div className="chart-container-enhanced" style={{ width: '100%' }}>
      <BarChart
        {...props}
        chartData={chartData}
        unit={unit}
        minDate={minDate}
        maxDate={maxDate}
        renderXLabel={renderXLabel}
        height="clamp(280px, 40vw, 400px)"
      />
    </div>
  );
}
