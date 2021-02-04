import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./JobExpertise.css";

const JobExpertise = () => {
  return (
    <div>
      <div className="bg-white mb-2 mb-lg-5">
        <div className="container py-3 p-lg-3 borderBottomPrimary">
          <div className="container col p-0 px-lg-3">
            <div className="h4 mb-0">Expertise</div>
            <div>Step 4 of 7</div>
          </div>
        </div>
        <div className="container py-3 py-lg-0 p-lg-3">
          <div className="container col p-0 px-lg-3">
            <div className="h6 mb-4">
              What skills and expertise are most important to you in Front-End Development?
            </div>
            <div className="mb-3 mb-lg-4">
              <div>
                <legend className="legend-title">
                  Front-End Development Deliverables<span>(optional)</span>
                </legend>
                <div>
                  <div className="skill-item">
                    <FontAwesomeIcon icon="plus" />
                    <span className="ml-1">Prototype</span>
                  </div>
                  <div className="skill-item">
                    <FontAwesomeIcon icon="plus" />
                    <span className="ml-1">Web Design</span>
                  </div>
                  <div className="skill-item">
                    <FontAwesomeIcon icon="plus" />
                    <span className="ml-1">Animation</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-3 mb-lg-4 pt-2">
              <div>
                <legend className="legend-title">
                  Front-End Development Languages<span>(optional)</span>
                </legend>
                <div>
                  <div className="skill-item">
                    <FontAwesomeIcon icon="plus" />
                    <span className="ml-1">CSS</span>
                  </div>
                  <div className="skill-item">
                    <FontAwesomeIcon icon="plus" />
                    <span className="ml-1">HTML</span>
                  </div>
                  <div className="skill-item">
                    <FontAwesomeIcon icon="plus" />
                    <span className="ml-1">JavaScript</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-3 mb-lg-4 pt-2">
              <div>
                <legend className="legend-title">
                  Front-End Development Skills<span>(optional)</span>
                </legend>
                <div>
                  <div className="skill-item">
                    <FontAwesomeIcon icon="plus" />
                    <span className="ml-1">React</span>
                  </div>
                  <div className="skill-item">
                    <FontAwesomeIcon icon="plus" />
                    <span className="ml-1">Angular JS</span>
                  </div>
                  <div className="skill-item">
                    <FontAwesomeIcon icon="plus" />
                    <span className="ml-1">Node.js</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-3 mb-lg-4 pt-2">
              <div>
                <legend className="legend-title">
                  Business Size Experience<span>(optional)</span>
                </legend>
                <div>
                  <div className="skill-item">
                    <FontAwesomeIcon icon="plus" />
                    <span className="ml-1">Very Small (1-9 employees)</span>
                  </div>
                  <div className="skill-item">
                    <FontAwesomeIcon icon="plus" />
                    <span className="ml-1">Small (10-99 employees)</span>
                  </div>
                  <div className="skill-item">
                    <FontAwesomeIcon icon="plus" />
                    <span className="ml-1">Mid (100-999 employees)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white mb-5">
        <div className="container p-lg-3 borderBottomPrimary">
          <div className="container col px-0 px-lg-3 py-3 py-lg-0">
            <div className="h6 pt-2">What level of experience should your freelancer have?</div>
            <div className="mb-4 mb-lg-4 row">
              <div className="col-4">
                <div className="col-12 col project-type-card p-3 p-lg-2 rounded">
                  <div className="text-right">
                    <input type="radio" id="onetime-project" value="onetime-project" name="project-type" />
                  </div>
                  <div className="text-center project-card-title">Entry Level</div>
                  <div className="d-none d-lg-block text-center project-card-text mb-3">Looking for someone relatively new to this field</div>
                </div>
              </div>
              <div className="col-4">
                <div className="col-12 col project-type-card p-3 p-lg-2 rounded">
                  <div className="text-right">
                    <input type="radio" id="ongoint-project" value="ongoint-project" name="project-type" />
                  </div>
                  <div className="text-center project-card-title">Intermediate</div>
                  <div className="d-none d-lg-block text-center project-card-text mb-3">Looking for substanial experience in this field</div>
                </div>
              </div>
              <div className="col-4">
                <div className="col-12 col project-type-card p-3 p-lg-2 rounded">
                  <div className="text-right">
                    <input type="radio" id="complex-project" value="complex-project" name="project-type" />
                  </div>
                  <div className="text-center project-card-title">Expert</div>
                  <div className="d-none d-lg-block text-center project-card-text mb-3">Looking for comprehensive and deep expertise in this field</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container p-0 p-lg-3">
          <div className="container col p-0 px-lg-3">
            <div>
              <button id="exitBtn" className="btn rounded mr-lg-4">Exit</button>
              <button  id="nextBtn" className="btn rounded">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobExpertise;