import {
  Column,
  Form,
  FormButtons,
  FormField,
  FormSubmitButton,
  Heading,
  PasswordField,
  Text,
  TextField,
} from '@umami/react-zen';
import { useRouter } from 'next/navigation';
import { useMessages, useUpdateQuery } from '@/components/hooks';
import { setClientAuthToken } from '@/lib/client';
import { setUser } from '@/store/app';

export function LoginForm() {
  const { formatMessage, labels, getErrorMessage } = useMessages();
  const router = useRouter();
  const { mutateAsync, error } = useUpdateQuery('/auth/login');

  const handleSubmit = async (data: any) => {
    await mutateAsync(data, {
      onSuccess: async ({ token, user }) => {
        setClientAuthToken(token);
        setUser(user);
        router.push('/');
      },
    });
  };

  return (
    <Column
      justifyContent="center"
      alignItems="center"
      gap="6"
      style={{ width: '100%', maxWidth: 400, padding: '0 24px' }}
    >
      <Column alignItems="center" gap="3">
        <img
          src="/images/logo.png"
          alt="Dermaspace Logo"
          style={{
            width: 200,
            height: 'auto',
            objectFit: 'contain',
            marginBottom: 8,
          }}
        />
        <Heading
          style={{ color: '#6b2d8b', fontSize: '1.5rem', fontWeight: 600, textAlign: 'center' }}
        >
          Analytics Dashboard
        </Heading>
        <Text style={{ color: '#666', fontSize: '0.875rem', textAlign: 'center' }}>
          Sign in to access your analytics
        </Text>
      </Column>
      <Form onSubmit={handleSubmit} error={getErrorMessage(error)} style={{ width: '100%' }}>
        <FormField
          label={formatMessage(labels.username)}
          data-test="input-username"
          name="username"
          rules={{ required: formatMessage(labels.required) }}
        >
          <TextField autoComplete="username" placeholder="Enter your username" />
        </FormField>

        <FormField
          label={formatMessage(labels.password)}
          data-test="input-password"
          name="password"
          rules={{ required: formatMessage(labels.required) }}
        >
          <PasswordField autoComplete="current-password" placeholder="Enter your password" />
        </FormField>
        <FormButtons>
          <FormSubmitButton
            data-test="button-submit"
            variant="primary"
            style={{
              flex: 1,
              backgroundColor: '#6b2d8b',
              borderColor: '#6b2d8b',
            }}
            isDisabled={false}
          >
            {formatMessage(labels.login)}
          </FormSubmitButton>
        </FormButtons>
      </Form>
      <Text style={{ color: '#999', fontSize: '0.75rem', marginTop: 16 }}>
        Dermaspace Esthetic And Wellness Centre
      </Text>
    </Column>
  );
}
