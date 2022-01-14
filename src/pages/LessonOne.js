import LeftHandComponent from "../components/LeftHandComponent";
import RightHandComponent from "../components/RightHandComponent";
import SplitScreen from "../components/SplitScreen";

function LessonOne() {
  return (
    <SplitScreen
      leftWeight={1}
      rightWeight={1}
      left={LeftHandComponent}
      right={RightHandComponent}
      bgColorLeft="green"
      bgColorRight="purple"
    />
  );
}

export default LessonOne;
