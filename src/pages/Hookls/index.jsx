import { PageContainer } from '@ant-design/pro-components';
import { Layout, Row, Typography } from 'antd';
import styles from '../../components/Guide/Guide.less';

const Hookls = () => {
  return (
    <PageContainer ghost header={{ title: 'Flex' }}>
      <Layout>
        <Row>
          <Typography.Title level={3} className={styles.title}></Typography.Title>
        </Row>
        <Row>
          <div
            style={{
              display: 'flex',
              height: '100%',
              width: '100%',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                height: '200px',
                width: '200px',
                backgroundColor: 'pink',
                marginLeft: '10px',
              }}
            ></div>
            <div
              style={{
                height: '200px',
                width: '200px',
                backgroundColor: 'plum',
                marginLeft: '10px',
              }}
            ></div>
            <div
              style={{
                height: '200px',
                width: '200px',
                backgroundColor: 'yellow',
                marginLeft: '10px',
              }}
            ></div>
          </div>
        </Row>
        <Row>
          <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <Typography.Title level={4} className={styles.title}>
              <strong>flex start</strong>
            </Typography.Title>
          </div>
        </Row>
      </Layout>
    </PageContainer>
  );
};

export default Hookls;
