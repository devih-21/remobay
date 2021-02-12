import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './style/showProposal.css';
import { Link } from 'react-router-dom';
import {faTag, faUserCog, faCheckCircle, faStar, faFile} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getOneProposal, downloadJobFiles, receiveJob, setProposalStatus } from "./../../Actions/getJobs";


class ShowProposal extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            jobPage : `/job/${this.props.match.params.jobId}`, 
            message: "", 
            sendJob: false,
            proposalStatus: 0
        }
    }
    componentDidMount = () => {
        console.log(localStorage.getItem('token'),this.props.match.params.jobId)
        console.log(localStorage.getItem('id'))
        this.props.getOneProposal(localStorage.getItem("id"),this.props.match.params.jobId)
    }
    handleFiles = (i) => {
        console.log(this.props.proposals.proposalsList[i].receiveJob.jobFiles.length)
        if(this.props.getProposal.myProposal[0].receiveJob.jobFiles.length > 0){
            console.log("ah malkesh da3wa")
        let files = [];
            files.push (
                <div>
                    <div className="job-files border rounded px-3 py-2">
                        <FontAwesomeIcon icon={faFile} className="-mx-3 d-inline"></FontAwesomeIcon>
                    </div>
                    {this.props.getProposal.myProposal[0].receiveJob.jobFiles.map(file =>{
                        <span className="mx-2" onClick={()=>{
                            this.props.downloadJobFiles(file)
                            }}>{file}</span>
                    })}
                </div>
                )
            return files;
        }  
        else{
            return(
                <div><h6>No files uploaded</h6></div>
            )
        }
    }
    handleBtn = () => {
        if (this.props.getProposal.myProposal[0].proposal.status === 0){
            return (
            <div className="">
                <button className="btn btn-outline-dark px-4 py-3 font-weight-bold withdraw-btn">Withdraw proposal</button>
            </div>
            )
        }
        else if(this.props.proposalStatus === 2){
            return (
                <div className="">
                    <button className="btn btn-success px-4 py-3 font-weight-bold receive-btn" data-toggle="modal" data-target="#recieveModal">Recieve proposal</button>
                    <div className="modal fade" id="recieveModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-lg" role="document">
                            <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title font-weight-bold">Recieve Work</h5>
                                <button type="button" className="close color-upwork" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="container">
                                <form>
                                    <div className="modal-body p-5">
                                        <div className="form-group">
                                            <label for="exampleFormControlTextarea1">Message</label>
                                            <textarea required className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={(e)=>{
                                                this.setState({message: e.target.value});
                                                console.log(this.state.message)
                                            }}></textarea>
                                        </div>
                                        <div className="custom-file mt-4">
                                            <input type="file" multiple className="custom-file-input" id="inputGroupFile01"/>
                                            <label className="custom-file-label" for="inputGroupFile01">Choose files</label>
                                        </div>
                                        </div>
                                    <div className="modal-footer">
                                        <button type="submit" className="btn btn-success text-white btn-upwork" data-dismiss="modal" onClick={()=>{
                                            console.log(this.state.message)
                                            this.props.receiveJob(localStorage.getItem('id'), this.props.match.params.jobId, this.state.message)
                                            this.props.setProposalStatus(3);
                                            this.props.getOneProposal(localStorage.getItem('id'),this.props.match.params.jobId)
                                            console.log(this.props.proposalStatus)
                                        }}>Send Job</button>
                                        <button type="button" className="btn color-black close-modal-btn btn-outline-success" data-dismiss="modal">Close</button>
                                    </div>
                                </form>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                )
        }
        else if(this.props.proposalStatus === 3){
            return (
                <div className="">
                    <button disabled className="btn btn-outline-success px-4 my-3 py-3 font-weight-bold color-black">You finished this job <FontAwesomeIcon icon={faCheckCircle}className="ml-4 text-success check-circle"/></button>
                    {
                        (() => {
                            if(this.props.proposals){
                                if(this.props.proposals.length > 0){
                                    for(let i = 0; i < this.props.proposals.length; i++){
                                        if(this.props.proposals.proposalsList[i].userID == this.localStorage.getItem('id') ){
                                            return(
                                                <div className="py-2 border border-right-0 border-left-0 border-muted">
                                                    <h5 className="font-weight-bold my-3 py-3 border border-right-0 border-left-0 border-top-0 border-muted">Your received work</h5>
                                                    <h6 className="font-weight-bold">Message:</h6>
                                                    <p className="mb-4">{this.props.getProposal.myProposal[0].receiveJob.message}</p>
                                                    <h5 className="font-weight-bold">Files:</h5>
                                                    {this.handleFiles(i)}
                                                </div>
                                            )
                                        }
                                    }
                                }
                            }
                            else{
                                return(
                                    <div></div>
                                )
                            }
                        })()
                    }
                </div>
                )
        }
        else{
            return (
                <div className="">
                    <button disabled className="btn btn-outline-danger px-4 py-3 font-weight-bold color-black">This job is closed</button>
                </div>
                )
        }
    }
    show = () => {
        console.log(this.props)
        if(this.props.getProposal){
            return (
                <div className="proposal-details-container">
                <div className="pb-5 container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-10">
                            <div className="h5-proposal-details m-3">
                                <h5 className="font-weight-bold ">Proposal Details</h5>
                            </div>
                            <div className="row">
                                <div className="col-md-9">
                                    <div className="proposal-details-content border rounded bg-white pb-3 w-100">
                                        <div className="h5-job-details px-4 py-4 border border-right-0 border-left-0 border-top-0 border-muted">
                                            <h5 className="font-weight-bold">Job Details</h5>
                                        </div>
                                        <div className="py-3 px-4 job-details">
                                            <div className="row border border-right-0 border-left-0 border-top-0 border-muted pb-3">
                                                <div className="col-md-9 border border-bottom-0 border-left-0 border-top-0 border-muted">
                                                    <div>
                                                        <h5 className="font-weight-bold">{this.props.getProposal.myProposal[0].myJob.postName}</h5>
                                                        <div className="my-3 skills">
                                                            <div className="badge badge-secondary category-font-color px-2 py2">{this.props.getProposal.myProposal[0].myJob.category}</div>
                                                        </div>
                                                        <div className="mb-3">
                                                            {this.props.getProposal.myProposal[0].myJob.description}
                                                        </div>
                                                        <Link to={this.state.jobPage}>View Job Post</Link>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="">
                                                        <div className="row my-2">
                                                            <div className="col-sm-2">
                                                                <div>
                                                                    <FontAwesomeIcon  icon={faUserCog} className="color-balck"/>                                                                    
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-9">
                                                                <div>
                                                                    <p className="font-weight-bold">{this.props.getProposal.myProposal[0].myJob.experienceLevel}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row my-2">
                                                            <div className="col-sm-2">
                                                                <div>
                                                                    <FontAwesomeIcon  icon={faTag} className="color-balck"/>
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-9">
                                                                <div>
                                                                    <p className="font-weight-bold">{this.props.getProposal.myProposal[0].myJob.estimatedBudget}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row py-3 border border-right-0 border-left-0 border-top-0 border-muted">
                                                <div className="col-md-12">
                                                    <div className="my-2">
                                                        <h5 className="font-weight-bold mb-2">Skills and expertise</h5>
                                                        {this.props.getProposal.myProposal[0].myJob.skills.map((skill) => {
                                                            <div className="badge badge-secondary skill-font-color px-2 py2">{skill}</div>
                                                        })}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row py-3 border border-right-0 border-left-0 border-top-0 border-muted">
                                                <div className="col-md-12">
                                                    <div className="my-2">
                                                        <h5 className="font-weight-bold mb-2">Your proposed terms</h5>
                                                        <div className="my-3">
                                                            <p className="my-0 font-weight-bold">Bid/Budget</p>
                                                            <p className="my-0 ">Total amount the client will see on your proposal</p>
                                                            <p className="mp-2">${this.props.getProposal.myProposal[0].proposal.terms.bid}</p>
                                                        </div>
                                                        <div className="my-3">
                                                            <p className="my-0 font-weight-bold">You'll Receive</p>
                                                            <p className="my-0 ">The estimated amount you'll receive after service fees</p>
                                                            <p className="mp-2">${this.props.getProposal.myProposal[0].proposal.terms.received}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-4">
                                                {this.handleBtn()}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-white my-4 border rounded">
                                        <div>
                                            <div className="p-3 border border-right-0 border-left-0 border-top-0 border-muted">
                                                <h5 className="font-weight-bold">Cover Letter</h5>
                                            </div>
                                            <div className="cover-letter-content p-3 ml-3">
                                                {this.props.getProposal.myProposal[0].proposal.coverLetter}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div>
                                        <h6 className="font-weight-bold mb-3">About the client</h6>
                                        <div className="d-flex justify-content-start payment-verified">
                                            <p>Payment Method Verified</p>
                                            <FontAwesomeIcon icon={faCheckCircle}className="ml-4 text-success check-circle"/>
                                        </div>
                                        <div className="my-2">
                                            <FontAwesomeIcon icon={faStar} className="text-success"/>
                                            <FontAwesomeIcon icon={faStar} className="text-success"/>
                                            <FontAwesomeIcon icon={faStar} className="text-success"/>
                                            <FontAwesomeIcon icon={faStar} className="text-success"/>
                                            <FontAwesomeIcon icon={faStar} className="text-success"/>
                                        </div>
                                        <div className="Location my-2">
                                            <h6 className="font-weight-bold">Location</h6>
                                            <p>{this.props.getProposal.clientData.country}</p>
                                        </div>
                                        <div className="History">
                                            <h6 className="font-weight-bold mb-2">History</h6>
                                            <p className="m-0"> {this.props.getProposal.myProposal[0].myJob.proposals.length} proposals </p>
                                            <p className="m-0">{this.props.getProposal.clientData.allJobsPosted} post job</p>
                                            <p className="m-0">{this.props.getProposal.clientData.currentOpenJobs} open job</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            ) 
        }
        else{
            return(
                <div className="d-flex justify-content-center">
                    <h3>This Proposal does  not found</h3>
                </div>
            )
        }
    }
    render() { 
        console.log(this.props.getProposal)
        return ( 
            <div>
                <Header />
                {this.show()}
                <Footer />
            </div>
         );
    }
}
 
const mapStateToProps = (state) => {
    return {
      isLoggedIn: state.userReducer.isLoggedIn,
      userId: state.userReducer.userID,
      getProposal: state.getJobsReducer.getOneProposal,
      receivedJob: state.getJobsReducer.receiveJob,
      proposals: state.getJobsReducer.proposals,
      proposalStatus: state.getJobsReducer.proposalStatus
    };
  };
  const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({getOneProposal, downloadJobFiles, receiveJob, setProposalStatus},dispatch);
  };
  export default connect(mapStateToProps, mapDispatchToProps)(ShowProposal);