import { Fragment, useEffect, useState } from "react";

export default function GamePrepare() {
  const [player, setPlayer] = useState(1);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    //[서버, GET] : 어느 팀인지
    //const team = 서버에서 받은 팀
    if (ready) {
      //[서버, POST] : ready 상태, 인원수
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
      <h2> {/*team*/}팀 입니다. </h2>
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
