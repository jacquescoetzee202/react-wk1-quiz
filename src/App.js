import CountBy from './components/CountBy';
import EvenClicks from './components/EvenClicks';
import Multiplier from './components/Multiplier';
import HideMe from './components/HideMe';

function App() {
  return (
    <div className="container">
      <header className="p-3 mb-2 bg-primary text-white">
        <h1>My perfectly unperfect quiz answers</h1>
      </header>
      <Multiplier x={ 5 } y={ 7 } />
      <EvenClicks />
      <CountBy step={ 5 } />
      <HideMe>Blah blah blah</HideMe>
    </div>
  );
}

export default App;
