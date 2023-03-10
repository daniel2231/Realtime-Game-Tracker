import React, { Fragment, useEffect, useState, useContext } from 'react';
import { SocketContext } from '../context/socketio';
import { useNavigate } from 'react-router-dom';

export default function Host() {
	const [data, setData] = useState({});
	const [loading, setLoading] = useState(true);
	const socket = useContext(SocketContext);
	const navigate = useNavigate();

	useEffect(() => {
		fetch('http://localhost:8000/game/init', {
			method: 'POST',
		})
			.then((response) => response.json())
			.then((response) => {
				setData(response);
				setLoading(false);
			});

		socket.on('gameReady', (data) => {
			console.log(data);
			if (data) {
				navigate('/host/prepare');
			}
		});
		return () => {
			socket.off('gameReady');
		};
	}, [socket]);

	if (loading) {
		return <p>로딩중...</p>;
	} else {
		return (
			<Fragment>
				<h1>A팀</h1>
				<div>참가코드: {data.gameCode}</div>
				<p>참가 대기 중...</p>
			</Fragment>
		);
	}
}
