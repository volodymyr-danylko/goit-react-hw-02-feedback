import React, { Component } from 'react';
import { Notification } from './Notification/Notification';
import { Statistic } from './Statistic/Statistic';
import { Section } from './Section/Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleOnClick = stateName => {
    if (stateName) {
      this.setState(prevState => ({ [stateName]: prevState[stateName] + 1 }));
    }
  };

  countTotalFeedback = () => {
    return this.state.bad + this.state.neutral + this.state.good;
  };

  countPositiveFeedbackPercentage = () => {
    return ((this.state.good / this.countTotalFeedback()) * 100).toFixed(0);
  };

  render() {
    return (
      <div>
        <Section title="Feedback">
          <button onClick={() => this.handleOnClick('good')}>Good</button>
          <button onClick={() => this.handleOnClick('neutral')}>Neutral</button>
          <button onClick={() => this.handleOnClick('bad')}>Bad</button>
        </Section>
        <h2>Statistic</h2>

        <Section title="Feedback">
          {this.countTotalFeedback() > 0 ? (
            <Statistic
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}
