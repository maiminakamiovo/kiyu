/**
 * @file:   隐患项组件
 * @author: wuqiying
 */

import { useState } from 'react';
import { Tag, Row, Col, Form, Modal, Table } from 'antd';
import { ProCard } from '@ant-design/pro-components';
import { CheckCircleOutlined, InfoCircleOutlined } from '@ant-design/icons';
import moment from 'moment';
import ImgUpload from 'component/imgUpload';
import '../findHiddenDangerLibrary/index.less';

const HiddenItem = (props) => {
    const { index } = props;
    const [visible, setVisible] = useState(false);
    const formItemLayout4 = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };
    const formItemLayout3 = {
        labelCol: { span: 4 },
        wrapperCol: { span: 20 },
    };
    // 先判定超期，再判定临期
    function getCurrentItemStatus(item) {
        // 整改完成，复查时间晚于整改期限，为超期
        if (item.correctStatus === 'Y' && item.reviewTime && moment(item.correctTime).diff(moment(item.reviewTime), 'days') < 0) {
            return <Tag className="rectificationHeightofDetails">整改超期</Tag>;
        }
        const nowTime = moment().format('YYYY-MM-DD');
        // 整改中，当前时间超过整改期限，为超期
        if (item.correctStatus !== 'Y' && moment(item.correctTime).diff(moment(nowTime), 'days') < 0) {
            return <Tag className="rectificationHeightofDetails">整改超期</Tag>;
        }
        // 整改中，判断是否整改临期
        if (item.correctStatus !== 'Y' && moment(item.correctTime).diff(moment(nowTime), 'days') <= 3) {
            return <Tag className="rectificationCenterofDetails">整改临期</Tag>;
        }
    }

    const columns = [
        {
            width: 35,
            render: (text) => <div className="borderRadius"></div>,
        },
        {
            title: '整改期限',
            dataIndex: 'correctTime',
            key: 'correctTime',
        },
        {
            title: '复查日期',
            dataIndex: 'reviewTime',
            key: 'reviewTime',
        },
        {
            title: '整改结果',
            dataIndex: 'correctStatus',
            render: (recond) =>
                recond.correctStatus === 'Y' ? <span>复查通过</span> : recond.correctStatus === 'N' ? <span>复查未通过</span> : <span>待复查</span>,
        },
    ];
    return (
        <ProCard
            bordered
            title={
                <span>
                    隐患项&nbsp;<a style={{ color: '#1890ff' }}>{index.sequenceId}</a>
                </span>
            }
            className="cardHeader"
            extra={index.correctStatus !== 'Y' ? <Tag className="rectification">整改中</Tag> : <Tag className="rectificationCompletedOfDetails">整改完成</Tag>}
            style={{ fontSize: '14px', fontFamily: 'Regular', display: 'flex', marginBottom: '20px' }}
        >
            <Row>
                <Col span={18}>
                    <Form.Item {...formItemLayout3} label="隐患地点">
                        {index.hiddenPlace}
                    </Form.Item>
                </Col>
            </Row>
            <Row>
                <Col span={18}>
                    <Form.Item {...formItemLayout3} label="隐患内容">
                        <span>{index.hiddenContent}</span>
                    </Form.Item>
                </Col>
            </Row>
            <Row>
                <Col span={18}>
                    <Form.Item {...formItemLayout3} label="隐患类型">
                        {index.hiddenType}
                    </Form.Item>
                </Col>
            </Row>

            <Row>
                <Col span={9}>
                    <Form.Item {...formItemLayout4} label="隐患等级">
                        {index.hiddenLevelName === '高风险' ? (
                            <Tag className="hihigherDangergherDanger">{index.hiddenLevelName}</Tag>
                        ) : index.hiddenLevelName === '中风险' ? (
                            <Tag className="middinDanger"> {index.hiddenLevelName}</Tag>
                        ) : index.hiddenLevelName === null || undefined || index.hiddenLevelName.length === 0 ? (
                            <></>
                        ) : (
                            <Tag className="lowDanger"> {index.hiddenLevelName}</Tag>
                        )}
                    </Form.Item>
                </Col>
                <Col span={9}>
                    <Form.Item {...formItemLayout4} label="整改时限">
                        {index.correctTime}
                        &nbsp;&nbsp;
                        {getCurrentItemStatus(index)}
                    </Form.Item>
                </Col>
            </Row>
            <Row>
                <Col span={9}>
                    <Form.Item {...formItemLayout4} label="复查结果">
                        {index.correctStatus === 'Y' ? (
                            <span>
                                复查通过&nbsp;
                                <CheckCircleOutlined style={{ color: 'green' }} />
                            </span>
                        ) : index.correctStatus === 'N' ? (
                            <span>
                                复查未通过&nbsp;
                                <InfoCircleOutlined style={{ color: 'red' }} />
                            </span>
                        ) : (
                            <span>待复查</span>
                        )}
                    </Form.Item>
                </Col>
                <Col span={9}>
                    <Form.Item {...formItemLayout4} label="复查时间">
                        {index.reviewTime}
                    </Form.Item>
                </Col>
            </Row>
            <Row>
                <Col span={18}>
                    <Form.Item {...formItemLayout3} label="附件">
                        <ImgUpload
                            fieldName="contentIds"
                            maxNumLimit={12}
                            fileSizeLimit={10}
                            listType="text"
                            defaultValue={index.contentList}
                            hideRemoveIcon={true}
                            hideUploadBtn={true}
                        />
                    </Form.Item>
                </Col>
            </Row>
            {index.hdirhList.length !== 0 && (
                <Col span={18}>
                    <Form.Item {...formItemLayout3} label="整改历史">
                        <a onClick={() => setVisible(true)}>查看历史</a>
                    </Form.Item>
                </Col>
            )}
            <Modal className="ModelOfHIddenborderLine" visible={visible} title="整改历史" onOk={() => setVisible(false)} onCancel={() => setVisible(false)}>
                <Table pagination={false} dataSource={index.hdirhList} columns={columns} />
            </Modal>
        </ProCard>
    );
};
export default HiddenItem;
