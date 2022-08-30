import { Transfer,Tooltip } from 'antd';
import { useState } from 'react';

const mockData = Array.from({ length: 20 }).map((_, i) => ({
  key: i.toString(),
  title: `contents${i + 1}`,
  description: `description of content${i + 1}`,
}));
const initialTarkeys = mockData.filter((item) => Number(item.key) > 10).map((item) => item.key);

const Backpage = () => {
  const [targetKeys, setTargetKeys] = useState(initialTarkeys);
  const [selectedKeys, setSelectKeys] = useState([]);

  const onChange = (nextTargetKeys, direction, movekeys) => {
    console.log(nextTargetKeys, 'targetKeys');
    console.log(direction, 'direction');
    console.log(movekeys, 'movekeys');
    setTargetKeys(nextTargetKeys);
  };

  const onSelectChange = (sourceSelectKeys, targetSelectKeys) => {
    console.log(sourceSelectKeys);
    console.log(targetSelectKeys);
    setSelectKeys([...sourceSelectKeys, ...targetSelectKeys]);
  };

  const onScroll = (direction, e) => {
    console.log(direction);
    console.log(e);
  };

  const handleSearch = (value) => {
    console.log(value);
  };

  return (
    <Transfer
      dataSource={mockData}
      titles={['Source', 'Target']}
      targetKeys={targetKeys}
      selectedKeys={selectedKeys}
      onSelectChange={onSelectChange}
      onSearch={handleSearch}
      onChange={onChange}
      onScroll={onScroll}
      render={(item) => item.title}
    ></Transfer>
  );
};
export default Backpage;
