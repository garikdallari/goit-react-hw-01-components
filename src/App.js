import './App.css';
import FriendList from './components/FriendList/FriendList';
import Profile from './components/Profile/Profile';
import user from './user.json';
import friends from './friends.json';

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
    </div>
  );
}
export default App;
