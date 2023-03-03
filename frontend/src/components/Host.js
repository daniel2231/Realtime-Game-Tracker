<<<<<<< Updated upstream
import React, { Fragment, useEffect, useState } from 'react';

export default function Host() {
	const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);


	useEffect(() => {
		fetch('http://localhost:8000/game/init', {
			method: 'POST',
		})
			.then((response) => response.json())
			.then((response) => {
				setData(response);
				setLoading(false);
			});
	}, []);

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
=======
import { Fragment } from "react";

export default function Host() {
  const num = Math.floor(Math.random() * (9999 - 0) + 1); //임시!! 0~9999 숫자 랜덤 생성
  return (
    <Fragment>
      <h1>A팀</h1>
      <div>참가코드: {num}</div>
      <p>참가 대기 중...</p>
    </Fragment>
  );
>>>>>>> Stashed changes
}
