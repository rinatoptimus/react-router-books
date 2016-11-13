import React, {Component} from 'react';
import { Link } from 'react-router';

require ('./../scss/main.scss'); 

class Topbar extends Component {
    render(){
        return(
            <div className="top-bar">
			    <button type="button" className="btn btn-success">
			        <i className="fa fa-plus-circle fa-2" aria-hidden="true"></i>
			    </button>

			    <nav className="navbar navbar-light bg-faded">
			        <a className="navbar-brand" href="#"><i className="fa fa-bookmark fa-2" aria-hidden="true"></i>Books</a>

			        <ul className="nav navbar-nav navbar-right pull-right">
			            <li className="user-block">
			                <i className="fa fa-user fa-2" aria-hidden="true"></i>
			                <a className="nav-link dropdown-toggle" href="#" id="supportedContentDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Василеостровская Ольга</a>
			                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="supportedContentDropdown">
			                    <a className="dropdown-item" href="#">Action</a>
			                    <a className="dropdown-item" href="#">Another action</a>
			                    <a className="dropdown-item" href="#">Something else here</a>
			                </div>
			            </li>
			            <li className="input-block">
			                <form className="form-inline float-xs-right form-top-bar">

			                    <div className="input-group custom-search-form">
			                        <span className="input-group-btn">
			                            <button className="btn btn-secondary btn-sm" type="button">
			                                <i className="fa fa-search"></i>
			                            </button>
			                        </span>
			                        <input type="text" className="form-control input-search" placeholder="" />
			                    </div>
			                </form>
			            </li>
			        </ul>			        
			    </nav>
			    
			</div>
        );
    }
}

export default Topbar