import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import './HomePage.css'

class Home extends Component {
    constructor(){
        super();
        this.state={}
    }

    render=()=>{
        return(
            <div className="Home-container">
                <div className="Home-row">
                    <div className="Home-leftSection">
                        <p>Find Work</p>
                    </div>
                    <div className="Home-centerSection">
                        <div className="Home-search">
                            <input type="text" placeholder="Search for jobs" name="search"/>  
                            <button className=""><FontAwesomeIcon icon={faSearch} /> </button>
                        </div>  
                        <p><a href="">Advanced Search</a></p>
                    </div>
                    <div className="Home-rightSection"></div>
                </div>
            </div>
        )
    }
}

export default Home;