import { Fragment, useEffect, useState } from "react";

export default function InGame() {
  const [player, setPlayer] = useState(10); //[서버, GET] : GamePrepare때 전송된 준비인원 받아오기
  const [game, setGame] = useState(true);

  useEffect(() => {
    //[서버, POST] : player, game
    //[서버, POST] : player, game
    console.log(game);
  }, [player, game]);

  const plusHandler = () => {
    setPlayer(player + 1);
  };

  const minusHandler = () => {
    if (player > 0) {
      setPlayer(player - 1);
    }
  };

  const gameHandler = () => {
    let check = window.confirm(
      "아군이 " + player + "명 남았습니다. 게임을 종료하시겠습니까?"
    );
    if (check) {
      setGame(false);
    }
  };

  return (
    <Fragment>
      <h1>게임 진행중</h1>
      <h2> 남은 인원 수</h2>
      <h3 style={{ color: player === 0 ? "red" : "green" }}>
        {" "}
        A: {player /*서버로부터 받은 A팀 인원 수*/}
      </h3>
      <h3 style={{ color: player === 0 ? "red" : "green" }}>
        {" "}
        B: {player /*서버로부터 받은 B팀 인원 수*/}
      </h3>
      <button onClick={minusHandler}>-</button>
      <div style={{ color: player === 0 ? "red" : "green" }}>{player}</div>
      <button onClick={plusHandler}>+</button>
      <button onClick={gameHandler}>게임종료</button>
    </Fragment>
  );
}
