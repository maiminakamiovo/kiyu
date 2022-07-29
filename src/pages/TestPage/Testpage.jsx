import { PageContainer } from '@ant-design/pro-components';
import { useState } from 'react';
// import { Access, useAccess } from '@umijs/max';
import { Button, Col, Form, Input, Row, Table, Tabs } from 'antd';

const { TabPane } = Tabs;

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
  const [searchValue, setSearchValue] = useState(undefined);
  const [searchName, setSearchName] = useState(undefined);

  const toggleForm = () => {
    setExpandForm(!expandForm);
  };

  const Delete = (value) => {};

  const data = [
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
  ];

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

  const exceptionFollowUpColumns = [
    {
      title: '异常登记ID',
      dataIndex: 'nonconformanceId',
    },
    {
      title: '接入单位',
      dataIndex: 'accessUnitName',
      width: '10%',
    },
    {
      title: '异常登记',
      dataIndex: 'registerDate',
      width: 85,
      render: (text) => <span>{text ? moment(text).format(timeFormatStr) : ''}</span>,
    },
    {
      title: '整改进度',
      dataIndex: 'nonconformanceStatusName',
      width: 70,
    },
    {
      title: '登记人',
      dataIndex: 'registerPersonName',
    },
    {
      title: '异常对象',
      dataIndex: 'routInspPointName',
      width: 80,
    },
    {
      title: '异常地点',
      width: '8%',
      dataIndex: 'nonconformanceLocation',
    },
    {
      title: '异常描述',
      dataIndex: 'detailDescription',
      width: '15%',
    },
    {
      title: '整改部门',
      dataIndex: 'correctActionDepatmentName',
      width: '5%',
    },
    {
      title: '闭环负责人',
      dataIndex: 'personInChargeName',
      width: '5%',
    },
    {
      title: '整改项',
      dataIndex: 'correctActionCount',
    },
    {
      title: '待整改',
      dataIndex: 'uncommitCount',
    },
    {
      title: '待确认',
      dataIndex: 'commitCount',
    },
    {
      title: '完成项',
      dataIndex: 'completeCount',
    },
    {
      title: '完成期限',
      dataIndex: 'correctActPlanCompleteDate',
      width: 85,
      render: (text) => (text ? moment(text).format(dateFormatStr) : ''),
    },
    {
      title: '整改闭环',
      dataIndex: 'closeDate',
      width: '5%',
      render: (text, record) => {
        if (!text) {
          return '';
        } else {
          return (
            <span style={{ display: 'inline-block', width: 75 }}>
              {moment(text).format(timeFormatStr)}
            </span>
          );
        }
      },
    },
    {
      title: '操作',
      width: 45,
      render: (text, record) => (
        <a
          href={`detailExceptionFollowUp?nonconformanceId=${record.nonconformanceId}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="xfsmart-common xfsmart-see" />
        </a>
      ),
    },
  ];

  const onFinish = (values) => {
    console.log(values);
    const params = Object.keys(values)
      .filter((key) => values[key] !== null && values[key] !== undefined)
      .reduce((acc, key) => ({ ...acc, [key]: values[key] }), {});
    const keyArray = [];
    Object.keys(params).map((s, v) => {
      return true;
    });
    setSearchValue(params);
    setSearchName(Object.keys(values)[valueindex]);
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <PageContainer
      ghost
      header={{
        title: '隐患库',
      }}
    >
      <Tabs>
        <TabPane tab="隐患单位库" key="1">
          <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
            <Row>
              <Col xxl={8} xl={8} lg={12} sm={24} xs={24}>
                <Form.Item {...formItemLayout} name="ownStreet" label="所属街道">
                  <Input></Input>
                </Form.Item>
              </Col>
              <Col xxl={8} xl={8} lg={12} sm={24} xs={24}>
                <Form.Item {...formItemLayout} name="UnitProperty" label="单位属性">
                  <Input></Input>
                </Form.Item>
              </Col>
              <Col xxl={8} xl={8} lg={12} sm={24} xs={24}>
                <Form.Item {...formItemLayout} name="typeOfVenue" label="场所类型">
                  <Input></Input>
                </Form.Item>
              </Col>
            </Row>

            <Row>
              <Col xxl={8} xl={8} lg={12} sm={24} xs={24}>
                <Form.Item {...formItemLayout} name="unitName" label="单位名称">
                  <Input></Input>
                </Form.Item>
              </Col>
              <Col xxl={8} xl={8} lg={12} sm={24} xs={24}>
                <Form.Item {...formItemLayout} name="checker" label="单位属性">
                  <Input></Input>
                </Form.Item>
              </Col>
              <Col xxl={8} xl={8} lg={12} sm={24} xs={24}>
                <Form.Item {...formItemLayout} name="InspectionMethod" label="检查方式">
                  <Input></Input>
                </Form.Item>
              </Col>
            </Row>

            <Row>
              <Col xxl={8} xl={8} lg={12} sm={24} xs={24}>
                <Form.Item {...formItemLayout} name="HazardType" label="隐患类型">
                  <Input></Input>
                </Form.Item>
              </Col>
              <Col xxl={8} xl={8} lg={12} sm={24} xs={24}>
                <Form.Item {...formItemLayout} name="Reviewer" label="复查人">
                  <Input></Input>
                </Form.Item>
              </Col>
              <Col xxl={8} xl={8} lg={12} sm={24} xs={24}>
                <Form.Item {...formItemLayout} name="RectificationImplementation" label="整改时限">
                  <Input></Input>
                </Form.Item>
              </Col>
            </Row>

            <Row>
              <Col xxl={8} xl={8} lg={12} sm={24} xs={24}>
                <Form.Item {...formItemLayout} name="HazardType" label="整改进度">
                  {/* <Input></Input> */}
                </Form.Item>
              </Col>
              <Col xxl={8} xl={8} lg={12} sm={24} xs={24}>
                <Form.Item {...formItemLayout} name="Reviewer" label="整改时效">
                  {/* <Input></Input> */}
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col xxl={1} xl={1} lg={14} sm={14} xs={24}></Col>
              <Col xxl={5} xl={5} lg={10} sm={20} xs={20}>
                <Button type="primary" style={{ marginLeft: 20 }} htmlType="submit">
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
              </Col>
              <Col xxl={18} xl={18} lg={14} sm={14} xs={24}></Col>
            </Row>
          </Form>
          <Table
            columns={columns}
            dataSource={
              data
            }
          ></Table>
        </TabPane>
        <TabPane tab="隐患项库" key="2">
          <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
            <Row>
              <Col xxl={8} xl={8} lg={12} sm={24} xs={24}>
                <Form.Item {...formItemLayout} name="ownStreet" label="所属街道">
                  <Input></Input>
                </Form.Item>
              </Col>
              <Col xxl={8} xl={8} lg={12} sm={24} xs={24}>
                <Form.Item {...formItemLayout} name="UnitProperty" label="单位属性">
                  <Input></Input>
                </Form.Item>
              </Col>
              <Col xxl={8} xl={8} lg={12} sm={24} xs={24}>
                <Form.Item {...formItemLayout} name="typeOfVenue" label="场所类型">
                  <Input></Input>
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col xxl={8} xl={8} lg={12} sm={24} xs={24}>
                <Form.Item {...formItemLayout} name="unitName" label="单位名称">
                  <Input></Input>
                </Form.Item>
              </Col>
              <Col xxl={8} xl={8} lg={12} sm={24} xs={24}>
                <Form.Item {...formItemLayout} name="checker" label="单位属性">
                  <Input></Input>
                </Form.Item>
              </Col>
              <Col xxl={8} xl={8} lg={12} sm={24} xs={24}>
                <Form.Item {...formItemLayout} name="InspectionMethod" label="检查方式">
                  <Input></Input>
                </Form.Item>
              </Col>
            </Row>

            <Row>
              <Col xxl={8} xl={8} lg={12} sm={24} xs={24}>
                <Form.Item {...formItemLayout} name="HazardType" label="隐患类型">
                  <Input></Input>
                </Form.Item>
              </Col>
              <Col xxl={8} xl={8} lg={12} sm={24} xs={24}>
                <Form.Item {...formItemLayout} name="Reviewer" label="复查人">
                  <Input></Input>
                </Form.Item>
              </Col>
              <Col xxl={8} xl={8} lg={12} sm={24} xs={24}>
                <Form.Item {...formItemLayout} name="RectificationImplementation" label="整改时限">
                  <Input></Input>
                </Form.Item>
              </Col>
            </Row>

            <Row>
              <Col xxl={8} xl={8} lg={12} sm={24} xs={24}>
                <Form.Item {...formItemLayout} name="HazardType" label="整改进度">
                  {/* <Input></Input> */}
                </Form.Item>
              </Col>
              <Col xxl={8} xl={8} lg={12} sm={24} xs={24}>
                <Form.Item {...formItemLayout} name="Reviewer" label="整改时效">
                  {/* <Input></Input> */}
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col xxl={1} xl={1} lg={14} sm={14} xs={24}></Col>
              <Col xxl={5} xl={5} lg={10} sm={20} xs={20}>
                <Button type="primary" style={{ marginLeft: 20 }} htmlType="submit">
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
              </Col>
              <Col xxl={18} xl={18} lg={14} sm={14} xs={24}></Col>
            </Row>
          </Form>
          <Table
            columns={exceptionFollowUpColumns}
            dataSource={
              data
              // searchValue===undefined?data:data.filter(index=>index[Object.keys[searchValue]].includes(Object.values[searchValue]))
            }
          ></Table>
        </TabPane>
      </Tabs>
    </PageContainer>
  );
};

export default Testpage;
