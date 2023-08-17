import PropTypes from 'prop-types';
import {Container,ProfileImg,CardDescr,Stats}   from './Profile.styled'




export const Profile =  ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes},
}) => {
   
  return (
    <Container className="profile">
      <CardDescr className="description">
        <ProfileImg src={avatar} alt={username} className="avatar" />
        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </CardDescr>

      <Stats>
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">{views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{likes}</span>
        </li>
      </Stats>
    </Container>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};