
import PropTypes from 'prop-types';
import { FriendItem } from '../FriendItem/FriendItem';

export const FriendList = ({ friends }) => {
    return (
        <ul className ="friend-list">
            {friends.map(({ id, avatar, name, isOnline }) => (
                <FriendItem
                    avatar={avatar}
                    name={name}
                    isOnline={isOnline}
                    key={id}
                />
            ))}
        </ul>
    )
};


FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};