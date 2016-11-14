import React, { Component } from 'react';
import { Link } from 'react-router';

//import DATA from './books.json';
import data from './books.json';

require ('./../scss/ContentMyBooksList.scss'); 

/*console.log(books.books.book1.author);
const data = [books.books];
console.log(data);*/

class Home extends Component {
    render(){
        // Get data from route props
        // original const books = this.props.route.data;
        
        /*const data = require('./books.json'); 
		console.log(data.book1.genre);*/
		/*var json = [data.books];console.log(json);
		for (var i = 0 ; i < json.length ; i++) {
			//console.log(json[i].book1);
			console.log(json[i].books);
			//console.log(json.books[i]);
		}*/
        
        const carNode = Object.keys(data.books).map(item => 
        	{return (
        		<tr>
        			<th>{data.books[item].id}</th>
        			<td>
        				<p className="item-book">
        					<Link
        					to={"books/"+data.books[item].id}
			                    
			                    key={data.books[item].id}
        					>{data.books[item].name}</Link>
        				</p>
        				<p className="author">{data.books[item].author}</p>
        			</td>
        		</tr>
        	)}
        )

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
	                                <table className="table table-striped table-my-books table-hover">
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
	                                <table className="table table-striped table-my-books table-hover">
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