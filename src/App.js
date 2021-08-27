import './App.css';
import FriendList from './components/FriendList/FriendList';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import statsData from './statistical-data.json';
import user from './user.json';
import friends from './friends.json';
import transactions from './transactions.json';
function App() {
  return (
    <div>
      <FriendList friends={friends} />
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statsData} />
      <TransactionHistory items={transactions} />
    </div>
  );
}
export default App;
