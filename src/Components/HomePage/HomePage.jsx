import { faSearch , faEllipsisH, faCheckCircle, faStar, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import {faHeart , faThumbsUp} from '@fortawesome/free-regular-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
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
            ]
        }
    }

    render=()=>{
        return(
            <div className="Home-container">
                <div className="Home-row">
                    <div className="Home-leftSection">
                        <p className="main-title">Find Work</p>
                    </div>
                    <div className="Home-centerSection">
                        <div className="Home-search">
                            <input type="text" placeholder="Search for jobs" name="search"/>  
                            <button className=""><FontAwesomeIcon icon={faSearch} /> </button>
                        </div>  
                        <p className="search-link"><a href="">Advanced Search</a></p>
                        <div className="Home-myfeed">
                            <p >My Feed</p>
                            <div className="ellipsish">
                                <FontAwesomeIcon icon={faEllipsisH}/>
                            </div>
                        </div>
                        {this.state.data.map((m)=>{
                            return(
                                <div className="Home-posts">
                                    <div className="title-container">
                                        <p>{m.title}</p>
                                        <div className="title-icons-posts">
                                            <div className="title-faThumbsDown">
                                                <FontAwesomeIcon icon={faThumbsUp} />
                                            </div>
                                            <div className="title-faHeart">
                                                <FontAwesomeIcon icon={faHeart} />
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
                                        <FontAwesomeIcon icon={faCheckCircle} className="faCheckCircle-footer"/>
                                        {m.paymentvervied === true ? <p className="payment">Payment verified</p> : <p className="payment">Payment unverified</p>}
                                        <div className="allstars">
                                            <FontAwesomeIcon icon={faStar} className="star-footer" />
                                            <FontAwesomeIcon icon={faStar} className="star-footer" />
                                            <FontAwesomeIcon icon={faStar} className="star-footer" />
                                            <FontAwesomeIcon icon={faStar} className="star-footer" />
                                            <FontAwesomeIcon icon={faStar} className="star-footer" />
                                        </div>
                                        <p className="mr-3"><span className="bold">&#36;{m.spend}</span> spent</p>
                                        <FontAwesomeIcon icon={faMapMarkerAlt} className="location"/>
                                        <p className="payment">{m.country}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="Home-rightSection"></div>
                </div>
            </div>
        )
    }
}

export default Home;