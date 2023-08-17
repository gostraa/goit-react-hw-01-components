import PropTypes from 'prop-types';

export const FriendItem = ({ avatar, name, isOnline, id }) => {
  return (
    <li className="item" key={id}>
      <img className="avatar" src={avatar} alt={name} width="48" />
        <p className="name">{name}</p>
        <span className="status">{isOnline? "online":"offline"}</span>
          
</li>
  )
}


FriendItem.propsTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};