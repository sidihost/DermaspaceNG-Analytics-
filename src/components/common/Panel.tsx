import {
  Button,
  Column,
  type ColumnProps,
  Heading,
  Icon,
  Row,
  Tooltip,
  TooltipTrigger,
} from '@umami/react-zen';
import { useState } from 'react';
import { useMessages } from '@/components/hooks';
import { Maximize, X } from '@/components/icons';

export interface PanelProps extends ColumnProps {
  title?: string;
  allowFullscreen?: boolean;
}

const fullscreenStyles = {
  position: 'fixed',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  border: 'none',
  zIndex: 9999,
  background: 'var(--background-color)',
} as any;

const panelStyles = {
  background:
    'linear-gradient(135deg, var(--card-gradient-start) 0%, var(--card-gradient-end) 100%)',
  borderColor: 'var(--card-border-subtle)',
  boxShadow: 'var(--card-shadow)',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  borderRadius: '16px',
} as any;

export function Panel({ title, allowFullscreen, style, children, ...props }: PanelProps) {
  const { formatMessage, labels } = useMessages();
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <Column
      paddingY={{ xs: '4', md: '6' }}
      paddingX={{ xs: '3', md: '6' }}
      border
      position="relative"
      gap
      {...props}
      style={{
        ...panelStyles,
        ...style,
        ...(isFullscreen ? fullscreenStyles : {}),
      }}
    >
      {title && (
        <Heading
          style={{
            fontSize: 'clamp(14px, 3vw, 16px)',
            fontWeight: 600,
            letterSpacing: '-0.01em',
          }}
        >
          {title}
        </Heading>
      )}
      {allowFullscreen && (
        <Row justifyContent="flex-end" alignItems="center">
          <TooltipTrigger delay={0} isDisabled={isFullscreen}>
            <Button size="sm" variant="quiet" onPress={handleFullscreen}>
              <Icon>{isFullscreen ? <X /> : <Maximize />}</Icon>
            </Button>
            <Tooltip>{formatMessage(labels.maximize)}</Tooltip>
          </TooltipTrigger>
        </Row>
      )}
      {children}
    </Column>
  );
}
