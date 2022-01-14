import SplitScreen from "../components/SplitScreen";
import LeftHandComponent from "../components/LeftHandComponent";
import RightHandComponent from "../components/RightHandComponent";

function LessonTwo() {
  return (
    <SplitScreen lefWeight={1} rightWeight={3}>
      <LeftHandComponent name="Left" />
      <RightHandComponent name="Right" />
    </SplitScreen>
  );
}

export default LessonTwo;
