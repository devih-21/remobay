import { faSearch , faEllipsisH, faCheckCircle,faHeart as fullHeart ,faStar, faMapMarkerAlt, faPen, faEye, faGlobe, faStopwatch, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import {faClock, faHeart , faThumbsUp} from '@fortawesome/free-regular-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import './HomePage.css'

class Home extends Component {
    constructor(){
        super();
        this.state={
            
            data:[
                {
                    title:"Website development for education course",
                    workType: "Hourly",
                    level:"Intermediate",
                    timeZone: "Est",
                    duaration:"Less than 1 month",
                    houres: "10-30 hrs/week",
                    posted:"17 minutes ago",
                    description :"Hello, I need help to build my educational website completed.  and make it work",
                    tags:['PHP','WordPress',"HTML","jQuery","PSD to HTML","jQuery Mobile","CSS3"],
                    proposals:"Less than 5",
                    paymentvervied:false,
                    stars:0,
                    spend:0,
                    country:"Canada"
                },
                {
                    title:"Website development for education course",
                    workType: "Hourly",
                    level:"Intermediate",
                    timeZone: "Est",
                    duaration:"Less than 1 month",
                    houres: "10-30 hrs/week",
                    posted:"17 minutes ago",
                    description :"Hello, I need help to build my educational website completed.  and make it work",
                    tags:['PHP','WordPress',"HTML","jQuery","PSD to HTML","jQuery Mobile","CSS3"],
                    proposals:"Less than 5",
                    paymentvervied:false,
                    stars:0,
                    country:"Canada"
                },
            ],
            searchHistory : ["html","css and simple js","javaScript"],
            categories : ["Web Development","Web & Mobile Design"],
            like : true,
            heart : "faHeart"
        }
    }

    handleLike = ()=>{
        if(this.state.like === false){
            return(<FontAwesomeIcon icon={fullHeart} />)
        }else{
            return(<FontAwesomeIcon icon={faHeart} />)
        }
    }

    componentDidMount=()=>{
        this.handleLike();
        // if(window.innerWidth < 760){
        //     this.setState({containerClass:"container-home"})
        // }else{
        //     this.setState({containerClass:"container"})
        // }
    }

    render=()=>{
        return(
            <div className="Home-container">
                <div className="container-home container ">
                    <div className="Home-row">
                        <div className="Home-leftSection ">
                        <p className="main-title">Find Work</p>
                        <div className="home-feed details-active">
                            <p><a href="">My Feed</a></p>
                        </div>
                        <div className="home-recommended">
                            <p><a href="">Recommended</a></p>
                        </div>
                        <div className="home-Search-history">
                            <p className="bold">Recent Searches</p>
                            {this.state.searchHistory.map((h)=>{
                                return(
                                <p className="home-Search-history-data"><a href="">{h}</a></p>)
                            })}
                        </div>
                        <div className="home-categories">
                            <p className="bold">My Categories</p>
                            {this.state.categories.map((h)=>{
                                return(
                                <p className="home-categories-data"><a href="">{h}</a></p>)
                            })}
                            <div className="home-category-edit">
                                <FontAwesomeIcon icon={faPen} />
                            </div>
                        </div>
                    </div>
                        <div className="Home-centerSection ">
                            <div className="home-proposals-sm">
                                <p className="bold">My Proposals</p>
                                <FontAwesomeIcon icon={faChevronRight} />
                            </div>
                            <div className="home-profile-sm">
                                <p className="bold">My Profile</p>
                                <FontAwesomeIcon icon={faChevronRight} />
                            </div>
                            <div className="feed-recomendation">
                                <div className="feed-recomendation-f feed-recomendation-active">
                                    <p >MY FEED</p>
                                </div>
                                <div className="feed-recomendation-r ">
                                    <p >RECOMMENDED</p>
                                </div>
                            </div>
                            <div className="Home-search">
                            <input type="text" placeholder="Search for jobs" name="search"/>  
                            <button className=""><FontAwesomeIcon icon={faSearch} /> </button>
                        </div>  
                            <p className="search-link"><a href="">Advanced Search</a></p>
                            <div className="Home-myfeed">
                            <p >My Feed</p>
                            <div class="dropdown">
                              <div className="ellipsish " id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                <FontAwesomeIcon icon={faEllipsisH}/>
                              </div>
                              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                              </ul>
                            </div>
                            
                        </div>
                            {this.state.data.map((m)=>{
                            return(
                                <div className="Home-posts">
                                    <div className="title-container">
                                        <p>{m.title}</p>
                                        <div className="title-icons-posts">
                                            <div class="dropdown">
                                                <div className="title-faThumbsDown" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <FontAwesomeIcon icon={faThumbsUp} />
                                                 </div>
                                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                  <li><a class="dropdown-item" href="#" >Just not interested</a></li>
                                                  <li><a class="dropdown-item" href="#">Vague Description</a></li>
                                                  <li><a class="dropdown-item" href="#">Unrealistic Expectations</a></li>
                                                  <li><a class="dropdown-item" href="#">Too Many Applications</a></li>
                                                  <li><a class="dropdown-item" href="#">Job posted too long ago</a></li>
                                                  <li><a class="dropdown-item" href="#">Doesn't Match Skills</a></li>
                                                  <li><a class="dropdown-item" href="#">I am overqualified</a></li>
                                                  <li><a class="dropdown-item" href="#">Budget too low</a></li>
                                                </ul>
                                            </div>  
                                            <div className="title-faHeart" onClick={()=>{this.state.like === false ? this.setState({like : true}) : this.setState({like : false}) }}>
                                                {this.handleLike()}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="Home-posts-status">
                                        <p ><span className="bold grey">{m.workType}</span> - {m.level} - {m.timeZone}. Time: {m.duaration}, {m.houres} - {m.posted}</p>
                                    </div>
                                    <div className="Home-posts-description">
                                        <p >{m.description}</p>
                                    </div>
                                    <div className="Home-posts-tags">
                                        {m.tags.map((t)=>{
                                            return(
                                                <div className="Home-posts-tag">
                                                    <p>{t}</p>
                                                </div>
                                            )
                                        })}
                                    </div>
                                    <div className="Home-posts-proposals">
                                        <p>Proposals: <span className="bold grey">{m.proposals}</span></p>
                                    </div>
                                    <div className="Home-posts-footer">
                                        <FontAwesomeIcon icon={faCheckCircle} className="faCheckCircle-footer mb-2"/>
                                        {m.paymentvervied === true ? <p className="payment mb-2">Payment verified</p> : <p className="payment mb-2">Payment unverified</p>}
                                        <div className="allstars mb-2">
                                            <FontAwesomeIcon icon={faStar} className="star-footer" />
                                            <FontAwesomeIcon icon={faStar} className="star-footer" />
                                            <FontAwesomeIcon icon={faStar} className="star-footer" />
                                            <FontAwesomeIcon icon={faStar} className="star-footer" />
                                            <FontAwesomeIcon icon={faStar} className="star-footer" />
                                        </div>
                                        <p className="mr-3 mb-2"><span className="bold">&#36;{m.spend}</span> spent</p>
                                        <FontAwesomeIcon icon={faMapMarkerAlt} className="location mb-2"/>
                                        <p className="payment mb-2">{m.country}</p>
                                    </div>
                                </div>
                            )
                            })}
                        </div>
                        <div className="Home-rightSection ">
                        <div className="home-profile">
                            <img src="https://via.placeholder.com/40" alt="" class="rounded-circle"/>
                            <p className="bold">My Profile</p>
                        </div>
                        <div className="home-view-profile">
                            <FontAwesomeIcon icon={faEye} />
                            <p><a href="">View Profile</a></p>
                        </div>
                        <p className="bold visibality">Visibility</p>
                        <div className="home-public side-flex">
                            <FontAwesomeIcon icon={faGlobe} className="public-globe" />
                            <p>Public</p>
                            <div className="home-category-edit">
                                <FontAwesomeIcon icon={faPen} />
                            </div>
                        </div>
                        <p className="bold visibality">Availability</p>
                        <div className="home-public side-flex">
                            <FontAwesomeIcon icon={faClock} className="public-globe" />
                            <p>More than 30 hrs/week</p>
                            <div className="home-category-edit avalability">
                                <FontAwesomeIcon icon={faPen} />
                            </div>
                        </div>
                        <div className="side-flex">
                            <div className="progress-home"></div>
                            <p className="progress-p">100%</p>
                        </div>
                        <p className="bold side-flex mt-4 mb-3">Proposals</p>
                        <p className="small-font-home side-flex mb-3"><a href="">1 active candidacy</a></p>
                        <p className="small-font-home side-flex mb-3"><a href="">16 submitted proposals</a></p>
                        <p className="small-font-home side-flex mb-3"><a href="">23 available connects</a></p>
                        <div className="side-flex timer-home mb-4">
                            <FontAwesomeIcon icon={faStopwatch} />
                            <p className="small-font-home"><a href="">Track time with the desktop app</a></p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;