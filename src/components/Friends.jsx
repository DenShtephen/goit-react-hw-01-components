import PropTypes from "prop-types";


const FriendListItem = ({ id, avatar, name, isOnline }) => {
    const statusColor = isOnline ? 'green' : 'red';

    return (
        <li key={id}>
            <span style={{ backgroundColor: statusColor }}>{isOnline ? 'Online' : 'Offline'}</span>
            <img src={avatar} alt="User avatar" width="48" />
            <p>{name}</p>
        </li>
    );
};

export const FriendList = (friends) => {
    const liItems = friends.friends.map(el => FriendListItem(el))
    return <ul>
    {liItems}
  </ul>
}

FriendListItem.propTypes = {
    id: PropTypes.number,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}

FriendList.propTypes = {
friends: PropTypes.array.isRequired
}