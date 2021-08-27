import PropTypes from 'prop-types';
import { List, Item, Status, Avatar, Name } from './FriendList.styles';

function FriendList({ friends }) {
  return (
    <List>
      {friends.map(friend => (
        <Item key={friend.id}>
          <Status status={friend.isOnline}></Status>
          <Avatar src={friend.avatar}></Avatar>
          <Name>{friend.name}</Name>
        </Item>
      ))}
    </List>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      isOnline: PropTypes.bool,
      avatar: PropTypes.string,
      name: PropTypes.string.isRequired,
    }),
  ),
};

export default FriendList;
