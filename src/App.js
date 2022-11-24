import logo from './logo.svg';
import './App.css';
import BestGame from './components/BestGame';
import Intro from './components/Intro';
import NavigationBar from './components/NavigationBar';
import TrendingGame from './components/TrendingGame';

import "./style/landingPage.css"

function App() {
  return (
    <div>
      <div className='myBG'>
        <NavigationBar />
        <Intro />
      </div>

      <div className='trending'>
        <TrendingGame />
      </div>

      <div className='best'>
        <BestGame />
    </div>
    </div>
  );
}

export default App;
