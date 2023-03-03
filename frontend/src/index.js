<<<<<<< Updated upstream
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Guest from './components/Guest';
import Host from './components/Host';
import GamePrepare from './components/GamePrepare';
=======
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Guest from "./components/Guest";
import Host from "./components/Host";
import GamePrepare from "./components/GamePrepare";
import InGame from "./components/InGame";
>>>>>>> Stashed changes

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<<<<<<< Updated upstream
	<BrowserRouter>
		<Routes>
			<Route path={'/'} element={<App />}></Route>
			<Route path={'/host'} element={<Host />}></Route>
			<Route path={'/guest'} element={<Guest />}></Route>
			<Route path={'/gameprepare'} element={<GamePrepare />}></Route>
		</Routes>
	</BrowserRouter>
=======
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<App />} />
        <Route path={"/host"} element={<Host />} />
        <Route path={"/guest"} element={<Guest />} />
        <Route path={"/gameprepare"} element={<GamePrepare />} />
        <Route path={"/ingame"} element={<InGame />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
>>>>>>> Stashed changes
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
