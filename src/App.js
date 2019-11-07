import ReactDOM from 'react-dom';
import React from 'react';
import './App.css';
import Menu from './components/Menu';
import TimeLine from "./components/timeline/TimeLine";
import Cover from "./components/Cover";

class App extends React.Component {
  render() {
    return (
        <div className="wrapper">
            <div>
                <div><Menu/></div>
                <div><Cover/></div>
                <div><TimeLine/></div>
            </div>
        </div>
    );
  }
}

export default App;
