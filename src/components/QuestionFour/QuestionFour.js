import React from 'react';
import Chile from '../../img/chile.png';
import { ReactComponent as SlackLogo } from '../../img/slack.svg';
import './QuestionFour.css';

export default function QuestionOne() {
  return (
    <section id="question-4" className="section">
      <div className="_50">
        <div className="row">
          <h2 className="section-title">
            Tell us about a platform you believe has solved a complex problem
            really well, and why. Would you change anything in their approach?
          </h2>
        </div>
        <div className="row">
          <SlackLogo className="logoLarge" />
        </div>
      </div>
      <div className="_50">
        <p className="answer">
          Slack is a platform that solved a big problem for remote teams, and
          they have done it extremely well. I love channels feature, and how it
          makes communicating with sub-teams or on one individual topic so
          simple. It really allows you to get information faster and easier than
          ever before. <br />
          <br />
          Slack found a way to keep things simple while still packing so
          many features to make communicating with a remote team as easy as
          possible.<br />
          <br /> The one thing that I have always wanted to change about
          Slack is how to switch from one workplace to another in the UI. I have
          old schoolmates that we still catch up through slack more than
          anything else and I always hated that it was easier to open multiple
          workplaces in different tabs than switch between them in the slack tab
          that I already have open. Obviously a small issue, but I think finding
          small issues is how we continually improve a product.
        </p>
      </div>
    </section>
  );
}
