import { PageContainer, ProForm } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import { Button, Form, Upload } from 'antd';
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
      {/* <React.Fragment>{element}</React.Fragment> */}
      {/* <Button type="primary" onClick={() => setNumber(number + 1)}>
        点击{number}
      </Button> */}
    </React.Fragment>
  );
};

const HomePage = () => {
  const { name } = useModel('global');
  const [form] = Form.useForm();
  console.log(form.getFieldsValue());
  console.log(form);
  const onFinls = (value) => {
    console.log(value);
  };

  // 深拷贝
  let data = { name: 'wqy', id: '11' };
  let newdata = { ...data };
  newdata.id = 22;
  console.log(data); // {name: 'wqy', id: '11'}
  console.log(newdata); // {name: 'wqy', id: 22}
  let array = [1, 2, 3];
  let ay = [...array];
  ay[0] = 999;
  console.log(array); // [1, 2, 3]
  console.log(ay); //[999, 2, 3]

  return (
    <PageContainer ghost>
      <div className={styles.container}>
        {/* <Guide name={trim(name)} /> */}
        <Demo value={1}></Demo>
      </div>
      <ProForm form={form}>
        <Form.Item name="file">
          <Upload form={form}>
            <Button onSubmit={onFinls}>上传文件</Button>
          </Upload>
          <Button type="submit" onClick={onFinls}>
            提交
          </Button>
        </Form.Item>
      </ProForm>
    </PageContainer>
  );
};
// 厕所一下普通提交;

export default HomePage;
