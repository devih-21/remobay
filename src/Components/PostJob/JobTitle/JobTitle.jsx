import "./JobTitle.css";
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
// import { checkJobPostTitle } from '../../../Actions/jobPost';

const JobTitle = (props) => {

  let checkTitleLength = (e) => {
    props.checkJobPostTitle(e.target.value)
  }

  return (
    <div>
      <div className="bg-white mb-2 mb-lg-5">
        <div className="container py-3 p-lg-3 borderBottomPrimary">
          <div className="container col p-0 px-lg-3">
            <div className="h4 mb-0">Title</div>
            <div>Step 1 of 7</div>
          </div>
        </div>
        <div className="container py-3 py-lg-0 p-lg-3">
          <div className="container col p-0 px-lg-3">
            <div className="h6">Enter the name of your job post</div>
            <div className="mb-2">
              <input onChange={checkTitleLength} className="col-11 col-lg-10 py-2 jobTitleInput" />
            </div>
            <div>
              <div className="h6">Here are some good examples:</div>
              <ul className="pl-4" id="jobTitleExamples">
                <li>Developer needed for creating a responsive WordPress Theme</li>
                <li>CAD designer to create a 3D model of a residential building</li>
                <li>Need a design for a new company logo</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white mb-5">
        <div className="container p-lg-3 borderBottomPrimary">
          <div className="container col px-0 px-lg-3 py-3 py-lg-0">
            <div className="h6">Job Category</div>
            <div>Let's categorize your job, which helps us personalize your job details and match your job to relevant freelancers and agencies.</div>
            <div className="mt-2">
              <select className="p-2 col-12 col-lg-auto jobTitleInput">
                <option value="webDesign">Web Design</option>
                <option value="fullStackDevelopment">Full Stack Development</option>
                <option value="graphicDesign">Graphic Design</option>
                <option value="Translation">Translation</option>
              </select>
            </div>
          </div>
        </div>
        <div className="container p-0 p-lg-3">
          <div className="container col p-0 px-lg-3">
            <div>
              <button id="exitBtn" className="btn rounded mr-lg-4">Exit</button>
              {
                props.isJobTitleValid ?
                <button  id="nextBtn" className="btn rounded">Next</button> :
                <button disabled id="nextBtnDisabled" className="btn rounded">Next</button>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({checkJobPostTitle}, dispatch);
// }

// const mapStateToProps = (state) => {
//   return {isJobTitleValid: state.jobPostReducer.jobPostTitleValid}
// }

export default JobTitle;