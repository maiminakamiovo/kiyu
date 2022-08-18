import { EllipsisOutlined, QuestionCircleOutlined, RightOutlined } from '@ant-design/icons';
import {
  PageContainer,
  ProCard,
  ProForm,
  ProTable,
  StatisticCard,
  TableDropdown,
  WaterMark,
} from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import { Form, Space, Tooltip } from 'antd';
import React from 'react';
import timestampToTime from '../../components/units';
import styles from './index.less';

const { Statistic } = StatisticCard;

const valueEnum = {
  0: 'close',
  1: 'running',
  2: 'online',
  3: 'error',
};
const listDataSource = [];
const creators = ['wuqi', 'diudiu', 'wulei', 'fang'];
for (let i = 0; i <= 10; i += 1) {
  listDataSource.push({
    key: i,
    name: 'appname',
    creator: creators[Math.floor(Math.random() * creators.length)],
    containers: Math.floor(Math.random() * 20),
    createdAT: Date.now() - Math.floor(Math.random() * 100000),
    memo: i % 2 === 1 ? '1qss' : 1,
  });
}

console.log(history);
console.log(location);
console.log(window);
console.log(Date.now());
console.log(timestampToTime(Date.now()));
const mapArray = [];
for (let j = 0; j <= 9; j++) {
  mapArray.push(j);
}
console.log(mapArray);
console.log(mapArray.at(-1));
//除了Array  String和TyedArray也支持at()
const columns = [
  { title: '应用名称', width: 80, dataIndex: 'name', render: (_) => <a>{_}</a> },
  {
    title: '容器数量',
    align: 'center',
    dataIndex: 'containers',
    sorter: (_, v) => _.containers - v.containers,
  },
  {
    title: '状态',
    width: 80,
    dataIndex: 'status',
    valueEnum: {
      all: { text: '全部', status: 'Default' },
      close: { text: '关闭', status: 'Default' },
      running: { text: '运行中', status: 'Processing' },
      online: { text: '已上线', status: 'Success' },
      error: { text: '异常', status: 'Error' },
    },
  },
  {
    title: '创建者',
    width: 80,
    dataIndex: 'creator',
    valueEnum: {
      all: { text: '全部' },
      付小小: { text: '付小小' },
      曲丽丽: { text: '曲丽丽' },
      林东东: { text: '林东东' },
      陈帅帅: { text: '陈帅帅' },
      兼某某: { text: '兼某某' },
    },
  },
  {
    title: (
      <>
        创建时间
        <Tooltip placement="top" title="这是一段描述">
          <QuestionCircleOutlined style={{ marginLeft: 4 }} />
        </Tooltip>
      </>
    ),
    width: 140,
    key: 'since',
    dataIndex: 'createdAt',
    valueType: 'date',
    sorter: (a, b) => a.createdAT - b.createdAT,
  },
  {
    title: '备注',
    dataIndex: 'memo',
    ellipsis: true,
    copyable: true,
  },
  {
    title: '操作',
    width: 180,
    key: 'option',
    valueType: 'option',
    render: () => [
      <a key="link">链路</a>,
      <a key="link2">报警</a>,
      <a key="link3">监控</a>,
      <TableDropdown
        key="actionGroup"
        menus={[
          { key: 'copy', name: '复制' },
          { key: 'delete', name: '删除' },
        ]}
      />,
    ],
  },
];
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

  // 深拷贝
  let data = { name: 'wqy', id: '11' };
  let newData = { ...data };
  newData.id = 22;
  console.log(data); // {name: 'wqy', id: '11'}
  console.log(newData); // {name: 'wqy', id: 22}
  let array = [1, 2, 3];
  let ay = [...array];
  ay[0] = 999;
  console.log(array); // [1, 2, 3]
  console.log(ay); //[999, 2, 3]

  return (
    <PageContainer ghost>
      <div className={styles.container}>
        {/* <Guide name={trim(name)} /> */}
        {/*<Demo value={1}></Demo>*/}
      </div>
      <ProForm form={form}>
        <ProCard direction={'column'} ghost gutter={[0, 8]}>
          <WaterMark content="wqs">
            <ProTable
              columns={columns}
              dataSource={listDataSource}
              rowKey="key"
              pagination={{ showQuickJumper: true }}
              search={false}
              dateFormatter={'string'}
              headerTitle={'dd'}
              toolBarRender={false}
            />
          </WaterMark>
          <StatisticCard
            title={
              <Space>
                <span>部门一</span>
                <RightOutlined style={{ color: 'rgba(0,0,0,0.65)' }} />
              </Space>
            }
            extra={<EllipsisOutlined />}
            statistic={{
              value: 1102893,
              prefix: '¥',
              description: (
                <Space>
                  <Statistic title="实际完成度" value="82.3%" />
                  <Statistic title="当前目标" value="¥6000" />
                </Space>
              ),
            }}
            chart={
              <>
                <img
                  src="https://gw.alipayobjects.com/zos/alicdn/BA_R9SIAV/charts.svg"
                  alt="chart"
                  width="100%"
                />
              </>
            }
            style={{ width: 400 }}
          />
        </ProCard>
      </ProForm>
      <Statistic title="我是猪" value="11" />
    </PageContainer>
  );
};

export default HomePage;
