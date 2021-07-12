import React from 'react';

import user from './data/user.json';
import ProfileList from './components/profile/ProfileList';

import statisticsData from './data/statisticData.json';
import Statistics from './components/statistic/Statistics';

import friends from './data/friends.json';
import FriendList from './components/friends/FriendList';

import transactions from './data/transactions.json';
import TransactionHistory from './components/transactionHistory/TransitionHistory';
import './components/global.scss';
const App = () => {
  return (
    <div className="wrapper">
      <h2 className="lessonHeader">task1</h2>
      <ProfileList profile={user} />
      <h2 className="lessonHeader">task2</h2>
      <Statistics statistic={statisticsData} title="Upload stats" />
      <h2 className="lessonHeader">task3</h2>
      <FriendList friends={friends} />
      <h2 className="lessonHeader">task4</h2>
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
