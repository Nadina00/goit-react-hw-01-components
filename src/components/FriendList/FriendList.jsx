import PropTypes from 'prop-types';
import css from 'components/FriendList/FriendList.module.css'

export const FriendList = ({friends}) => {
 
return (<div><ul className={css.friendList}>
{friends.map(friend =>( 
    <li className={css.item} key={friend.id}>
    <span className={css.status}  style={{      
      backgroundColor: friend.isOnline ? "#4caf50" : "#f81010",
      
}}>{friend.isOnline}</span>
    
    <img className={css.avatar} src={friend.avatar} alt="User avatar" width="48" />
    <p className={css.name}>{friend.name}</p>
  </li>)
)}
</ul></div>
)}

FriendList.propTypes = {
  isOnline: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
} 