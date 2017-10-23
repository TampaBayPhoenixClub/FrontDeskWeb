import { BrowserRouter, Route } from 'react-router-dom'
import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware  } from 'redux';
import ReduxThunk from 'redux-thunk';


import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage'
import CategoriesPage from './components/CategoriesPage'
import EnglishDictionaryPage from './components/EnglishDictionaryPage'
import HandShapeDictionaryPage from './components/HandShapeDictionaryPage'
import Header from './components/Header'
import SideMenu from './components/SideMenu'
import Footer from './components/Footer'
import reducers from './reducers';
import '../css/aslstrong.scss';
const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

class App extends Component {
  render() {

    return (
    <BrowserRouter>
      <div id="aslstrong">
        <Header/>
        <main>
          <Route path='/' exact component={HomePage}/>
          <Route path='/about' exact component={AboutPage}/>
          <Route path='/categories' exact component={CategoriesPage} />
          <Route path='/Dictionary/English' exact component={EnglishDictionaryPage} />
          <Route path='/Dictionary/HandShape' exact component={HandShapeDictionaryPage} />
        </main>
        <Footer/>
      </div>
      </BrowserRouter>
    )
  }
}


ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('app'));
