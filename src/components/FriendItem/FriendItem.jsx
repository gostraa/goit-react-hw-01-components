
import PropTypes from 'prop-types';
export const FriendItem = ({ avatar, name, isOnline, id }) => {
  return (
    <li className ="item" key= {id}>
          <span className="status">{isOnline? "online":"offline"}</span>
 <img className="avatar" src={avatar} alt={name} width="48" />
          <p className="name">{name}</p>
</li>
  )
}


FriendItem.propsTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};