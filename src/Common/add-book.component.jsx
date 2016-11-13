import React, {Component} from 'react';
import { Link } from 'react-router';

require ('./../scss/main.scss'); 

class AddBook extends Component {
    render(){
        return(
            <div className="container-fluid content-main">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="card card-block card-add-book">
                            <h4 className="card-title">Заполните поля</h4>
                            <form>
                              <div className="form-group">
                                <label for="book-title">Название</label>                               
                                <input type="text" className="form-control" id="book-title" placeholder="" reqiured />
                              </div>
                              <div className="form-group">
                                <label for="book-author">Автор</label>                               
                                <input type="text" className="form-control" id="book-author" placeholder="" reqiured />
                              </div>
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
                                <input type="text" className="form-control" id="book-descr" placeholder="" />
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
                              <button type="submit" className="btn btn-success">
                                  <i className="fa fa-check-circle fa-2" aria-hidden="true"></i>
                                  Сохранить
                              </button>
                            </form>
                        </div>                      
                    </div>
                </div>
            </div>
        );
    }
}

export default AddBook