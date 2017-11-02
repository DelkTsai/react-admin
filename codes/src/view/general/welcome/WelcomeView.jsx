import React from 'react';
import logo from './logo.svg';
import './WelcomeView.less';

class WelcomeView extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to REACT ADMIN</h1>
        </header>
        <p className="App-intro">
          REACT ADMIN is developing。。。
        </p>
      </div>
    );
  }
}
export default WelcomeView;
