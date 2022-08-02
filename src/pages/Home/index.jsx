import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import { Button } from 'antd';
import React from 'react';
import styles from './index.less';

const Nyu = () => {
  return <React.Fragment>hello,react</React.Fragment>;
};
const Demo = (value) => {
  const [number, setNumber] = React.useState(0);
  const element = React.useMemo(() => <Nyu></Nyu>, [value]);
  console.log(element);
  return (
    <React.Fragment>
      <React.Fragment>{element}</React.Fragment>
      <Button type="primary" onClick={() => setNumber(number + 1)}>
        点击{number}
      </Button>
    </React.Fragment>
  );
};

const HomePage = () => {
  const { name } = useModel('global');
  return (
    <PageContainer ghost>
      <div className={styles.container}>
        {/* <Guide name={trim(name)} /> */}
        <Demo value={1}></Demo>
      </div>
    </PageContainer>
  );
};

export default HomePage;
