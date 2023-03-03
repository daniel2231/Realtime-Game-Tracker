import React, { Fragment } from "react";

export default function Guest() {
  const onSubmitHandler = (event) => {
    //참가 버튼 클릭시 실행
    event.preventDefault();
    console.log(event.target[0].value);
    fetch("http://localhost:8000/game/join", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        gameCode: event.target[0].value,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
      });
  };
  return (
    <Fragment>
      <h1>B팀</h1>
      <form onSubmit={onSubmitHandler}>
        <input type="number" />
        <button>참가</button>
      </form>
    </Fragment>
  );
}
