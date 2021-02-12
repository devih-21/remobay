import React from 'react';
import { bindActionCreators } from 'redux';
import {  connect } from 'react-redux';
import { Switch, Route, withRouter, Redirect} from 'react-router-dom';
import './Components/FontAwesomeIcons/index';
import './App.css';
import FreelancerProfilePage from './Components/FreelancerProfilePage/FreelancerProfilePage';
import Home from './Components/HomePage/HomePage';
import JobPostPage from './Components/PostJob/JobPostPage/jobPostPage';
import Signin from "./Components/signin/components/signin";
import Signup from "./Components/signup/components/signup";
import ErrorComponent from './Components/Error/Error';
import { checkLoggingStatus } from "./Actions/userData";
import  jobpage from "./Components/JobDetails/jobpage";
import { getOneJob } from "./Actions/jobPost";
import Apply from './Components/ApplyJob/ApplyJob';
import HomeHiring from './Components/hiring/homeHire/homeHiring';
import JobProposals from './Components/jobProposals/jobProposals';





class App extends React.Component {
  componentDidMount() {
    this.props.checkLoggingStatus(localStorage.getItem('token'));
    // this.props.getOneJob();
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/profile/freelancer/:id" component={FreelancerProfilePage} />
          <Route path="/job-post/job-title" component={JobPostPage} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          <Route path="/job/:id" component={jobpage} />
          <Route path="*" component={ErrorComponent} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({checkLoggingStatus, getOneJob}, dispatch);
}

export default withRouter(connect(null, mapDispatchToProps) (App));
