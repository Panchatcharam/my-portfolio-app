import React from 'react';
import './App.css';
import Menu from './components/Menu';
import TimeLine from "./components/timeline/TimeLine";
import Cover from "./components/Cover";
import ContactForm from './components/contact/ContactForm'
import { BrowserRouter as Router, Route } from "react-router-dom"
import { withRouter } from "react-router"


const HeaderWithRouter = withRouter(Menu);

class App extends React.Component {
  render() {
    return (
        <div className="wrapper">
            <div>
                <Router>
                    <HeaderWithRouter />
                    <Route path="/" exact component={Cover} />
                    <Route path='/timeline' exact component={TimeLine} />
                    <Route path="/contact" exact component={ContactForm} />
                </Router>
            </div>
        </div>
    );
  }
}

export default App;

//<div><Menu/></div>
//<div><Cover/></div>
//<div><TimeLine/></div>
//<div><ContactForm/></div>