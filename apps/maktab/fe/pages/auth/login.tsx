import React, { ReactElement } from 'react';
import { Card, Row, Col } from 'antd';
import {
  AuthLayout,
  AUTH_PREFIX_PATH,
  LoginForm,
} from '@alkhidmah/maktab/auth';
import Link from 'next/link';
import { NextPageWithLayout } from '../_app';

const Login: NextPageWithLayout = (props) => {
  // const theme = useSelector((state) => state.theme.currentTheme);

  return (
    <Row justify="center">
      <Col xs={20} sm={20} md={20} lg={9} xl={7}>
        <Card>
          <div className="my-4">
            <div className="flex flex-col items-center justify-center">
              <h1>Maktab HAF 2023</h1>
              <p>
                {`Don't have an account yet? `}
                <Link href={`${AUTH_PREFIX_PATH}/register`}>Sign Up</Link>
              </p>
            </div>
            <Row justify="center">
              <Col xs={24} sm={24} md={20} lg={20}>
                <LoginForm allowRedirect={true} />
              </Col>
            </Row>
          </div>
        </Card>
      </Col>
    </Row>
  );
};

Login.getLayout = (page: ReactElement) => {
  return <AuthLayout>{page}</AuthLayout>;
};

export default Login;
