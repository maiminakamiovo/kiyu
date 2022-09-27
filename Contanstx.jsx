import { Form, Input, InputNumber, Popconfirm, Table, Typography } from 'antd';
import React, { useState } from 'react';

class Contanstx extends React.Component {
  state = {
    originData: [],
    editingKey: '',
    pageSize: 5,
    sePageSize: 5,
  };

  componentDidMount() {
    for (let i = 0; i < 100; i++) {
      originData.push({
        key: i.toString(),
        name: `Edrward ${i}`,
        age: 32,
        address: `London Park no. ${i}`,
      });
    }
    this.setState({ originData });
  }

  edit = (record) => {
    form.setFieldsValue({
      name: '',
      age: '',
      address: '',
      ...record,
    });
    this.setState({ editingKey });
  };

  cancel = () => {
    this.setState({ editingKey: '' });
  };

  save = async (key) => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex((item) => key === item.key);

      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        this.setState({ originData: newData });
        this.setState({ editingKey: '' });
      } else {
        newData.push(row);
        this.setState({ originData: newData });
        this.setState({ editingKey: '' });
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };

  columns = [
    {
      title: 'name',
      dataIndex: 'name',
      width: '25%',
      editable: true,
    },
    {
      title: 'age',
      dataIndex: 'age',
      width: '15%',
      editable: true,
    },
    {
      title: 'address',
      dataIndex: 'address',
      width: '40%',
      editable: true,
    },
    {
      title: 'operation',
      dataIndex: 'operation',
      render: (_, record) => {
        const editable = this.isEditing(record);
        return editable ? (
          <span>
            <Typography.Link
              onClick={() => this.save(record.key)}
              style={{
                marginRight: 8,
              }}
            >
              Save
            </Typography.Link>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <Typography.Link disabled={editingKey !== ''} onClick={() => this.edit(record)}>
            Edit
          </Typography.Link>
        );
      },
    },
  ];

  isEditing = (record) => record.key === editingKey;
  mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex === 'age' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: this.isEditing(record),
      }),
    };
  });

  render() {
    return (
      <Form form={form} component={false}>
        <Table
          components={{
            body: {
              cell: EditableCell,
            },
          }}
          bordered
          dataSource={data}
          columns={this.mergedColumns}
          rowClassName="editable-row"
          pagination={{
            onChange: cancel,
          }}
        />
      </Form>
    );
  }
}

export default Contanstx;
