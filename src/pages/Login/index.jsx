import { Button, Modal } from 'antd';
import React from 'react';
const Demo = () => {
  const [visble, setVisible] = React.useState(false);
  const [type, setType] = React.useState('');
  const setValue = (type) => {
    setVisible(true);
    setType(type);
  };
  return (
    <>
      <>
        <Button onClick={setValue('name')}>添加</Button>
        <Button onClick={setValue('value')}>添加</Button>
        <Button onClick={setValue('id')}>添加</Button>
        <Button onClick={setValue('age')}>添加</Button>

        <Modal
          title="新增"
          visible={visble}
          footer={
            <Button htmlType="submit" onClick={setVisible(false)}>
              确定
            </Button>
          }
        >
          {type === 'name' && (
            <Col xxl={16} xl={16} lg={16} sm={24} xs={24}>
              <Form.Item {...formItemLayout} name="shu" label="状态">
                <Input></Input>
              </Form.Item>
            </Col>
          )}

          {type === 'age' && (
            <Col xxl={16} xl={16} lg={16} sm={24} xs={24}>
              <Form.Item {...formItemLayout} name="shu" label="dd">
                <Input></Input>
              </Form.Item>
            </Col>
          )}
          <Col xxl={16} xl={16} lg={16} sm={24} xs={24}>
            <Form.Item {...formItemLayout} name="Kakuretakikenchōsanohindo" label="隐患排查频率">
              <Input></Input>
            </Form.Item>
          </Col>
        </Modal>
      </>
    </>
  );
};
export default Demo;
