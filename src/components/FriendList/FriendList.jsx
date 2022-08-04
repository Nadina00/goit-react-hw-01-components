import PropTypes from 'prop-types';
import styles from './FriendList.module.css'

export const FriendList = ({friends}) => {
 
return (<div><ul className={styles.friendList}>
{friends.map(friend =>( 
    <li className={styles.item} key={friend.id}>
    <span className={styles.status}  style={{      
      backgroundColor: friend.isOnline ? "#4caf50" : "#f81010",
      
}}>{friend.isOnline}</span>
    
    <img className={styles.avatar} src={friend.avatar} alt="User avatar" width="48" />
    <p className={styles.name}>{friend.name}</p>
  </li>)
)}
</ul></div>
)}

FriendList.propTypes = {
  isOnline: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
} 