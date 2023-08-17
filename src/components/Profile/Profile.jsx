import PropTypes from 'prop-types';
import {
  Card,
  CardHeader,
  CardPoster,
  CardText,
  CardSocials,
  CardSocialsList,
  CardSocialsText,
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <Card>
      <div>
        <CardPoster src={avatar} alt={username} />
        <CardHeader>{username}</CardHeader>
        <CardText>@{tag}</CardText>
        <CardText>{location}</CardText>
      </div>

      <CardSocials>
        <CardSocialsList>
          <CardSocialsText>Followers</CardSocialsText>
          <span>{followers}</span>
        </CardSocialsList>
        <CardSocialsList>
          <CardSocialsText>Views</CardSocialsText>
          <span>{views}</span>
        </CardSocialsList>
        <CardSocialsList>
          <CardSocialsText>Likes</CardSocialsText>
          <span>{likes}</span>
        </CardSocialsList>
      </CardSocials>
    </Card>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};
