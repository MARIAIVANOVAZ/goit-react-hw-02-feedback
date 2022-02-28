import React, { Component } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './Button/Button';
import Section from './Section/Section';
import Notification from './Notification/Notification';

export class App extends Component {
  
  onLeaveFeedback = option => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    // return Object.values(this.state).reduce(
    //   (previousValue, currentValue) => previousValue + currentValue,
    //   0
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((100 / this.countTotalFeedback()) * this.state.good);
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const percentage = this.countPositiveFeedbackPercentage();
    const options = Object.keys(this.state);
    return (
      <div>
        <Section title={'Statistics'}>
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onLeaveFeedback}
          ></FeedbackOptions>
        </Section>

        {total > 0 ? (
          <Section title={'Please leave your feedback'}>
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={percentage}
            ></Statistics>
          </Section>
        ) : (
          <Notification message={'There is no feedback'}></Notification>
        )}
      </div>
    );
  }
}
