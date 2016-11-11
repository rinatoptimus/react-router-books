import React, { Component } from 'react';
import { Link } from 'react-router';
//import config from './books.json';
require ('./../scss/ContentMyBooksList.scss'); 

class Home extends Component {
    render(){
        // Get data from route props
        const books = this.props.route.data;
        

        // Map through cars and return linked cars
        const carNode = books.map((book) => {
            return (
            	<tr>
            		<th scope="row">{book.id}</th>
            		<td>
	            		<p>
	            			<Link
			                    to={"books/"+book.id}
			                    
			                    key={book.id}>
			                    {book.name}		                    
			                </Link>
	            		</p>
	            		<p className="author">{book.author}</p>
	            	</td>
            	</tr>
                
            )
        });
        return (

	        <div className="container-fluid content-main">
	            <div className="row">
	                <div className="col-xl-12">

	                	<div className="card card-block">
	                        <h4 className="card-title">Мои книги</h4>
	                        <ul className="nav nav-tabs content-tabs" role="tablist">
	                            <li className="nav-item">
	                                <button type="button" className="btn btn-secondary active" href="#not-read" role="tab" data-toggle="tab">Непрочитанные</button>
	                            </li>
	                            <li className="nav-item">
	                                <button type="button" className="btn btn-secondary" href="#read" role="tab" data-toggle="tab">Прочитанные</button>
	                            </li>
	                        </ul>
	                        <div className="tab-content">
	                            <div role="tabpanel" className="tab-pane fade in active" id="not-read">
	                                <table className="table table-striped table-my-books">
	                                    <thead>
	                                        <tr>
	                                            <th className="th-number">#</th>
	                                            <th>Название / Автор</th>
	                                        </tr>
	                                    </thead>
	                                    <tbody>
	                                        {carNode}            
	                                    </tbody>
	                                </table>
	                            </div>
	                            <div role="tabpanel" className="tab-pane fade" id="read">
	                                <table className="table table-striped table-my-books">
	                                    <thead>
	                                    <tr>
	                                        <th className="th-number">#</th>
	                                        <th>Название / Автор</th>
	                                    </tr>
	                                    </thead>
	                                    <tbody>
	                                    <tr>
	                                        <th scope="row">1</th>
	                                        <td>
	                                            <p>Title</p>
	                                            <p className="author">Author</p>
	                                        </td>
	                                    </tr>
	                                    <tr>
	                                        <th scope="row">2</th>
	                                        <td>
	                                            <p>Title</p>
	                                            <p className="author">Author</p>
	                                        </td>
	                                    </tr>
	                                    </tbody>
	                                </table>
	                            </div>
	                        </div>
	                    </div>
	                	
	    			</div>
	    		</div>
	    	</div>

        );
    }
}

export default Home