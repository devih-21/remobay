import './Components/FontAwesomeIcons/index';
import './App.css';
import Header from './Components/Header/Header';
import FreelancerProfile  from './Components/FreelancerProfile/FreelancerProfile';
import Home from './Components/HomePage/HomePage';
import Header from './Components/Header/Header';

function App() {
  return (
    <div>
      <Header/>
        <Home/>
      <FreelancerProfile />
    </div>
  );
}

export default App;
