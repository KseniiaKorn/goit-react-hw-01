import PropTypes from 'prop-types';
import './FriendListItem.css'; 

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className="friendItem">
      <img src={avatar} alt="Avatar" className="avatar" />
      <p className="name">{name}</p>
      <p className={isOnline ? 'status online' : 'status offline'}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;