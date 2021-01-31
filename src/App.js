import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import promiseMW from 'redux-promise';
import './Components/FontAwesomeIcons/index';
import './App.css';
import FreelancerProfilePage from './Components/FreelancerProfilePage/FreelancerProfilePage';
import Home from './Components/HomePage/HomePage';
import JobPostPage from './Components/PostJob/JobPostPage/jobPostPage';
import Signin from "./Components/signin/components/signin";
import Signup from "./Components/signup/components/signup";


const createStoreWithMW = applyMiddleware(promiseMW)(createStore);


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/profile/freelancer/:id" component={FreelancerProfilePage} />
          <Route path="/job-post/job-title" component={JobPostPage} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />


        </Switch>
      </div>
    </Router>
  );
}

export default App;
