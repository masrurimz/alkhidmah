import { LockOutlined, MailOutlined, IdcardOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import Link from 'next/link';
import { AUTH_PREFIX_PATH } from '../auth.constant';
import { trpc } from '@alkhidmah/maktab/shared/utils/trpc/client';

interface RegisterForm {
  email: string;
  password: string;
  name: string;
}

interface RegisterFormProps {}

export const RegisterForm = (props: RegisterFormProps) => {
  const {} = props;

  const register = trpc.auth.register.useMutation({
    onSuccess(data, variables, context) {
      alert('success resgister');
    },
  });

  const initialCredential: RegisterForm = {
    email: '',
    password: '',
    name: '',
  };

  const onRegister = (values: RegisterForm) => {
    console.log({ values });
    register.mutate(values);
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
            type: 'email',
          },
        ]}
        hasFeedback
      >
        <Input prefix={<MailOutlined className="mr-1" />} />
      </Form.Item>
      <Form.Item
        name="name"
        label="Name"
        rules={[
          {
            required: true,
          },
        ]}
        hasFeedback
      >
        <Input prefix={<IdcardOutlined className="mr-1" />} />
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
