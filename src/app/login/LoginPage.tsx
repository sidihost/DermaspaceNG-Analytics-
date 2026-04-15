'use client';
import { Column } from '@umami/react-zen';
import { LoginForm } from './LoginForm';

export function LoginPage() {
  return (
    <Column
      alignItems="center"
      justifyContent="center"
      height="100vh"
      style={{
        background: 'linear-gradient(135deg, #f8f6fa 0%, #ede8f3 50%, #e3daea 100%)',
        position: 'relative',
      }}
    >
      <Column
        style={{
          backgroundColor: 'white',
          borderRadius: 16,
          boxShadow: '0 8px 32px rgba(107, 45, 139, 0.12), 0 2px 8px rgba(107, 45, 139, 0.08)',
          padding: '48px 40px',
          width: '100%',
          maxWidth: 440,
          margin: '0 16px',
        }}
      >
        <LoginForm />
      </Column>
    </Column>
  );
}
