import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter.jsx';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

const jsx = <AppRouter />;

ReactDOM.render(jsx, document.getElementById('app'));
