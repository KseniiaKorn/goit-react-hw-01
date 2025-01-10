import styles from './Profile.module.css'
import PropTypes from 'prop-types';

const Profile = ({ name, tag, location, image, stats }) => {
    return (
        <div className={styles.container}>
            <div className={styles.profile}>
                <img className={styles.userImage}
                    src={image}
                    alt="User avatar"
                />
                <p className={styles.userName}>{name}</p>
                <p className={styles.userTag}>@{tag}</p>
                <p className={styles.userLocation}>{location}</p>

            <ul className={styles.activityList}>
                <li className={styles.activityItem}>
                    <span>Followers</span>
                    <span className={styles.actText}>{stats.followers}</span>
                </li>
                <li className={styles.activityItem}>
                    <span>Views</span>
                    <span className={styles.actText}>{stats.views}</span>
                </li>
                <li className={styles.activityItem}>
                    <span>Likes</span>
                    <span className={styles.actText}>{stats.likes}</span>
                </li>
                </ul>
                </div>
        </div>

    );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;