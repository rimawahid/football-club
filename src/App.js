
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/Header/Header';
import TeamDetail from './components/TeamDetail/TeamDetail';
import NotMatch from './components/NotMatch/NotMatch';
import About from './components/About/About';
import Contact from './components/Contact/Contact';



function App() {
  return (
    <div className="App">
      <Router>
      
        <Switch>
        <Route path="/home">
          <Header></Header>
        </Route>
        <Route exact path="/">
          <Header></Header>
        </Route>
        <Route path="/about">
           <About/>
          </Route>
          <Route path="/contact">
           <Contact/>
          </Route>
        <Route path = "/team/:idTeam">
          <TeamDetail></TeamDetail>
        </Route>
        <Route path ="*">
          <NotMatch/>
        </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
