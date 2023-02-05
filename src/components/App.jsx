import { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';
import voteOptions from '../data/vote-options.json';

import styles from './app.module.scss';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleVote = (voteType) => {
    this.setState(prevState => {
      return {
        [voteType]: prevState[voteType] + 1
      };
    });
  };
  
  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return (good + neutral + bad);
  };

  countPositiveFeedbackPercentage() {
    const total = this.countTotalFeedback();
    if (!total) {
      return 0;
    }
    const { good } = this.state;
    return Math.round(good / total * 100);
  };
  
  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <div className={styles.app}>
        <FeedbackOptions options={voteOptions} handleVote={this.handleVote} />
        
        {total ?
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
          :
          <Notification message="There is no feedback" />
        }
      </div>
    );
  };
};

export default App;