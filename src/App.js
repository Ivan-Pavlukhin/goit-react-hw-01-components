import React from 'react';
import 'modern-normalize/modern-normalize.css';
import './styles/App.css';
import Profile from './components/Profile';
import Statistic from './components/Statistics';
import FriendsList from './components/FriendsList';
import user from './user.json';
import statistical from './statistical-data.json';
import friends from './friends.json';

const App = () => (
  <>
    <Profile user={user} />
    <Statistic statistical={statistical} />
    <FriendsList friends={friends} />
  </>
);
export default App;
