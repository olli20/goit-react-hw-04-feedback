import { useState } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from '../shared/components/Notification';

import voteOptions from '../data/vote-options.json';
import initialState from '../data/initial-state';

import styles from './app.module.scss';

const App = () => {
  const [votes, setVotes] = useState({...initialState});

  const handleVote = newVote => {
    setVotes((prevVotes => {
      const newValue = prevVotes[newVote] + 1;
      return {...prevVotes, [newVote]: newValue};
    }))
  };

  const { good, neutral, bad } = votes;
  const total = good + neutral + bad;

  const getPositivePercentage = () => {
    if (!total) {
      return 0;
    }
    return Math.round(good / total * 100);
  };

  return (
    <div className={styles.app}>
      <FeedbackOptions options={voteOptions} handleVote={handleVote} />
      {Boolean(total) && <Statistics {...votes} total={total} positivePercentage={getPositivePercentage()} />}
      {Boolean(!total) && <Notification message="There is no feedback" />}
    </div>
  );
}

export default App;