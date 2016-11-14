import React, {Component} from 'react';
import { Link } from 'react-router';

import Formsy from 'formsy-react';
import MyInput from './input-add-book.jsx';

require ('./../scss/main.scss'); 

const AddBook = React.createClass({
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
    render(){
        return(
            <div className="container-fluid content-main">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="card card-block card-add-book">
                            <h4 className="card-title">Заполните поля</h4> 
                            <p>
                              <small class="text-muted">* - поля, обязательные для заполнения.</small>
                            </p>                           
                            <Formsy.Form onSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton} className="login">
                              <div className="row">
                                <div className="col-lg-4 container-book-title">                                                       
                                    <MyInput value="" name="book-title" id="book-title" title="Название книги *" validationError="" required />                                
                                </div>
                              </div>                
                              <br/>
                              <div className="row">
                                <div className="col-lg-4 container-book-author">                                  
                                    <MyInput value="" name="book-author" id="book-author" title="Автор *" validationError="" required />
                                </div>
                              </div> 
                              <br/>
                              <div className="row">
                                <div className="col-lg-4">
                                  <div className="form-group">
                                    <label for="book-genre">Жанр</label>                               
                                    <select className="form-control" id="book-genre">
                                      <option>Проза</option>
                                      <option>Стихи</option>
                                      <option>Фантастика</option>
                                      <option>Новелла</option>
                                      <option>Мемуаары</option>
                                      <option>Фельетон</option>
                                      <option>Пьеса</option>
                                    </select>
                                  </div>
                                  <div className="form-group">
                                    <label for="book-year">Год выпуска</label>                               
                                    <select className="form-control" id="book-year">
                                      <option>2010</option>
                                      <option>2011</option>
                                      <option>2012</option>
                                      <option>2013</option>
                                      <option>2014</option>
                                      <option>2015</option>
                                      <option>2016</option>
                                    </select>
                                  </div>
                                  <div className="form-group">
                                    <label for="book-pages">Количество страниц</label>                               
                                    <input type="number" className="form-control" id="book-pages" placeholder="" />
                                  </div>
                                  <div className="form-group">
                                    <label for="book-descr">Описание книги</label>                               
                                    <textarea className="form-control" id="book-descr" rows="3"></textarea>
                                  </div>
                                  <div className="form-group">
                                    <label for="book-citates">Цитаты</label>                               
                                    <input type="text" className="form-control" id="book-citates" placeholder="" />
                                  </div>
                                  <div className="form-group">
                                    <label for="book-cover">Обложка книги</label>
                                    <input type="file" className="form-control-file" id="book-cover" aria-describedby="fileHelp" />
                                    <small id="fileHelp" className="form-text text-muted">Загрузите изображение в форматах: jpg, png.</small>
                                  </div>  
                                </div>
                              </div>  
                              <br/>
                              <div className="row">
                                <div className="col-lg-4">
                                  <div className="input-group">                                                         
                                    <button type="submit" className="btn btn-success" disabled={!this.state.canSubmit}>
                                      <i className="fa fa-check-circle fa-2" aria-hidden="true"></i>
                                      Сохранить
                                  </button>
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

export default AddBook