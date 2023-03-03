import { Fragment, useEffect, useState } from "react";

export default function GamePrepare() {
  const [player, setPlayer] = useState(1);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (ready) {
      console.log("서버로 준비 : " + ready + "됨 전송");
      console.log("서버로 인원수 : " + player + " 전송");
      //서버로 데이터 전송해야하는 위치
    }
  }, [ready, player]);

  const plusHandler = () => {
    setPlayer(player + 1);
  };

  const minusHandler = () => {
    if (player > 1) {
      setPlayer(player - 1);
    }
  };

  const readyHandler = () => {
    setReady(!ready);
  };

  return (
    <Fragment>
      <h1>인원수 설정</h1>
      <button onClick={minusHandler} disabled={ready ? true : false}>
        -
      </button>
      {player}
      <button onClick={plusHandler} disabled={ready ? true : false}>
        +
      </button>
      <button
        onClick={readyHandler}
        style={{ color: "white", backgroundColor: ready ? "green" : "red" }}
      >
        {ready ? "준비완료" : "준비중"}
      </button>
    </Fragment>
  );
}
