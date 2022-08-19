import { DislikeFilled, DislikeOutlined, LikeFilled, LikeOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import { Anchor, Avatar, Collapse, Comment, Skeleton, Tooltip } from 'antd';
import moment from 'moment';
import react, { createElement } from 'react';
const { Link } = Anchor;

const belint = () => {
  const visible = false;
  const [td, setTD] = react.useState(undefined);
  const [likes, setLikes] = react.useState(0);
  const [disLikes, setDisLikes] = react.useState(0);
  const [action, setAction] = react.useState(null);

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
          {createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
          <span className="commen-action">{likes}</span>
        </span>
      </Tooltip>
      <Tooltip key="comment-basic-dislike">
        <span onClick={like}>
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

  return (
    <PageContainer>
      {visible && <Skeleton type="list">ces</Skeleton>}
      <Anchor targetOffset={td} affix={true} bounds={5}>
        <Link title="de"></Link>
        <Link title="trans"></Link>
        <Link title="late"></Link>
      </Anchor>

      <Comment
        action={action}
        author={<a>wuqiying</a>}
        avatar={<Avatar src="../"></Avatar>}
        content={<p>月落乌啼霜满天，江枫渔火对愁眠，姑苏城外寒山寺，夜半钟声到客船</p>}
        datetime={
          <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
            <span>{moment().format()}</span>
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
    </PageContainer>
  );
};
export default belint;
