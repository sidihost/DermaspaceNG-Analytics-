import { Grid } from '@umami/react-zen';

const LAYOUTS = {
  one: { columns: '1fr' },
  two: {
    columns: {
      xs: '1fr',
      sm: '1fr',
      md: 'repeat(auto-fill, minmax(480px, 1fr))',
      lg: 'repeat(2, 1fr)',
    },
  },
  three: {
    columns: {
      xs: '1fr',
      sm: 'repeat(2, 1fr)',
      md: 'repeat(auto-fill, minmax(320px, 1fr))',
      lg: 'repeat(3, 1fr)',
    },
  },
  'one-two': {
    columns: {
      xs: '1fr',
      md: 'repeat(3, 1fr)',
    },
  },
  'two-one': {
    columns: {
      xs: '1fr',
      md: 'repeat(3, 1fr)',
    },
  },
};

export function GridRow(props: {
  layout?: 'one' | 'two' | 'three' | 'one-two' | 'two-one' | 'compare';
  className?: string;
  children?: any;
  minHeight?: string;
}) {
  const { layout = 'two', children, minHeight, ...otherProps } = props;
  return (
    <Grid gap={{ xs: '3', md: '4' }} {...LAYOUTS[layout]} {...otherProps} style={{ minHeight }}>
      {children}
    </Grid>
  );
}
