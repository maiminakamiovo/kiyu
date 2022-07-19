import { Button, Col, DatePicker, Form, Input, Modal } from 'antd';
import moment from 'moment';
import { forwardRef, useEffect, useState } from 'react';

const Childern = (props, ref) => {
  const { modalVisible: thsiVi } = props;
  const [form] = Form.useForm();
  const [modalVisible, setModalVisible] = useState(thsiVi);
  useEffect(() => {
    setModalVisible(thsiVi);
  }, [thsiVi]);
  console.log(ref);
  const formItemLayout = {
    labelCol: {
      md: { span: 10 },
      sm: { span: 10 },
      xxl: { span: 8 },
      xl: { span: 6 },
    },
    wrapperCol: {
      md: { span: 14 },
      sm: { span: 14 },
      xxl: { span: 16 },
      xl: { span: 18 },
    },
  };

  const handleOk = (value) => {
    setModalVisible(false);
  };
  return (
    <Form form={form} ref={ref}>
      <Modal
        title="新增"
        visible={modalVisible}
        footer={
          <Button
            htmlType="submit"
            onClick={() => props.getValue(form.getFieldsValue())}
          >
            确定
          </Button>
        }
      >
        <Col xxl={16} xl={16} lg={16} sm={24} xs={24}>
          <Form.Item
            {...formItemLayout}
            name="Hazādochekkurisuto"
            label="隐患排查清单"
          >
            <Input></Input>
          </Form.Item>
        </Col>
        <Col xxl={16} xl={16} lg={16} sm={24} xs={24}>
          <Form.Item {...formItemLayout} name="shuyo" label="负责人">
            <Input></Input>
          </Form.Item>
        </Col>
        <Col xxl={16} xl={16} lg={16} sm={24} xs={24}>
          <Form.Item
            {...formItemLayout}
            name="Kaishijikan"
            label="预计开始时间"
          >
            <DatePicker
              style={{ width: '100%' }}
              showTime={{ defaultValue: moment('00:00:00', 'HH:mm') }}
              format="YYYY-MM-DD HH:mm"
            />
          </Form.Item>
        </Col>
        <Col xxl={16} xl={16} lg={16} sm={24} xs={24}>
          <Form.Item {...formItemLayout} name="Eguzekyūta" label="执行人">
            <Input></Input>
          </Form.Item>
        </Col>
        <Col xxl={16} xl={16} lg={16} sm={24} xs={24}>
          <Form.Item {...formItemLayout} name="Tantōbumon" label="负责部门">
            <Input></Input>
          </Form.Item>
        </Col>
        <Col xxl={16} xl={16} lg={16} sm={24} xs={24}>
          <Form.Item
            {...formItemLayout}
            name="Shūryōjikan"
            label="预计结束时间"
          >
            <DatePicker
              style={{ width: '100%' }}
              showTime={{ defaultValue: moment('00:00:00', 'HH:mm') }}
              format="YYYY-MM-DD HH:mm"
            />
          </Form.Item>
        </Col>
        <Col xxl={16} xl={16} lg={16} sm={24} xs={24}>
          <Form.Item {...formItemLayout} name="shu" label="状态">
            <Input></Input>
          </Form.Item>
        </Col>
        <Col xxl={16} xl={16} lg={16} sm={24} xs={24}>
          <Form.Item {...formItemLayout} name="Kakuretakikenchōsanohindo" label="隐患排查频率">
            <Input></Input>
          </Form.Item>
        </Col>
      </Modal>
    </Form>
  );
};
export default forwardRef(Childern);

// useEffect 可以看成三个生命周期钩子
// 当
// useEffect(() => {
//    // tode
// console.log(11);
// }, // 当这里什么都不写的时候 检测所有数据变化)
//    // 当这里写一个[]的时候 只检测一次变化
//    // 当这里[modalVisible] 写入modalVisible的时候 每当modalVisible变化一次 即触发一次
//    // 当前组件根据判断thsiVi 是否有值来进行modelvisible的变化
// useEffect中return 可以相当class中的 compentUnmount 卸载组件
// useEffect(()=>{
//   return ()=>{
//     卸载组件要做的事情
//   }
// },[])
