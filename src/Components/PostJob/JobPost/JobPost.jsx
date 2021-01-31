import "./JobPost.css";
import PostJobNavigation from "../PostJobNavigation/PostJobNavigation";
import JobTitle from "../JobTitle/JobTitle";

const JobPost = () => {
  return (
    <div className="container-fluid jobPostContainer px-0 px-lg-3">
      <div className="row col-12 col-lg-10 mx-auto pt-5 px-0 px-lg-3 jobPostContainer">
        <PostJobNavigation />
        <div className="col-12 col-lg-9 px-0 px-lg-3">
          <JobTitle />
        </div>
      </div>
    </div>
  )
}

export default JobPost;