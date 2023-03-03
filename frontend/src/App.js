import { Link } from "react-router-dom";
import { Fragment } from "react";

export default function App() {
  return (
    <Fragment>
      <h1>Airsoft Game Manager</h1>
      <Link to="/host">게임 생성</Link>
      <Link to="/guest">게임 참가</Link>
    </Fragment>
  );
}
