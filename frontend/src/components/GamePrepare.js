import { Fragment, useState } from "react";

export default function GamePrepare() {
  const [counter, setCounter] = useState(1);
  const [ready, setReady] = useState(false);

  const plusHanler = () => {
    setCounter(counter + 1);
  };

  const minusHanler = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  const readyHandler = () => {
    setReady(!ready);
    console.log(ready);
    if (ready) {
      console.log("서버로 준비됨 전송");
      console.log("서버로 인원수 " + counter + " 전송");
    }
  };

  return (
    <Fragment>
      <h1>인원수 설정</h1>
      <button onClick={minusHanler} disabled={ready ? true : false}>
        -
      </button>
      {counter}
      <button onClick={plusHanler} disabled={ready ? true : false}>
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
