import { useHistory } from "react-router-dom";
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { bars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  let history = useHistory();

  let navigateToHome = () => {
    history.push("/");
  }

  let navigateToMyProfile = () => {
    history.push(`/profile/freelancer/${localStorage.getItem('id')}`)
  }

  let handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    history.push("/signin");
  }

  let onClickMyJobs = () => {
    history.push("/freelancer/myjobs");
  }

  let clicked = false;
  let toggleNavBar = () => {
    let navBar = document.getElementById("mobile-nav-bar");
    if (clicked === false) {
      navBar.style.display = "block";
      clicked = true;
    } else {
      navBar.style.display = "none";
      clicked = false;
    }
  }
  return (
    <div id="header-container" className="container col-12">
      <div className="row justify-content-center py-3 d-none d-lg-flex">
        <div className="col-12 col-xl-9 row">
          <div className="col-5 d-flex align-items-center">
            <div onClick={navigateToHome} role="button">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 102.4 30" width="106" height="30" role="img" aria-hidden="true"><path fill="#ffffff" d="M65.4 6.9c-4.5 0-8.1 3.6-8.1 8.1s3.6 8.1 8.1 8.1 8.1-3.6 8.1-8.1-3.6-8.1-8.1-8.1zm0 12.9c-2.6 0-4.8-2.1-4.8-4.8s2.1-4.8 4.8-4.8c2.6 0 4.8 2.1 4.8 4.7 0 2.7-2.1 4.9-4.8 4.9zM83.4 10.8c-2.3 0-4.2 1.9-4.2 4.2v7.7h-3.5V7.4h3.5v2.4c1-1.5 2.7-2.4 4.5-2.4h1.1v3.4h-1.4zM48.2 7.4L50.8 18l2.9-10.6h3.4l-4.4 15.3h-3.5L46.5 12l-2.7 10.7h-3.5L35.9 7.4h3.4L42.2 18l2.7-10.6zM95 14.4c2.6-1.4 4.1-4.1 4.1-7.1h-3.4c0 2.6-2.1 4.6-4.6 4.6h-.5V0h-3.5v22.7h3.5v-7.2h.4c.4 0 .8.2 1 .5l4.9 6.7h4.2L95 14.4z"></path> <path fill="#6fda44" d="M27.6 6.9c-3.8 0-6.7 2.5-7.9 6.5-1.8-2.7-3.1-5.7-4-8.8h-4.1v10.6c0 2.1-1.7 3.8-3.8 3.8S4 17.3 4 15.2V4.7H0v10.6c0 4.3 3.5 7.9 7.9 7.9s7.9-3.5 7.9-7.9v-1.8c.8 1.7 1.8 3.3 2.9 4.8L16.2 30h4.2l1.8-8.5c1.6 1.1 3.5 1.7 5.5 1.7 4.5 0 8.1-3.6 8.1-8.1-.1-4.5-3.7-8.2-8.2-8.2zm0 12.2c-1.7-.1-3.3-.7-4.6-1.8l.3-1.6v-.1c.3-1.7 1.3-4.6 4.2-4.6 2.2-.1 4 1.7 4.1 3.9.1 2.2-1.7 4-3.9 4.1l-.1.1z"></path></svg>
            </div>
            <input id="searchBar" placeholder="Search" type="text" className="rounded-pill h-100 w-75 ml-2"></input>
          </div>
          <div className="col-7">
            <ul id="navbar" className="d-flex list-unstyled text-white align-items-center m-0">
              <li id="find-work">
                Find Work
                <ul id="sub-menu" className="list-unstyled bg-white text-dark p-2 shadow col-6 rounded d-none">
                  <li>Find Work</li>
                  <li>Saved Jobs</li>
                  <li>Proposals</li>
                </ul>
              </li>
              <li onClick={onClickMyJobs}>
                My Jobs
              </li>
              <li>Reports</li>
              <li>Messages</li>
              <li id="question-mark-icon" className="ml-4 mr-4 navbar-icon">
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 14" width="12" height="14" role="img"><path fill="white" d="M4.98 11.96h2.04V14H4.98zm5.17-9.69a3.5 3.5 0 0 0-.9-1.2A4.29 4.29 0 0 0 7.85.3 5.57 5.57 0 0 0 6.02 0C5.39 0 4.8.1 4.28.29a3.93 3.93 0 0 0-2.32 2.08A4.52 4.52 0 0 0 1.55 4l-.01.07h1.93v-.06C3.75 2.32 4.59 1.5 6.04 1.5a2.43 2.43 0 0 1 2.3 1.43 2.34 2.34 0 0 1 .1 1.65 1.72 1.72 0 0 1-.31.54c-.14.17-.3.34-.5.52a15.73 15.73 0 0 0-.71.65c-.4.39-.7.7-.93.97a3.43 3.43 0 0 0-.85 1.88c-.06.37-.09.4-.09.99v.07h1.78v-.07c0-.47.01-.4.04-.67.03-.29.1-.53.2-.75.1-.21.27-.43.48-.64.21-.21.51-.48.91-.82.39-.34.7-.65.97-.93a4.52 4.52 0 0 0 .62-.83 3.16 3.16 0 0 0 .41-1.72 3.54 3.54 0 0 0-.31-1.5z"></path></svg> */}
                <FontAwesomeIcon icon="question" />
              </li>
              <li id="bell-icon" className="mr-4 navbar-icon">
                <FontAwesomeIcon icon={["far", "bell"]} />
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="14" height="14" role="img"><path fill="white" d="M12.91 11.05h-.51v-5.7a5.71 5.71 0 0 0-1.65-3.97A5.42 5.42 0 0 0 9.29.4c-.07-.02-.12-.06-.2-.09L8.9.25a4.54 4.54 0 0 0-.84-.2A10.07 10.07 0 0 0 6.96 0c-.42 0-.8.03-1.04.06a4.53 4.53 0 0 0-.88.2l-.02.02c-.17.05-.33.14-.5.22L4.1.73l-.2.14a5.5 5.5 0 0 0-.5.4 6.03 6.03 0 0 0-.39.38l-.18.2A5.56 5.56 0 0 0 1.6 5.34v5.71h-.51a.59.59 0 0 0-.58.59v.61c0 .32.26.59.58.59H5.3a1.82 1.82 0 0 0 3.4 0h4.21c.32 0 .58-.27.58-.59v-.61a.58.58 0 0 0-.58-.59zm-2.17 0H3.25v-5.7c0-1.86 1.25-3.43 2.9-3.65a8.73 8.73 0 0 1 1.7 0c1.82.2 2.9 2.02 2.9 3.64v5.72z"></path></svg> */}
              </li>
              <li id="messaging-icon" className="mr-4 navbar-icon">
                <FontAwesomeIcon icon="paper-plane" />
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="-1 0 14 14" role="img"><path fill="white" d="M12.661,6.79L-0.067,0.072C-0.071,0.07-0.075,0.069-0.079,0.067c-0.013-0.006-0.026-0.008-0.039-0.014 c-0.052-0.022-0.105-0.037-0.16-0.044C-0.299,0.006-0.319,0.005-0.34,0.004c-0.051-0.001-0.101,0.003-0.15,0.014 C-0.51,0.021-0.529,0.022-0.547,0.028C-0.61,0.047-0.67,0.072-0.725,0.111C-0.728,0.113-0.73,0.115-0.733,0.118 C-0.735,0.12-0.74,0.12-0.743,0.122C-0.755,0.13-0.76,0.144-0.771,0.152C-0.813,0.187-0.849,0.226-0.88,0.27 c-0.013,0.019-0.025,0.038-0.036,0.057c-0.024,0.044-0.043,0.091-0.056,0.14C-0.978,0.485-0.984,0.501-0.988,0.52 C-1,0.583-1.003,0.646-0.995,0.711l0.002,0.019c0,0.001,0,0.003,0,0.003l1.548,12.704c0.024,0.208,0.152,0.391,0.338,0.487 c0.093,0.048,0.192,0.071,0.293,0.071c0.104,0,0.208-0.025,0.302-0.075l4.022-2.163l2.069,2.054 c0.123,0.121,0.284,0.185,0.449,0.185c0.082,0,0.165-0.016,0.244-0.049c0.236-0.099,0.392-0.331,0.392-0.587v-3.298l4.001-2.149 C12.873,7.802,13.001,7.585,13,7.351C13,7.115,12.869,6.9,12.661,6.79z M0.644,3.643l4.102,7.083l-3.04,1.633L0.644,3.643z M7.392,11.831l-1.258-1.248L3.038,5.237l4.354,4.694V11.831z M8.16,8.889L2.643,2.941l8.368,4.417L8.16,8.889z"></path></svg> */}
              </li>
              <li>
                <div className="" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <img src="https://via.placeholder.com/40" alt="" className="rounded-circle dropdown-toggle" />
                </div>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <div onClick={navigateToMyProfile} className="dropdown-item row mx-0 px-3 dropdown-menu-items" tabIndex="1">
                    <div className="d-inline mr-2">
                      <img src="https://via.placeholder.com/25" alt="" className="rounded-circle" />
                    </div>
                    <div className="d-inline">User Name</div>
                  </div>
                  <div className="dropdown-item row mx-0 dropdown-menu-items" tabIndex="2">
                    <div className="d-inline mr-2">
                      <FontAwesomeIcon icon="cog" />
                    </div>
                    <div className="d-inline">Settings</div>
                  </div>
                  <div onClick={handleLogout} className="dropdown-item row mx-0 dropdown-menu-items" tabIndex="3">
                    <div className="d-inline mr-2">
                      <FontAwesomeIcon icon="sign-out-alt" />
                    </div>
                    <div className="d-inline">Logout</div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="row d-lg-none">
        <div id="mobile-navbar" className="container mx-2 col-12">
          <div className="row col-12 m-2 d-flex">
            <div className="col-2 p-0" onClick={toggleNavBar}>
              <FontAwesomeIcon icon="bars" size="2x" color="white" />
            </div>
            <div className="col-8 text-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 102.4 30" width="106" height="30" role="img" aria-hidden="true"><path fill="#ffffff" d="M65.4 6.9c-4.5 0-8.1 3.6-8.1 8.1s3.6 8.1 8.1 8.1 8.1-3.6 8.1-8.1-3.6-8.1-8.1-8.1zm0 12.9c-2.6 0-4.8-2.1-4.8-4.8s2.1-4.8 4.8-4.8c2.6 0 4.8 2.1 4.8 4.7 0 2.7-2.1 4.9-4.8 4.9zM83.4 10.8c-2.3 0-4.2 1.9-4.2 4.2v7.7h-3.5V7.4h3.5v2.4c1-1.5 2.7-2.4 4.5-2.4h1.1v3.4h-1.4zM48.2 7.4L50.8 18l2.9-10.6h3.4l-4.4 15.3h-3.5L46.5 12l-2.7 10.7h-3.5L35.9 7.4h3.4L42.2 18l2.7-10.6zM95 14.4c2.6-1.4 4.1-4.1 4.1-7.1h-3.4c0 2.6-2.1 4.6-4.6 4.6h-.5V0h-3.5v22.7h3.5v-7.2h.4c.4 0 .8.2 1 .5l4.9 6.7h4.2L95 14.4z"></path> <path fill="#6fda44" d="M27.6 6.9c-3.8 0-6.7 2.5-7.9 6.5-1.8-2.7-3.1-5.7-4-8.8h-4.1v10.6c0 2.1-1.7 3.8-3.8 3.8S4 17.3 4 15.2V4.7H0v10.6c0 4.3 3.5 7.9 7.9 7.9s7.9-3.5 7.9-7.9v-1.8c.8 1.7 1.8 3.3 2.9 4.8L16.2 30h4.2l1.8-8.5c1.6 1.1 3.5 1.7 5.5 1.7 4.5 0 8.1-3.6 8.1-8.1-.1-4.5-3.7-8.2-8.2-8.2zm0 12.2c-1.7-.1-3.3-.7-4.6-1.8l.3-1.6v-.1c.3-1.7 1.3-4.6 4.2-4.6 2.2-.1 4 1.7 4.1 3.9.1 2.2-1.7 4-3.9 4.1l-.1.1z"></path></svg>
            </div>
          </div>
          <div id="mobile-nav-bar">
            <div className="row col-12">
              <input id="searchBar" placeholder="Search" type="text" className="rounded-pill h-100 col-12 m-2 py-2"></input>
            </div>
            <div className="row col-12">
              <div className="m-2">
                <img src="https://via.placeholder.com/40" alt="" className="rounded-circle" />
                <span className="ml-3 text-white">User Name</span>
              </div>
            </div>
            <div className="row col-12 m-2 text-white">
              <p>Find Work</p>
            </div>
            <div className="row col-12 m-2 text-white">
              <p>My Jobs</p>
            </div>
            <div className="row col-12 m-2 text-white">
              <p>Reports</p>
            </div>
            <div className="row col-12 m-2 text-white">
              <p>Messages</p>
            </div>
            <div className="row col-12 m-2 mb-4 text-white">
              <div className="d-flex justify-content-between align-items-center col-12 p-0">
                <p className=" col-4 m-0 p-0">Help</p>
                <div className="col-1 text-right">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 14" width="12" height="14" role="img"><path fill="white" d="M4.98 11.96h2.04V14H4.98zm5.17-9.69a3.5 3.5 0 0 0-.9-1.2A4.29 4.29 0 0 0 7.85.3 5.57 5.57 0 0 0 6.02 0C5.39 0 4.8.1 4.28.29a3.93 3.93 0 0 0-2.32 2.08A4.52 4.52 0 0 0 1.55 4l-.01.07h1.93v-.06C3.75 2.32 4.59 1.5 6.04 1.5a2.43 2.43 0 0 1 2.3 1.43 2.34 2.34 0 0 1 .1 1.65 1.72 1.72 0 0 1-.31.54c-.14.17-.3.34-.5.52a15.73 15.73 0 0 0-.71.65c-.4.39-.7.7-.93.97a3.43 3.43 0 0 0-.85 1.88c-.06.37-.09.4-.09.99v.07h1.78v-.07c0-.47.01-.4.04-.67.03-.29.1-.53.2-.75.1-.21.27-.43.48-.64.21-.21.51-.48.91-.82.39-.34.7-.65.97-.93a4.52 4.52 0 0 0 .62-.83 3.16 3.16 0 0 0 .41-1.72 3.54 3.54 0 0 0-.31-1.5z"></path></svg>
                </div>
              </div>
            </div>
            <div className="row col-12 m-2 mb-4 text-white">
              <div className="d-flex justify-content-between align-items-center col-12 p-0">
                <p className=" col-4 m-0 p-0">Notifications</p>
                <div className="col-1 text-right">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="14" height="14" role="img"><path fill="white" d="M12.91 11.05h-.51v-5.7a5.71 5.71 0 0 0-1.65-3.97A5.42 5.42 0 0 0 9.29.4c-.07-.02-.12-.06-.2-.09L8.9.25a4.54 4.54 0 0 0-.84-.2A10.07 10.07 0 0 0 6.96 0c-.42 0-.8.03-1.04.06a4.53 4.53 0 0 0-.88.2l-.02.02c-.17.05-.33.14-.5.22L4.1.73l-.2.14a5.5 5.5 0 0 0-.5.4 6.03 6.03 0 0 0-.39.38l-.18.2A5.56 5.56 0 0 0 1.6 5.34v5.71h-.51a.59.59 0 0 0-.58.59v.61c0 .32.26.59.58.59H5.3a1.82 1.82 0 0 0 3.4 0h4.21c.32 0 .58-.27.58-.59v-.61a.58.58 0 0 0-.58-.59zm-2.17 0H3.25v-5.7c0-1.86 1.25-3.43 2.9-3.65a8.73 8.73 0 0 1 1.7 0c1.82.2 2.9 2.02 2.9 3.64v5.72z"></path></svg>
                </div>
              </div>
            </div>
            <div className="row col-12 m-2 mb-4 text-white">
              <div className="d-flex justify-content-between align-items-center col-12 p-0">
                <p className=" col-4 m-0 p-0">Direct Contracts</p>
                <div className="col-1 text-right">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="-1 0 14 14" role="img"><path fill="white" d="M12.661,6.79L-0.067,0.072C-0.071,0.07-0.075,0.069-0.079,0.067c-0.013-0.006-0.026-0.008-0.039-0.014 c-0.052-0.022-0.105-0.037-0.16-0.044C-0.299,0.006-0.319,0.005-0.34,0.004c-0.051-0.001-0.101,0.003-0.15,0.014 C-0.51,0.021-0.529,0.022-0.547,0.028C-0.61,0.047-0.67,0.072-0.725,0.111C-0.728,0.113-0.73,0.115-0.733,0.118 C-0.735,0.12-0.74,0.12-0.743,0.122C-0.755,0.13-0.76,0.144-0.771,0.152C-0.813,0.187-0.849,0.226-0.88,0.27 c-0.013,0.019-0.025,0.038-0.036,0.057c-0.024,0.044-0.043,0.091-0.056,0.14C-0.978,0.485-0.984,0.501-0.988,0.52 C-1,0.583-1.003,0.646-0.995,0.711l0.002,0.019c0,0.001,0,0.003,0,0.003l1.548,12.704c0.024,0.208,0.152,0.391,0.338,0.487 c0.093,0.048,0.192,0.071,0.293,0.071c0.104,0,0.208-0.025,0.302-0.075l4.022-2.163l2.069,2.054 c0.123,0.121,0.284,0.185,0.449,0.185c0.082,0,0.165-0.016,0.244-0.049c0.236-0.099,0.392-0.331,0.392-0.587v-3.298l4.001-2.149 C12.873,7.802,13.001,7.585,13,7.351C13,7.115,12.869,6.9,12.661,6.79z M0.644,3.643l4.102,7.083l-3.04,1.633L0.644,3.643z M7.392,11.831l-1.258-1.248L3.038,5.237l4.354,4.694V11.831z M8.16,8.889L2.643,2.941l8.368,4.417L8.16,8.889z"></path></svg>
                </div>
              </div>
            </div>
            <div className="row col-12 m-2 mb-4 text-white align-items-center">
              <FontAwesomeIcon icon="cog" size="sm" color="white" />
              <span className="ml-3">Settings</span>
            </div>
            <div className="row col-12 m-2 text-white align-items-center">
              <FontAwesomeIcon icon="sign-out-alt" size="sm" color="white" />
              <span className="ml-3">Log out</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;