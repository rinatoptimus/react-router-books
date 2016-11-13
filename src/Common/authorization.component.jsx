import React, {Component} from 'react';
import { Link } from 'react-router';

require ('./../scss/main.scss'); 

class Authorization extends Component {
    render(){
        return(
            <div className="container-fluid content-main">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="card card-block card-authorization">
                            <h4 className="card-title">Введите логин и пароль</h4>
                            <form>							  
							  	<div className="row">
								  <div className="col-lg-3">
									  <div className="input-group">
										  <span className="input-group-addon" id="basic-addon1">
										  	<i className="fa fa-envelope fa-1" aria-hidden="true"></i>
										  </span>
										  <input type="text" className="form-control" placeholder="example@mail.com" aria-describedby="basic-addon1" />
									  </div>
									</div>
								</div>
								<br/>
								<div className="row">
								  <div className="col-lg-3">
								    <div className="input-group">
									  <span className="input-group-addon" id="basic-addon1">
									  	<i className="fa fa-key fa-2" aria-hidden="true"></i>
									  </span>
									  <input type="text" className="form-control" placeholder="например: рыба-меч" aria-describedby="basic-addon1" />
								    </div>
								  </div>
								</div>
							    <br/>					  						  
							    <button type="submit" className="btn btn-success">Войти</button>
							</form>
                        </div>                      
                    </div>
                </div>
            </div>
        );
    }
}

export default Authorization