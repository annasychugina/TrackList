import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';




import { Router, Route, hashHistory } from 'react-router';


import App from './App';
import './index.css';
import reducer from './reducers';

import About from './About';
import Track from './Track';

import { syncHistoryWithStore } from 'react-router-redux';



// const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
const history = syncHistoryWithStore(hashHistory, store);
//
ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={App} />
			<Route path="/about" component={About}/>
			<Route path="/tracks/:id" component={Track}/>
		</Router>
	</Provider>,
	document.getElementById('root')
);

// import { createStore } from 'redux';
//
// // функция которая будет изменять Store
// function playlist(state = [], action) {
// 	if (action.type === 'ADD_TRACK') {
// 		//возращает новый массив. всегда создаем новую копию данных, а не меняем сторе
// 		return [
// 			...state,
// 			action.payload
// 		];
// 	}
// 	return state;
// }
//
// const store = createStore(playlist);
// const addTrackBtn = document.querySelectorAll('.addTrack')[0];
// const trackInput = document.querySelectorAll('.trackInput')[0];
// const list = document.querySelectorAll('.list')[0];
//
// // подписываемся на изменения нашего store
// store.subscribe(() => {
//
// 	// console.log('subscribe', store.getState());
// 	list.innerHTML = '';
// 	trackInput.value = '';
// 	store.getState().forEach(track => {
// 		const li = document.createElement('li');
// 		li.textContent = track;
// 		list.appendChild(li);
// 	})
// });
//
// //функция измены знаения в сторе
//
// // store.dispatch({
// // 	type: "ADD_TRACK",
// // 	payload: "Music"
// // });
//
//
//
// addTrackBtn.addEventListener('click', () =>{
// 	const trackName = trackInput.value;
//
// 	store.dispatch({
// 		type: 'ADD_TRACK',
// 		payload: trackName
// 	});
// });
//
//
