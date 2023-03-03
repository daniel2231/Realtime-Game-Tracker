import { useEffect } from "react";
import { Fragment } from "react";

export default function Host() {
  const num = Math.floor(Math.random() * (9999 - 0) + 1);
  console.log(num);
  useEffect(() => {}, []);
  return (
    <Fragment>
      <h1>A팀</h1>
      <div>참가코드: {num}</div>
      <p>참가 대기 중...</p>
    </Fragment>
  );
}
