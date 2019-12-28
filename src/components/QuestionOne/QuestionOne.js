import React from 'react';
import './QuestionOne.css'
import { ReactComponent as NodeLogo } from '../../img/node.svg';
import { ReactComponent as CSSLogo } from '../../img/css3.svg';
import { ReactComponent as HTMLLogo } from '../../img/html.svg';
import { ReactComponent as ReactLogo } from '../../img/react.svg';
import { ReactComponent as PostgresLogo } from '../../img/postgresql.svg';
import { ReactComponent as JSLogo } from '../../img/js.svg';

export default function QuestionOne() {
  return (
    <section id="question-1" className="section">
      <div className="_40">
        <div className="row">
          <h2 className="section-title">
            Why would I be a good fit for the Campaign Developer role?
          </h2>
        </div>
        <div className="row">
          <HTMLLogo className="logo" />
          <CSSLogo className="logo" />
          <JSLogo className="logo" />
          <ReactLogo className="logo" />
          <NodeLogo className="logo" />
          <PostgresLogo className="logo" />
        </div>

      </div>
      <div className="_60">
        <p className="answer">
          I’m a Full-Stack Developer and I’m dedicated to making a difference in
          the world. Most of my experience is in HTML, CSS, and JavaScript
          including libraries such as React, and Node.js (I love React). I also
          have experience with PostgreSQL. I have built multiple single-page
          React apps from scratch. My favorite is called Stay Informed, you can
          check it out <a href="http://stayinformed.now.sh">here!</a>. It’s an
          app built for US citizens to see who their congressional
          representatives are and where they are getting their campaign money.
          The{' '}
          <a href="https://github.com/thinkful-ei-dragonfly/stay-informed-client">
            Frontend
          </a>{' '}
          is built with React and SCSS making API calls to the{' '}
          <a href="https://github.com/thinkful-ei-dragonfly/stay-informed-api">
            Backend
          </a>{' '}
          which is built with Node.js and leverages multiple different external
          APIs to get all of the public government information that we need.
          <br />
          <br />
          In my past career as a chemical engineer, it was my job to make sure a
          third of our operation ran efficiently. To do this I had to learn
          quickly and solve unique problems on a daily basis. I plan on bringing
          those problem-solving skills and the desire to take initiative to
          Raisely if you decide to hire me!
        </p>
      </div>
    </section>
  );
}
