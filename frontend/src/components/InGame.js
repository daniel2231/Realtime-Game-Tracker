import { Fragment, useEffect, useState } from "react";

export default function InGame() {
  const [player, setPlayer] = useState(1);
  const [game, setGame] = useState(true);

  useEffect(() => {
    //[서버, post] : player, game
  }, [player, game]);

  const plusHandler = () => {
    setPlayer(player + 1);
  };

  const minusHandler = () => {
    if (player > 1) {
      setPlayer(player - 1);
    }
  };

  const gameHandler = () => {
    setGame(false);
  };

  return (
    <Fragment>
      <h1>게임 진행중</h1>
      <h2> 남은 인원 수</h2>
      <h3> A: {player}</h3>
      <h3> B: {player}</h3>
      <button onClick={minusHandler}>-</button>
      <div>{player}</div>
      <button onClick={plusHandler}>+</button>
      <button onClick={gameHandler}>게임종료</button>
    </Fragment>
  );
}
