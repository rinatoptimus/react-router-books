import React, { Component } from 'react';
import { render } from 'react-dom';
// Import routing components
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import Topbar from './common/topbar.component.jsx'
import Sidebar from './common/sidebar.component.jsx'
import AddBook from './common/add-book.component.jsx'

import Home from './common/home.component.jsx'
import BookDetail from './common/book-detail.component.jsx'

//import data from './common/books.json';

//import TopBarRouter from './common/top-bar-router-delete.component.jsx'

import About from './common/about.component.jsx'
import Car from './car/car.component.jsx'
import CarDetail from './car/car-detail.component.jsx'

require ('./scss/App.scss'); 

const data = [
    {
        id: 1,
        name: 'Трудно быть богом',
        author: 'Стругацкие',
        genre: 'Фантастика',
        year: '2013',
        pages: '288',
        media: 'https://cdn.eksmo.ru/v2/ASE000000000715318/COVER/cover3d1__w340.jpg'
    },
    {
        id: 2,
        name: 'Отцы и дети',
        author: 'Тургенев',
        genre: 'Проза',
        year: '2010',
        pages: '327',
        media: 'https://cdn.eksmo.ru/v2/430000000000137585/COVER/cover3d1__w340.jpg'

    },
    {
        id: 3,
        name: 'Война и мир',
        author: 'Толстой',
        genre: 'Проза',
        year: '2011',
        pages: '876',
        media: 'https://cdn.eksmo.ru/v2/ASE000000000710292/COVER/cover3d1__w340.jpg'
    },
    {
        id: 4,
        name: 'Марсианские хроники',
        author: 'Брэдбери',
        genre: 'Фантастика',
        year: '2013',
        pages: '76',
        media: 'https://cdn.eksmo.ru/v2/430000000000179055/COVER/cover3d1__w340.jpg'
    },
    {
        id: 5,
        name: 'Евгений Онегин',
        author: 'Пушкин',
        genre: 'Стихи',
        year: '2014',
        pages: '176',
        media: 'https://cdn.eksmo.ru/v2/ASE000000000718282/COVER/cover3d1__w340.jpg'
    }
];

render(
  <Topbar />,
  document.getElementById('topbar')
);

render(
    <Router history={browserHistory}>
        <Route component={Sidebar}>
            <Route path="/" component={Home} data={data}/>
            <Route path="/books/:id" component={BookDetail} data={data}/>

            <Route path="/cars" component={Car} data={data}/>
            {/* Parameter route*/}
            <Route path="/cars/:id" component={CarDetail} data={data}/>
        </Route>
    </Router>,
    document.getElementById('root')
);
