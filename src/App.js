import { Fragment } from "react";
import LessonOne from "./pages/LessonOne";
import LessonTwo from "./pages/LessonTwo";

import "./styles.css";

export default function App() {
  return (
    <Fragment>
      <LessonOne />
      <LessonTwo />
    </Fragment>
  );
}
