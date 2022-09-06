import { DislikeFilled, DislikeOutlined, LikeFilled, LikeOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import {
  Anchor,
  AutoComplete,
  Avatar,
  Button,
  Collapse,
  Comment,
  DatePicker,
  Form,
  Input,
  Skeleton,
  Tooltip,
} from 'antd';
import moment from 'moment';
import react, { createElement } from 'react';
const { Link } = Anchor;

const mockVal = (str, repeat = 1) => ({
  value: str.repeat(repeat),
});

const belint = () => {
  const visible = false;
  const [td, setTD] = react.useState(undefined);
  const [likes, setLikes] = react.useState(0);
  const [disLikes, setDisLikes] = react.useState(0);
  const [action, setAction] = react.useState(null);
  const [value, setValue] = react.useState('');
  const [option, setOption] = react.useState([]);

  const onSearch = (SearchText) => {
    setOption(
      !SearchText ? [] : mockVal(SearchText),
      mockVal(SearchText, 2),
      mockVal(SearchText, 3)
    );
  };

  const onSelect = (data) => {
    console.log('onSelect', data);
  };

  const onChange = (value) => {
    setValue(value);
  };

  const onFromSubmit = (value) => {
    console.log(value);
  };

  const like = () => {
    setLikes(1);
    setDisLikes(0);
    setAction('liked');
  };

  const disLike = () => {
    setLikes(0);
    setDisLikes(1);
    setAction('disliked');
  };

  const actions = [
    <>
      <Tooltip key="comment-basic-like" title="Like">
        <span onClick={like}>
          {createElement(action === 'like' ? LikeFilled : LikeOutlined)}
          <span className="commen-action">{likes}</span>
        </span>
      </Tooltip>
      <Tooltip key="comment-basic-dislike">
        <span onClick={disLike}>
          {createElement(action === 'liked' ? DislikeFilled : DislikeOutlined)}
          <span className="commen-action">{disLikes}</span>
        </span>
      </Tooltip>
      <span key="comment-basic-reply-to">Reply to</span>
    </>,
  ];
  react.useEffect(() => {
    setTD(window.innerHeight / 2);
  }, []);

  const dd = (value) => {
    console.log(value);
  };
  return (
    <PageContainer>
      {visible && <Skeleton type="list">ces</Skeleton>}
      <Anchor targetOffset={td} affix={true} bounds={5}>
        <Link title="de"></Link>
        <Link title="trans"></Link>
        <Link title="late"></Link>
      </Anchor>

      <Comment
        actions={actions}
        author={<a>wuqiying</a>}
        avatar={<Avatar src="../"></Avatar>}
        content={<p>月落乌啼霜满天，江枫渔火对愁眠，姑苏城外寒山寺，夜半钟声到客船</p>}
        datetime={
          <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
            <span>{moment().format('YYYY-MM-DD HH:mm:ss')}</span>
          </Tooltip>
        }
      ></Comment>

      <Collapse accordion defaultActiveKey={['1']} onChange={onchange}>
        <Collapse.Panel header="这是第一个折叠面板">
          <p>wosh</p>
        </Collapse.Panel>
        <Collapse.Panel header="这是第二个折叠面板">
          <p>wosh</p>
        </Collapse.Panel>
        <Collapse.Panel header="这是第三个折叠面板">
          <p>wosh</p>
        </Collapse.Panel>
      </Collapse>

      <AutoComplete
        style={{ withd: 200 }}
        onSearch={onSearch}
        onChange={onChange}
        onSelect={onSelect}
        placeholder="name"
        options={option}
      />

      <Form colon={true} disabled={false} component={false} scrollToFirstError={true}>
        <Form.Item require dlabel="dd">
          <Input></Input>
        </Form.Item>
        <Form.Item label="dd">
          <Input></Input>
        </Form.Item>
        <Form.Item label="dd">
          <Input></Input>
        </Form.Item>
        <Form.Item label="dd">
          <DatePicker
            onChange={dd}
            allowClear={true}
            autoFocus={true}
            bordered={false}
            picker="date"
          />
        </Form.Item>
        <Form.Item label="dd">
          <Input></Input>
        </Form.Item>
        <Button htmlType="submit" onclick={onFromSubmit}>
          提交
        </Button>
      </Form>
    </PageContainer>
  );
};
export default belint;
