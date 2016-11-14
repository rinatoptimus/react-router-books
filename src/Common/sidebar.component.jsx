import React, {Component} from 'react';
import { Link } from 'react-router';

require ('./../scss/sidebar.scss'); 

class Sidebar extends Component {
    render(){
        return(
            <div className="container-sidebar">
                <div className="sidebar">
			        <ul className="sidebar-menu">
			            <li className="sidebar-item">
			                <Link to="/" className="sidebar-link" activeClassName="active">
			                    <i className="fa fa-book fa-2" aria-hidden="true"></i>
			                    <span>Мои книги</span>
			                </Link>
			            </li>
			            <li className="sidebar-item">
			                <Link to="/authors" className="sidebar-link" activeClassName="active">
			                    <i className="fa fa-users fa-2" aria-hidden="true"></i>
			                    <span>Авторы</span>
			                </Link>
			            </li>
			            <li className="sidebar-item">
			                <Link to="/add-book" className="sidebar-link" activeClassName="active">
			                    <i className="fa fa-plus-circle fa-2" aria-hidden="true"></i>
			                    <span>Добавить</span>
			                </Link>
			            </li>
			            <li className="sidebar-item">
			                <Link to="/authorization" className="sidebar-link" activeClassName="active">
			                    <i className="fa fa-sign-in fa-2" aria-hidden="true"></i>
			                    <span>Войти</span>
			                </Link>
			            </li>			          
			        </ul>
			    </div>
			    <div className="content">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Sidebar