import React from 'react';
import './App.css';

const App = () => {
  const name = 'Dmitry Vladimirov';
  const linkedinURL = 'https://www.linkedin.com/in/dv-dmitry-valdimirov/';
  const linkedinName = 'dv-dmitry-valdimirov';
  const email = 'netcore.click@gmail.com';

  return (
    <div className="App">
      <div className="bg" />
      <div className="container">
        <div className="row c-row">
          <div className="col align-self-center">
            <h1 className="display-1 text-bg">Hi there!</h1>
            <p className="h2 mt-3 text-bg">
              My name is
              <a href="!#" className="text-mark">{name}</a>
              {' '}
              and I'm
              {' '}
              <span className="text-h"><i>software engineer</i></span>.
              {' '}
              Instead of many words look into my CV
              {' '}
              <a href="!#" className="text-mark">here</a>.
            </p>
            <div className="row mt-3">
              <div className="col-sm-6">
                <div className="text-bg contact">
                  <label>Email</label>
                  <a href={`mailto:${email}`} className="h4 c-text">
                    {email}
                  </a>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="text-bg contact">
                  <label>LinkedIn</label>
                  <a href={linkedinURL} className="h4 c-text">
                    {linkedinName}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
