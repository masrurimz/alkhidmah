import {
  AuthLayout,
  AUTH_PREFIX_PATH,
  RegisterForm,
} from '@alkhidmah/maktab/auth';
import { Card, Col, Row } from 'antd';
import Link from 'next/link';
import { ReactElement } from 'react';
import { NextPageWithLayout } from '../_app';

const Register: NextPageWithLayout = (props) => {
  // const theme = useSelector((state) => state.theme.currentTheme);

  return (
    <Row justify="center">
      <Col xs={20} sm={20} md={20} lg={9} xl={7}>
        <Card>
          <div className="my-4">
            <div className="flex flex-col items-center justify-center">
              <h1>Maktab HAF 2023</h1>
            </div>
            <Row justify="center">
              <Col xs={24} sm={24} md={20} lg={20}>
                <RegisterForm />
              </Col>
            </Row>
          </div>
        </Card>
      </Col>
    </Row>
  );
};

Register.getLayout = (page: ReactElement) => {
  return <AuthLayout>{page}</AuthLayout>;
};

export default Register;
