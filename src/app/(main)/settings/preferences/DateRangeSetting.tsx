import { Button, Row } from '@umami/react-zen';
import { useState } from 'react';
import { useMessages } from '@/components/hooks';
import { DateFilter } from '@/components/input/DateFilter';
import { DATE_RANGE_CONFIG, DEFAULT_DATE_RANGE_VALUE } from '@/lib/constants';
import { getItem, setItem } from '@/lib/storage';

export function DateRangeSetting() {
  const { formatMessage, labels } = useMessages();
  const [date, setDate] = useState(getItem(DATE_RANGE_CONFIG) || DEFAULT_DATE_RANGE_VALUE);

  const handleChange = (value: string) => {
    setItem(DATE_RANGE_CONFIG, value);
    setDate(value);
  };

  const handleReset = () => {
    setItem(DATE_RANGE_CONFIG, DEFAULT_DATE_RANGE_VALUE);
    setDate(DEFAULT_DATE_RANGE_VALUE);
  };

  return (
    <Row gap="2" wrap="wrap" style={{ width: '100%' }}>
      <DateFilter value={date} onChange={handleChange} placement="bottom start" />
      <Button
        onPress={handleReset}
        style={{
          borderRadius: '10px',
          padding: '10px 16px',
        }}
      >
        {formatMessage(labels.reset)}
      </Button>
    </Row>
  );
}
