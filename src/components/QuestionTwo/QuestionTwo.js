import React from 'react';
import Chile from '../../img/chile.png'
import './QuestionTwo.css';

export default function QuestionOne() {
  return (
    <section id="question-2" className="section">
      
      <div className="_60">
        <p className="answer">
          For the last few weeks, my wife and I have been traveling around
          Chile. We decided that as I looked for new work we would take the
          opportunity to travel around South America to experience the life and
          culture here. If you’ve been following the news lately, you know that
          there is a massive move of the people to protest 30 years of injustice
          in Chile. It’s a really inspiring movement because there are so many
          issues at stake and it has unified such a large number of Chileans.
          <br />
          <br /> I had the opportunity to talk to some locals in Santiago and
          they told me about some of the issues that they are facing in their
          communities. They are facing educational inequality, poor access to
          healthcare, growing poverty rates, and so much more.
          <br />
          <br /> My eyes and throat felt the reminders as they burned from the
          residual tear gas of protests the night before, and though it stung a
          bit, I found it incredibly inspiring. It made me want to do something
          important with my development career. So when I saw this job opening
          at Raisely, I knew I had to apply.
          <br />
          <br /> I give a damn about the wellbeing of people and our planet, and
          I want to do something about it in the work I do every day. I know
          that working for Raisely would do that. So, that’s why I want to work
          for Raisely over anywhere else.
        </p>
      </div>
      <div className="_40">
        <div className="row">
          <h2 className="section-title">
            Why do you want to work here over somewhere else?
          </h2>
        </div>
        <div className="row">
          <img className='flag'  src={Chile} alt='chilean flag'/>
        </div>
      </div>
    </section>
  );
}
