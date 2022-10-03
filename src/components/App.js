// import {Feedback} from 'components/Feedback/Feedback'

import React, { Component } from 'react';
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';

import { Container } from 'components/App.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleLeaveFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback = (good, neutral, bad) => {
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = (good, total) => {
    return Math.round((100 * good) / total);
  };

  render() {
    const {
      handleLeaveFeedback,
      countTotalFeedback,
      countPositiveFeedbackPercentage,
    } = this;

    const { good, neutral, bad } = this.state;
    const keysArray = Object.keys(this.state);
    const valuesArray = Object.values(this.state);

    const total = countTotalFeedback(good, neutral, bad);

    return (
      <Container>
        <Section title="Please leave Feedback">
          <FeedbackOptions
            options={keysArray}
            onLeaveFeedback={handleLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {valuesArray.some(value => value > 0) ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={countPositiveFeedbackPercentage(good, total)}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </Container>
    );
  }
}
