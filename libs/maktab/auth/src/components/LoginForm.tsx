import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { Alert, Button, Form, Input } from 'antd';
// import { FacebookSVG, GoogleSVG } from 'assets/svg/icon';
// import CustomIcon from 'components/util-components/CustomIcon';
// import { AUTH_PREFIX_PATH } from 'configs/AppConfig';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { AUTH_PREFIX_PATH } from '../auth.constant';
// import { Link, useHistory } from 'react-router-dom';

interface LoginFormProps {
  otherSignIn?: boolean;
  showForgetPassword?: boolean;
  extra?: string | React.ReactElement;
  allowRedirect: boolean;
}

export const LoginForm = (props: LoginFormProps) => {
  // const history = useHistory();

  const {
    // otherSignIn = true,
    // showForgetPassword = false,
    hideAuthMessage,
    // onForgetPasswordClick,
    showLoading,
    // signInWithGoogle,
    // signInWithFacebook,
    extra,
    signIn,
    token,
    loading,
    // redirect,
    showMessage,
    message,
    allowRedirect,
  } = props;

  const initialCredential = {
    email: '',
    password: '',
  };

  const onLogin = (values) => {
    showLoading();
    signIn(values);
  };

  // const onGoogleLogin = () => {
  //   showLoading();
  //   signInWithGoogle();
  // };

  // const onFacebookLogin = () => {
  //   showLoading();
  //   signInWithFacebook();
  // };

  useEffect(() => {
    if (token !== null && allowRedirect) {
      // history.push(redirect);
    }
    if (showMessage) {
      setTimeout(() => {
        hideAuthMessage();
      }, 3000);
    }
  });

  return (
    <>
      <motion.div
        initial={{ opacity: 0, marginBottom: 0 }}
        animate={{
          opacity: showMessage ? 1 : 0,
          marginBottom: showMessage ? 20 : 0,
        }}
      >
        <Alert type="error" showIcon message={message}></Alert>
      </motion.div>
      <Form
        layout="vertical"
        name="login-form"
        initialValues={initialCredential}
        onFinish={onLogin}
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
        >
          <Input prefix={<MailOutlined className="mr-1" />} />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input.Password prefix={<LockOutlined className="mr-1" />} />
        </Form.Item>
        <div className="flex mb-5">
          <span className="cursor-pointer text-sm font-normal">
            <Link href={`${AUTH_PREFIX_PATH}/forgot-password`}>
              Forget Password?
            </Link>
          </span>
        </div>
        <Form.Item>
          <Button type="primary" htmlType="submit" block loading={loading}>
            Sign In
          </Button>
        </Form.Item>
        {extra}
      </Form>
    </>
  );
};
