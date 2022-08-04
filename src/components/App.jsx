import {Profile} from 'components/Profile/Profile'
import {Statistics} from 'components/Statistics/Statistics'
import {FriendList} from 'components/FriendList/FriendList'
import {TransactionHistory} from 'components/TransactionHistory/TransactionHistory'
import user from '../../src/user.json'
import data from 'components/Statistics/data.json'
import friends from 'components/FriendList/friends.json'
import transactions from 'components/TransactionHistory/transactions.json'

export const App = () => {
  return (
    <div>
      <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats} />

      
<Statistics title="Upload stats" stats={data}  
     key={data.id}
    label = {data.label}
    percentage = {data.percentage}/>

  <FriendList friends={friends}
  key={friends.id}
  avatar={friends.avatar} 
  name ={friends.name}
  isOnline={friends.isOnline}/>

<TransactionHistory items={transactions} 
key = {transactions.id}
type={transactions.type}
amount={transactions.amount}
currency={transactions.currency}/>
    </div>
  );
};
