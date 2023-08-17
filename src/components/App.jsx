import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import user from './data/user.json';
import data from './data/data.json';
import { FriendList } from "./FriendList/FriendList";
import friends from './data/friends';
import { TransactionHistory } from "./TransactionHistory/TransactionHistory"; 
import transactions from "./data/transactions.json"


export const App = () => {
  return (
    <div>
      <Profile {...user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
