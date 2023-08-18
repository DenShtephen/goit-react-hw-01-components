import PropTypes from 'prop-types';
import { FriendsItem } from './Friends.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  const statusColor = isOnline ? 'green' : 'red';

  return (
    <FriendsItem>
      <span
        style={{
          backgroundColor: statusColor,
          width: 10,
          height: 10,
          borderRadius: '50%',
        }}
      ></span>
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </FriendsItem>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
