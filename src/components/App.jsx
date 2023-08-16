import { Profile } from './Profile'
import { Statistics } from './Statistics'
import { FriendList } from './Friends'
import {TransactionHistory} from './TransactionHistory'
import user from '../data/user.json';
import data from '../data/data.json'
import friends from '../data/friends.json'
import transactions from '../data/transactions.json'


export const App = () => {
  return (
    <>
      <h1>HOMEWORK №1</h1>
      <Profile
        {...user}
      />;
 <Statistics title="Upload stats" stats={data} />;
      <Statistics stats={data} />;
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </>
  );
};
