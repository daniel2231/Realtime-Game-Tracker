import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Guest from './components/Guest';
import Host from './components/Host';
import GamePrepare from './components/GamePrepare';
import InGame from './components/InGame';
import { SocketContext, socket } from './context/socketio';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<SocketContext.Provider value={socket}>
		<BrowserRouter>
			<Routes>
				<Route path={'/'} element={<App />} />
				<Route path={'/host'} element={<Host />} />
				<Route path={'/guest'} element={<Guest />} />
				<Route path={'/gameprepare'} element={<GamePrepare />} />
				<Route path={'/ingame'} element={<InGame />} />
			</Routes>
		</BrowserRouter>
	</SocketContext.Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
