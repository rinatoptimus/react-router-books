import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class BookDetail extends Component {
    handleRedirect(){
        browserHistory.push('/');
    }
    render(){
        const books = this.props.route.data;
        const id = this.props.params.id;
        const book = books.filter(book => {
            if(book.id == id) {
                return books;
            }
        });

        return (
            <div className="container-fluid content-main">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="card card-block">
                            <div className="card-top">
                                <h4 className="card-title">{book[0].name}</h4>
                                <button className="btn btn-default btn-back" onClick={this.handleRedirect.bind(this)}>
                                    <i className="fa fa-arrow-left fa-arrow-circle-left fa-2" aria-hidden="true"></i>Назад
                                </button>
                            </div>
                            <div className="container-book-descr">
                                <div className="book-profile">
                                    <div className="container-img">
                                        <img src={book[0].media} alt={book[0].name} />
                                    </div>
                                    <table className="table table-sm table-book-profile">
                                        <tbody>
                                            <tr>
                                                <th scope="row">Жанр</th>
                                                <td>{book[0].genre}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Год выпуска</th>
                                                <td>{book[0].year}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Страниц</th>
                                                <td>{book[0].pages}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="book-content">
                                    <ul className="nav nav-tabs content-tabs" role="tablist">
                                        <li className="nav-item">
                                            <button type="button" className="btn btn-secondary active" href="#descr" role="tab" data-toggle="tab">Описание</button>
                                        </li>
                                        <li className="nav-item">
                                            <button type="button" className="btn btn-secondary" href="#citatio" role="tab" data-toggle="tab">Цитаты</button>
                                        </li>
                                    </ul>
                                    <div className="tab-content">
                                        <div role="tabpanel" className="tab-pane fade in active" id="descr">
                                            <p>{book[0].descr}</p>
                                        </div>
                                        <div role="tabpanel" className="tab-pane fade" id="citatio">
                                            <div className="card card-block card-textarea">
                                                <form>
                                                    <fieldset>
                                                        <div className="form-group">
                                                            <textarea className="form-control" id="exampleTextarea" rows="3" placeholder="Введите текст цитаты..."></textarea>
                                                        </div>
                                                        <button type="submit" className="btn btn-success"><i className="fa fa-plus-circle fa-2" aria-hidden="true"></i> Добавить</button>
                                                    </fieldset>
                                                </form>
                                            </div>
                                            <div className="card citatio-item">
                                                <div className="card-header">
                                                    <p><i className="fa fa-file-o fa-1" aria-hidden="true"></i>12</p>
                                                </div>
                                                <div className="card-block">
                                                    <blockquote className="card-blockquote">
                                                        <p><i className="fa fa-quote-left fa-1" aria-hidden="true"></i>
                                                            {book[0].citate}
                                                        <i className="fa fa-quote-right fa-1" aria-hidden="true"></i></p>
                                                    </blockquote>
                                                </div>
                                            </div>                                           
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BookDetail