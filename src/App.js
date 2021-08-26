import './App.css';
import FriendList from './components/FriendList/FriendList';
import friends from './friends.json';
console.log(friends);

function App() {
  return <FriendList friends={friends} />;
}
export default App;
