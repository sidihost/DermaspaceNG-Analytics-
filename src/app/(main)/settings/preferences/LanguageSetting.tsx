import { Button, ListItem, Row, Select } from '@umami/react-zen';
import { useState } from 'react';
import { useLocale, useMessages } from '@/components/hooks';
import { DEFAULT_LOCALE } from '@/lib/constants';
import { languages } from '@/lib/lang';

export function LanguageSetting() {
  const [search, setSearch] = useState('');
  const { formatMessage, labels } = useMessages();
  const { locale, saveLocale } = useLocale();
  const items = search
    ? Object.keys(languages).filter(n => {
        return (
          n.toLowerCase().includes(search.toLowerCase()) ||
          languages[n].label.toLowerCase().includes(search.toLowerCase())
        );
      })
    : Object.keys(languages);

  const handleReset = () => saveLocale(DEFAULT_LOCALE);

  const handleOpen = (isOpen: boolean) => {
    if (isOpen) {
      setSearch('');
    }
  };

  return (
    <Row gap="2" wrap="wrap" style={{ width: '100%' }}>
      <Select
        value={locale}
        onChange={val => saveLocale(val as string)}
        allowSearch
        onSearch={setSearch}
        onOpenChange={handleOpen}
        listProps={{ style: { maxHeight: 300 } }}
        style={{
          flex: '1 1 200px',
          minWidth: '150px',
        }}
      >
        {items.map(item => (
          <ListItem key={item} id={item}>
            {languages[item].label}
          </ListItem>
        ))}
        {!items.length && <ListItem></ListItem>}
      </Select>
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
