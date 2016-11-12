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
        model: '2013',
        make: '288',
        media: 'http://media.ed.edmunds-media.com/honda/accord-crosstour/2010/oem/2010_honda_accord-crosstour_4dr-hatchback_ex-l_fq_oem_4_500.jpg',
        price: '$16,811'

    },
    {
        id: 2,
        name: 'Отцы и дети',
        author: 'Тургенев',
        year: 'Проза',
        model: 'AMG',
        make: 'Mercedes Benz',
        media: 'http://media.ed.edmunds-media.com/mercedes-benz/amg-gt/2016/oem/2016_mercedes-benz_amg-gt_coupe_s_fq_oem_1_717.jpg',
        price: '$138,157'

    },
    {
        id: 3,
        name: 'Война и мир',
        author: 'Толстой',
        year: 'Проза',
        model: 'X6',
        make: 'BMW',
        media: 'http://media.ed.edmunds-media.com/bmw/x6/2016/oem/2016_bmw_x6_4dr-suv_xdrive50i_fq_oem_1_717.jpg',
        price: '$68,999'
    },
    {
        id: 4,
        name: 'Марсианские хроники',
        author: 'Брэдбери',
        year: 'Фантастика',
        model: 'Edge',
        make: 'Ford',
        media: 'http://media.ed.edmunds-media.com/ford/edge/2016/oem/2016_ford_edge_4dr-suv_sport_fq_oem_6_717.jpg',
        price: '$36,275'
    },
    {
        id: 5,
        name: 'Евгений Онегин',
        author: 'Пушкин',
        year: 'Стихи',
        model: 'Viper',
        make: 'Dodge',
        media: 'http://media.ed.edmunds-media.com/dodge/viper/2017/oem/2017_dodge_viper_coupe_acr_fq_oem_3_717.jpg',
        price: '$123,890'
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
