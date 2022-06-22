import PropTypes from 'prop-types';

export default function FriendList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map(el => (
        <li key={el.id} className="item">
          <span
            className="status"
            style={{
              backgroundColor: el.isOnline ? '#00FF00' : '#FF0000',
            }}
          ></span>
          <img
            className="avatar"
            src={el.avatar}
            alt={`${el.name} avatar`}
            width="48"
          />
          <p className="name">{el.name}</p>
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    })
  ),
};
