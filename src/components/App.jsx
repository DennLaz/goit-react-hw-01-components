import Profile from '../profile/profile';
import user from '../profile/user.json';

import Statistics from '../statistics/statistics';
import data from '../statistics/data.json';

import FriendList from '../friendList/friendList'
import friends from '../friendList/friends.json'

import TransactionHistory from '../transactions/transactions'
import transactions from '../transactions/transactions.json'

export const App = () => {
  return (
    <div className='container'>

     <Profile
    avatar={user.avatar}
    username={user.username}
    tag={user.tag}
    location={user.location}
    followers={user.stats.followers}
    views={user.stats.views}
    likes={user.stats.likes}
      />
      
    <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      
      <FriendList friends={friends} />
      
      <TransactionHistory items={transactions} />
    </div>
  );
};


