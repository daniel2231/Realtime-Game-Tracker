import { Fragment } from "react";

export default function Guest() {
  const onSubmitHandler = (event) => {
    //참가 버튼 클릭시 실행
    event.preventDefault();
    console.log("참가코드 전송");
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
