import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import Link from 'next/link';
import { AUTH_PREFIX_PATH } from '../auth.constant';

interface RegisterFormProps {}

export const RegisterForm = (props: RegisterFormProps) => {
  const { allowRedirect } = props;

  const initialCredential = {
    email: '',
    password: '',
  };

  const onRegister = (values) => {
    console.log({ values });
  };

  const loading = false;

  return (
    <Form
      layout="vertical"
      name="login-form"
      initialValues={initialCredential}
      onFinish={onRegister}
    >
      <Form.Item
        name="email"
        label="Email"
        rules={[
          {
            required: true,
          },
          {
            type: 'email',
          },
        ]}
        hasFeedback
      >
        <Input prefix={<MailOutlined className="mr-1" />} />
      </Form.Item>
      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            min: 6,
          },
        ]}
        hasFeedback
      >
        <Input.Password prefix={<LockOutlined className="mr-1" />} />
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          block
          loading={loading}
          size="large"
        >
          Sign Up
        </Button>
        <p className="flex justify-center mt-5">
          {`I've already had account. `}
          <Link href={`${AUTH_PREFIX_PATH}/register`}>Sign In</Link>
        </p>
      </Form.Item>
    </Form>
  );
};
