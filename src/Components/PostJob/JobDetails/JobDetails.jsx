import "./JobDetails.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const JobDetails = () => {
  return (
    <div>
      <div className="bg-white mb-2 mb-lg-5">
        <div className="container py-3 p-lg-3 borderBottomPrimary">
          <div className="container col p-0 px-lg-3">
            <div className="h4 mb-0">Details</div>
            <div>Step 3 of 7</div>
          </div>
        </div>
        <div className="container py-3 py-lg-0 p-lg-3">
          <div className="container col p-0 px-lg-3">
            <div className="h6">What type of project do you have?</div>
            <div className="mb-4 mb-lg-5 row">
              <div className="col-4">
                <div className="col-12 col project-type-card p-3 rounded">
                  <div className="text-right">
                    <input type="radio" id="onetime-project" value="onetime-project" name="project-type" />
                  </div>
                  <div className="text-center pb-2">
                    <FontAwesomeIcon icon="user" />
                  </div>
                  <div className="text-center project-card-title">One-time project</div>
                  <div className="d-none d-lg-block text-center project-card-text mb-3">Find the right skills for a short-term need.</div>
                </div>
              </div>
              <div className="col-4">
                <div className="col-12 col project-type-card p-3 rounded">
                  <div className="text-right">
                    <input type="radio" id="ongoint-project" value="ongoint-project" name="project-type" />
                  </div>
                  <div className="text-center pb-2">
                    <FontAwesomeIcon icon="clipboard-list" />
                  </div>
                  <div className="text-center project-card-title">Ongoing project</div>
                  <div className="d-none d-lg-block text-center project-card-text mb-3">Find a skilled resource for an extended engagement.</div>
                </div>
              </div>
              <div className="col-4">
                <div className="col-12 col project-type-card p-3 rounded">
                  <div className="text-right">
                    <input type="radio" id="complex-project" value="complex-project" name="project-type" />
                  </div>
                  <div className="text-center pb-2">
                    <FontAwesomeIcon icon="compress" />
                  </div>
                  <div className="text-center project-card-title">Complex project</div>
                  <div className="d-none d-lg-block text-center project-card-text mb-3">Find specialized experts and agencies for large projects.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white mb-5">
        <div className="container p-lg-3 borderBottomPrimary">
          <div className="container col px-0 px-lg-3 py-3 py-lg-0">
            <div id="screening-questions" className="h6">Screening Questions <span>(optional)</span></div>
            <div className="mt-4">Add screening questions and/or require a cover letter</div>
            <div id="add-screening-question" className="my-4">
              <FontAwesomeIcon icon="plus" />
              <span className="ml-3">Add a question</span>
            </div>
            <div className="mb-5">
              <input className="col-11 col-lg-8 py-2 rounded upwork-input" />
              <div className="d-inline ml-2 close-question">
                <FontAwesomeIcon icon="times" />
              </div>
            </div>
          </div>
        </div>
        <div className="container p-0 p-lg-3">
          <div className="container col p-0 px-lg-3">
            <div>
              <button id="exitBtn" className="btn rounded mr-lg-4">back</button>
              <button  id="nextBtn" className="btn rounded">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobDetails;