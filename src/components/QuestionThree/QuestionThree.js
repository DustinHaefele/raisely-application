import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './QuestionThree.css';

export default function QuestionOne() {
  return (
    <>
      <h2 id="question-3">
        Which two tasks am I excited by, which two do I want to learn and which
        two don’t I want to do.
      </h2>
      <section className="section">
        <div className="_33">
          <div className="listTitle">
            <h3>Tasks I'm excited by</h3>{' '}
            <FontAwesomeIcon icon="grin" className="listIcon happy" />
          </div>
          <ul className="taskList">
            <li>
              <h4>
                Creating a complex, multi-step signup form using Create React
                App, Stripe payments and our API
              </h4>
              <p>
                I love solving complex problems. I’m very familiar with Create
                React App and combining that with building new React components
                and integrating APIs sounds really exciting to me.
              </p>
            </li>
            <li>
              <h4>Brainstorming how to add a unique campaign requirement into
              Raisely, with only a day to complete it</h4>
              <p>I love that this task is on this list. Thinking through the problem before coding it is so important, especially on a tight deadline. That is why I was excited by this task </p>
            </li>
          </ul>
        </div>
        <div className="_33">
          <div className="listTitle">
            <h3>Tasks I want to learn</h3>
            <FontAwesomeIcon icon="graduation-cap" className="listIcon learn" />
          </div>
          <ul className="taskList">
            <li><h4>Integrating Raisely to Salesforce, via Zapier</h4>
              <p>I’ve read about how great Salesforce is in terms of CRM software, and Zapier is supposed to be a great way to connect apps and share data. That being said I haven’t ever used either of them hands-on so I would love to learn them! </p></li>
            <li>
            <h4>Building a suite of Google Cloud Functions in Node to send
              automatic e-cards to donors</h4>
              <p>I love Node but I haven’t ever used Google Cloud functions. So it would be really interesting to learn how to build a Suite of Cloud Functions to add to the skill set I already have in Node.</p>
            </li>
          </ul>
        </div>
        <div className="_33">
          <div className="listTitle">
            <h3>Tasks I dont want to do</h3>
            <FontAwesomeIcon icon="meh" className="listIcon sad" />
          </div>

          <ul className="taskList">
            <li>
            <h4>Running a SQL report to find which customers you should check-in
              with</h4>
              <p>I may be reading this task too specifically but the act of running a report doesn’t excite me. Using that report to evaluate customers to check in on, and checking in on the customers sounds great, but running the report itself doesn’t sound that fun. At the same time, not every task of a job has to be fun and I understand that too.</p>
              
            </li>
            <li>
            <h4> Project managing the set-up of a new large campaign on Raisely,
              keeping it on time and budget{' '}</h4>
            <p>Project managing in a task I am very comfortable with. Before I switched Careers to web development I managed projects ranging from $5000 to $1.2 million budgets. I consider myself very experienced in managing projects. That being said I would really like to get a much better understanding of Raisely, the code base, and the resources available before I would like to do this task. That is why I chose this task as one that I wouldn’t want to do.</p>
             
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
