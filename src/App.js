import { HashRouter as Router, Route, Switch } from "react-router-dom";

import CountBy from './components/CountBy';
import EvenClicks from './components/EvenClicks';
import Multiplier from './components/Multiplier';
import HideMe from './components/HideMe';
import MinimumLength from './components/MinimumLength';

function App() {
  return (
    <Router>
      <div className="container">
        <header className="p-3 mb-2 bg-primary text-white">
          <h1>My perfectly unperfect quiz answers</h1>
        </header>
        <Switch>
          <Route exact path="/">
            <h1 className="p-3 mb-2 bg-primary text-white">Home Page :)</h1>
          </Route>
          <Route exact path="/even-clicks">
            <EvenClicks />
          </Route>
          <Route exact path="/hide-me">
            <HideMe>Blah blah blah</HideMe>
          </Route>
          <Route path="/count-by/:step" render={({ match }) => (
            <CountBy step={ +match.params.step } />
          )}>
          </Route>
          <Route path="/minimum/:length" render={({ match }) => (
            <MinimumLength length={ +match.params.length } />
          )}>
          </Route>
          <Route path="/multiplier/:x/:y" render={({ match }) => (
            <Multiplier x={ +match.params.x } y={ +match.params.y } />
          )}>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
