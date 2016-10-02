import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';

import 'babel-polyfill';

import css from './styles/app.scss';

// Import components
import App from './components/App';
import ArticleGrid from './components/ArticleGrid';
import ArticleSingle from './components/ArticleSingle';

import configureStore from './store';
const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={ArticleGrid} />
        <Route path="/article/:articleId" component={ArticleSingle} />
      </Route>
    </Router>
  </Provider>
);

render(router, document.getElementById('root'));
