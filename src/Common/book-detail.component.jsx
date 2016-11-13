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
            <div>
                <div className="card card-block">
                    <h4 className="card-title">{book[0].name}</h4>
                    <div className="container-book-descr">
                        <div className="book-profile">
                            <div className="container-img">
                                <img src={book[0].media} alt={book[0].name} />
                                <button className="btn btn-default" onClick={this.handleRedirect.bind(this)}>Go to Cars</button>
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
                                    <p>Действие повести разворачивается в будущем на другой планете в государстве Арканар, где существует гуманоидная цивилизация, представители которой физически неотличимы от людей. Цивилизация находится на уровне развития, соответствующем земному позднему Средневековью. На планете негласно присутствуют сотрудники земного Института экспериментальной истории, ведущие наблюдение за развитием цивилизации.</p>
                                    <p>Земные агенты внедрены в различные слои общества Арканара и других государств. Они прекрасно экипированы и подготовлены, их физические возможности многократно превышают возможности аборигенов, в принципе любой из них мог бы в одиночку поднимать тысячи людей на бунт, организовывать войны, смещать правящие династии и становиться правителем сам, но подобные действия категорически запрещены — ограничение определяется стратегией «бескровного воздействия», согласно которой история общества Арканара должна иметь самостоятельное течение, а всё, что допустимо для землян, — «сглаживание углов», защита арканарцев от явных исторических ошибок, пережитых в своё время обществом Земли. Земные агенты безупречно владеют оружием, но для них, как и для всех землян XXII века, убийство разумного существа, даже при самообороне, недопустимо по моральным соображениям.</p>
                                    <p>Главный герой — землянин Антон, действующий в Арканарском королевстве под видом дворянина Руматы Эсторского. Он всеми силами старается повернуть общество на верный путь, но идея Революции отпадает сразу — люди не могут представить себе свободу, они четко представляют себя на месте своих господ. Поэтому, проведи он ее, все придется начинать в этой стране сначала, а результатом станет тоже самое — правящие элиты и нищета. Арканарское королевство переживает период контркультурной реакции — идут гонения на «грамотеев» под девизом «Нам не нужны умные, нам нужны верные». Румата всеми силами старается спасти для будущих поколений гениальных учёных, поэтов, деятелей искусства.</p>
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
                                                <p><i className="fa fa-quote-left fa-1" aria-hidden="true"></i>Хоть король, хоть черт, хоть сам дон Рэба…<i className="fa fa-quote-right fa-1" aria-hidden="true"></i></p>
                                            </blockquote>
                                        </div>
                                    </div>
                                    <div className="card citatio-item">
                                        <div className="card-header">
                                            <p><i className="fa fa-file-o fa-1" aria-hidden="true"></i>43</p>
                                        </div>
                                        <div className="card-block">
                                            <blockquote className="card-blockquote">
                                                <p><i className="fa fa-quote-left fa-1" aria-hidden="true"></i>Я же все-таки человек, и все животное мне не чуждо…<i className="fa fa-quote-right fa-1" aria-hidden="true"></i></p>
                                            </blockquote>
                                        </div>
                                    </div>
                                    <div className="card citatio-item">
                                        <div className="card-header">
                                            <p><i className="fa fa-file-o fa-1" aria-hidden="true"></i>56</p>
                                        </div>
                                        <div className="card-block">
                                            <blockquote className="card-blockquote">
                                                <p><i className="fa fa-quote-left fa-1" aria-hidden="true"></i>— Вот как? Мы цитируем мятежника Цурэна?<i className="fa fa-quote-right fa-1" aria-hidden="true"></i></p>
                                            </blockquote>
                                        </div>
                                    </div>
                                    <div className="card citatio-item">
                                        <div className="card-header">
                                            <p><i className="fa fa-file-o fa-1" aria-hidden="true"></i>98</p>
                                        </div>
                                        <div className="card-block">
                                            <blockquote className="card-blockquote">
                                                <p><i className="fa fa-quote-left fa-1" aria-hidden="true"></i>— Кстати, благородные доны, чей это вертолёт позади избы?<i className="fa fa-quote-right fa-1" aria-hidden="true"></i></p>
                                            </blockquote>
                                        </div>
                                    </div>
                                    <div className="card citatio-item">
                                        <div className="card-header">
                                            <p><i className="fa fa-file-o fa-1" aria-hidden="true"></i>111</p>
                                        </div>
                                        <div className="card-block">
                                            <blockquote className="card-blockquote">
                                                <p><i className="fa fa-quote-left fa-1" aria-hidden="true"></i>— Я вспотел, и мне нужно возместить потерю жидкости.<i className="fa fa-quote-right fa-1" aria-hidden="true"></i></p>
                                            </blockquote>
                                        </div>
                                    </div>
                                    <div className="card citatio-item">
                                        <div className="card-header">
                                            <p><i className="fa fa-file-o fa-1" aria-hidden="true"></i>176</p>
                                        </div>
                                        <div className="card-block">
                                            <blockquote className="card-blockquote">
                                                <p><i className="fa fa-quote-left fa-1" aria-hidden="true"></i>— Благородный дон поражён в пятку!!<i className="fa fa-quote-right fa-1" aria-hidden="true"></i></p>
                                            </blockquote>
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