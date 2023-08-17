import PropTypes from 'prop-types';
import { Card, FriendsList } from './Friends.styled';

const FriendListItem = ({ id, avatar, name, isOnline }) => {
  const statusColor = isOnline ? 'green' : 'red';

  return (
    <FriendsList key={id}>
      <span style={{ color: statusColor }}>
        {isOnline ? 'Online' : 'Offline'}
      </span>
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </FriendsList>
  );
};

export const FriendList = friends => {
  const liItems = friends.friends.map(el => FriendListItem(el));
  return <Card>{liItems}</Card>;
};

FriendListItem.propTypes = {
  id: PropTypes.number,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
