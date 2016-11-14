import React, {Component} from 'react';
import { Link } from 'react-router';

import Formsy from 'formsy-react';
import MyInput from './input.jsx';

require ('./../scss/main.scss'); 


const Authorization = React.createClass({
  getInitialState() {
    return { canSubmit: false };
  },
  submit(data) {
    alert(JSON.stringify(data, null, 4));
  },
  enableButton() {
    this.setState({ canSubmit: true });
  },
  disableButton() {
    this.setState({ canSubmit: false });
  },
  render() {
    return (

      <div className="container-fluid content-main">
	        <div className="row">
	            <div className="col-xl-12">
	                <div className="card card-block card-authorization">
	                    <h4 className="card-title">Введите логин и пароль</h4>
	                    <Formsy.Form onSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton} className="login">
							<div className="row">
								<div className="col-lg-4">
									<div className="input-group">	                    	
										<MyInput value="" name="email" title="Email" validations="isEmail" validationError="Похоже, это не ваш email. Попробуйте еще раз." required />
									</div>	
								</div>
							</div>					      
					        <br/>
							<div className="row">
								<div className="col-lg-4">
									<div className="input-group">					        					        
										<MyInput value="" name="password" title="Password" type="password" required />
										<br/>
										<button className="btn btn-success" type="submit" disabled={!this.state.canSubmit}>Войти</button>
									</div>	
								</div>
							</div>					       
					    </Formsy.Form>
	                </div>                      
	            </div>
	        </div>
	  </div>
    );
  }
});


export default Authorization