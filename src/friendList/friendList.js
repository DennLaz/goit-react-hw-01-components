import PropTypes from 'prop-types';
import style from '../friendList/friendList.module.css';

export default function FriendList({ friends }) {
  return (
    <ul className={style.list}>
      {friends.map(el => (
        <li key={el.id} className={style.item}>
          <span
            className={style.status}
            style={{
              backgroundColor: el.isOnline ? '#00FF00' : '#FF0000',
            }}
          ></span>
          <img
            className={style.avatar}
            src={el.avatar}
            alt={`${el.name} avatar`}
            width="48"
          />
          <p className={style.name}>{el.name}</p>
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
