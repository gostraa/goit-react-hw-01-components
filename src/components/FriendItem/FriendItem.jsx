import PropTypes from 'prop-types';
import { Friend } from './FriendItem.styled';
export const FriendItem = ({ avatar, name, isOnline, id }) => {
  return (
    <Friend className="item" key={id}>
      <span className={isOnline ? 'online' : 'offline'}></span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </Friend>
  );
};

FriendItem.propsTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
