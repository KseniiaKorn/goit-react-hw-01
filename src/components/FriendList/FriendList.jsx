import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import './FriendList.css';

const FriendList = ({friends}) => {
    return (
    <ul className="friendList">
      {friends.map(friend => (
        <li key={friend.id} className="friendListItem">
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default FriendList;