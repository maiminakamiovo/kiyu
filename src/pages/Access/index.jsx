import { DownOutlined, PlusOutlined, UpOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import { Button, Card, Col, DatePicker, Form, Input, Row, Table } from 'antd';
import moment from 'moment';
import { useRef, useState } from 'react';
import Childern from './ChildernModel';

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

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const Testpage = () => {
  const [form] = Form.useForm();
  const [expandForm, setExpandForm] = useState(false);
  const [searchValue, setSearchValue] = useState([]);
  const [createModalVisible, handleModalVisible] = useState(false);
  const myRef = useRef(null);
  // const [finallyParams,setFinallyParams]=useState(false)
  const [data, setData] = useState([
    {
      Shiriarunanbā: 1,
      Hazādochekkurisuto: 'wqy',
      shuyo: 'kuma32',
      Tantōbumon: 'kumaes',
      Eguzekyūta: 'kumaesss',
      Kaishijikan: '2022-01-17 09:21',
      Shūryōjikan: '2023-01-17 16:21',
      Kakuretakikenchōsanohindo: '单次',
      shu: '开始',
      id: '1',
    },
    {
      Shiriarunanbā: 2,
      Hazādochekkurisuto: 'wzcx',
      shuyo: 'kuma21',
      Tantōbumon: 'kumaes',
      Eguzekyūta: 'kumaesss',
      Kaishijikan: '2022-07-17 09:21',
      Shūryōjikan: '2024-01-17 16:21',
      Kakuretakikenchōsanohindo: '每周',
      shu: '取消',
      id: '2',
    },
    {
      Shiriarunanbā: 3,
      Hazādochekkurisuto: 'lbb',
      shuyo: 'kuma32',
      Tantōbumon: 'kumaes',
      Eguzekyūta: 'kumaesss',
      Kaishijikan: '2022-11-17 09:21',
      Shūryōjikan: '2026-01-17 16:21',
      Kakuretakikenchōsanohindo: '每月',
      shu: '结束',
      id: '3',
    },
    {
      Shiriarunanbā: 4,
      Hazādochekkurisuto: 'pjh',
      shuyo: 'kuma1',
      Tantōbumon: 'kumaes',
      Eguzekyūta: 'kumaesss',
      Kaishijikan: '2022-09-17 09:21',
      Shūryōjikan: '2022-11-17 16:21',
      Kakuretakikenchōsanohindo: '每日三次',
      shu: '开始',
      id: '4',
    },
    {
      Shiriarunanbā: 5,
      Hazādochekkurisuto: 'add',
      shuyo: 'kuma4',
      Tantōbumon: 'kumaes',
      Eguzekyūta: 'kumaesss',
      Kaishijikan: '2022-12-17 09:21',
      Shūryōjikan: '2022-11-17 16:21',
      Kakuretakikenchōsanohindo: '每周一次',
      shu: '开始',
      id: '5',
    },
    {
      Shiriarunanbā: 6,
      Hazādochekkurisuto: 'exit',
      shuyo: 'kuma2',
      Tantōbumon: 'kumaes',
      Eguzekyūta: 'kumaesss',
      Kaishijikan: '2022-06-17 09:21',
      Shūryōjikan: '2022-12-17 16:21',
      Kakuretakikenchōsanohindo: '单次',
      shu: '结束',
      id: '6',
    },
    {
      Shiriarunanbā: 7,
      Hazādochekkurisuto: 'mkdir',
      shuyo: 'kuma12',
      Tantōbumon: 'kumaes',
      Eguzekyūta: 'kumaesss',
      Kaishijikan: '2022-01-17 09:21',
      Shūryōjikan: '2022-05-23 16:21',
      Kakuretakikenchōsanohindo: '每周三次',
      shu: '取消',
      id: '7',
    },
    {
      Shiriarunanbā: 8,
      Hazādochekkurisuto: 'ls',
      shuyo: 'kuma21',
      Tantōbumon: 'kumaes',
      Eguzekyūta: 'kumaesss',
      Kaishijikan: '2022-03-17 09:21',
      Shūryōjikan: '2023-01-29 16:21',
      Kakuretakikenchōsanohindo: '单次',
      shu: '取消',
      id: '8',
    },
  ]);

  const toggleForm = () => {
    setExpandForm(!expandForm);
  };

  const Delete = (recond) => {
    const dd = JSON.parse(JSON.stringify(data));
    const { id } = recond;
    const index = dd.findIndex((item) => item.id === id);
    dd.splice(index, 1);
    setData(dd);
  };

  const columns = [
    {
      title: '序号',
      dataIndex: 'Shiriarunanbā',
      key: 'Shiriarunanbā',
    },
    {
      title: '隐患排查清单',
      dataIndex: 'Hazādochekkurisuto',
      key: 'Hazādochekkurisuto',
    },
    {
      title: '负责人',
      dataIndex: 'shuyo',
      key: 'shuyo',
    },
    {
      title: '负责部门',
      dataIndex: 'Tantōbumon',
      key: 'Tantōbumon',
    },
    {
      title: '执行人',
      dataIndex: 'Eguzekyūta',
      key: 'Eguzekyūta',
    },
    {
      title: '开始时间',
      dataIndex: 'Kaishijikan',
      key: 'Kaishijikan',
    },
    {
      title: '结束时间',
      dataIndex: 'Shūryōjikan',
      key: 'Shūryōjikan',
    },
    {
      title: '隐患排查频次',
      dataIndex: 'Kakuretakikenchōsanohindo',
      key: 'Kakuretakikenchōsanohindo',
    },
    {
      title: '状态',
      dataIndex: 'shu',
      key: 'shu',
    },
    {
      title: '操作',
      key: 'id',
      render: (record) => {
        return <a onClick={() => Delete(record)}>Delete</a>;
      },
    },
  ];

  const uuidv4 = () => {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
      (
        c ^
        (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
      ).toString(16),
    );
  };

  const onFinish = (values) => {
    // 将有值的查询条件过滤出来
    const params = Object.keys(values)
      .filter(
        (key) =>
          values[key] !== null &&
          values[key] !== undefined &&
          values[key] !== '',
      )
      .reduce((acc, key) => ({ ...acc, [key]: values[key] }), {});
    const keyArray = [];
    // 查询条件从始至终就拷贝原始数据就好了
    let newData = JSON.parse(JSON.stringify(data));
    console.log(params);
    console.log(Object.values(params).length === 0);
    // 没必要搞这么复杂 在上面设置一下 &&values[key] !== ''  过滤值为""的key
    // console.log(Object.values(params).filter(index=>index!==''));
    // if (Object.values(params).length===0 ) {
    //   setFinallyParams(false)
    // }
    // if (Object.values(params).filter(index=>index!=='').length>0 ) {
    //   setFinallyParams(true)
    // }else{
    //   setFinallyParams(false)
    // }

    // 解决查询条件全部清空无法重新获取列表数据问题
    if (Object.values(params).length < 1) {
      setSearchValue(newData);
    } else {
      Object.keys(params).forEach((s, v) => {
        keyArray.push(s);
        for (let index = 0; index < keyArray.length; index++) {
          const element = keyArray[index];
          if (element === 'Shūryōjikan' || element === 'Kaishijikan') {
            params[element] = moment(params[element]).format(
              'YYYY-MM-DD HH:mm',
            );
          }
          newData = newData.filter(
            (index) => index[element] === params[element],
          );
          setSearchValue(
            newData.filter((index) => index[element] === params[element]),
          );
        }
      });
    }
  };

  const onReset = () => {
    form.resetFields();
    setSearchValue(data);
  };

  const getChildernValue = (value) => {
    // 子组件通过ref传值过来 通过myRef.current.getFieldsValue()取到我子组件from表单提交的值
    const addData = JSON.parse(JSON.stringify(data));
    const newValue = JSON.parse(JSON.stringify(value));
    newValue.Shiriarunanbā = data.length + 1;
    newValue.id = data.length + 1;
    newValue.Kaishijikan = moment(newValue.Kaishijikan).format(
      'YYYY-MM-DD HH:mm',
    );
    newValue.Shūryōjikan = moment(newValue.Shūryōjikan).format(
      'YYYY-MM-DD HH:mm',
    );
    addData.splice(addData.length, 1, newValue);
    setData(addData);
    handleModalVisible(false);
  };
  return (
    <PageContainer
      ghost
      header={{
        title: 'table示例',
      }}
    >
      <Card bodyStyle={{ marginBottom: '32px' }}>
        <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
          <Row>
            <Col xxl={6} xl={6} lg={12} sm={24} xs={24}>
              <Form.Item
                {...formItemLayout}
                name="Hazādochekkurisuto"
                label="隐患排查清单"
              >
                <Input></Input>
              </Form.Item>
            </Col>
            <Col xxl={6} xl={6} lg={12} sm={24} xs={24}>
              <Form.Item {...formItemLayout} name="shuyo" label="负责人">
                <Input></Input>
              </Form.Item>
            </Col>
            <Col xxl={6} xl={6} lg={12} sm={24} xs={24}>
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
            <Col xxl={6} xl={6} lg={12} sm={24} xs={24}>
              <Form.Item {...formItemLayout} name="Eguzekyūta" label="执行人">
                <Input></Input>
              </Form.Item>
            </Col>
          </Row>

          {expandForm ? (
            <Row>
              <Col xxl={6} xl={6} lg={12} sm={24} xs={24}>
                <Form.Item
                  {...formItemLayout}
                  name="Tantōbumon"
                  label="负责部门"
                >
                  <Input></Input>
                </Form.Item>
              </Col>
              <Col xxl={6} xl={6} lg={12} sm={24} xs={24}>
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
              <Col xxl={6} xl={6} lg={12} sm={24} xs={24}>
                <Form.Item {...formItemLayout} name="shu" label="状态">
                  <Input></Input>
                </Form.Item>
              </Col>
              <Col xxl={6} xl={6} lg={12} sm={24} xs={24}>
                <Form.Item
                  {...formItemLayout}
                  name="Kakuretakikenchōsanohindo"
                  label="隐患排查频率"
                >
                  <Input></Input>
                </Form.Item>
              </Col>
            </Row>
          ) : null}
          <Row>
            <Col xxl={19} xl={19} lg={14} sm={14} xs={24}></Col>
            <Col xxl={5} xl={5} lg={10} sm={20} xs={20}>
              <Button
                type="primary"
                style={{ marginLeft: 20 }}
                htmlType="submit"
              >
                查询
              </Button>
              <Button
                style={{ marginLeft: 20 }}
                type="primary"
                htmlType="submit"
                onClick={onReset}
              >
                重置
              </Button>
              <a style={{ marginLeft: 8 }} onClick={toggleForm}>
                {expandForm ? (
                  <span>
                    <UpOutlined />
                    收起
                  </span>
                ) : (
                  <span>
                    <DownOutlined />
                    展开
                  </span>
                )}
              </a>
            </Col>
          </Row>
        </Form>
      </Card>

      <Card
        title="隐患排查计划"
        extra={
          <Button type="primary" onClick={() => handleModalVisible(true)}>
            {' '}
            <PlusOutlined />
            新增
          </Button>
        }
      >
        <Table
          columns={columns}
          dataSource={searchValue.length > 0 ? searchValue : data}
          rowKey={uuidv4()}
        ></Table>
      </Card>
      <Childern
        ref={myRef}
        modalVisible={createModalVisible}
        getValue={getChildernValue}
      ></Childern>
    </PageContainer>
  );
};

export default Testpage;
