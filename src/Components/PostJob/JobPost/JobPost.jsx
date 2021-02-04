import "./JobPost.css";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { checkJobPostTitle } from '../../../Actions/jobPost';
import PostJobNavigation from "../PostJobNavigation/PostJobNavigation";
import JobTitle from "../JobTitle/JobTitle";
import JobDescription from "../JobDescription/JobDescription";
import JobDetails from "../JobDetails/JobDetails";
import JobExpertise from "../JobExpertise/JobExpertise";

const JobPost = (props) => {
  return (
    <div className="container-fluid jobPostContainer px-0 px-lg-3">
      <div className="row col-12 col-lg-10 mx-auto pt-5 px-0 px-lg-3 jobPostContainer">
        <PostJobNavigation />
        <div className="col-12 col-lg-9 px-0 px-lg-3">
          {/* <JobTitle {...props} /> */}
          <JobExpertise />
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({checkJobPostTitle}, dispatch);
}

const mapStateToProps = (state) => {
  return {isJobTitleValid: state.jobPostReducer.jobPostTitleValid}
}

export default connect(mapStateToProps, mapDispatchToProps) (JobPost);
