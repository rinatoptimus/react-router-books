import React, {Component} from 'react';
import { Link } from 'react-router';

require ('./../scss/main.scss'); 

class AddBook extends Component {
    render(){
        return(
            <div>
            	<Link to="/add-book" className="sidebar-link" activeClassName="active">
                    <i className="fa fa-users fa-2" aria-hidden="true"></i>
                    <span>Add Book</span>
                </Link>
            </div>
        );
    }
}

export default AddBook