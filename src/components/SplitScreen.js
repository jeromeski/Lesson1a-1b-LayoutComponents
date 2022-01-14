import React, { Fragment, useEffect, useState } from "react";
import { Container, Pane } from "./splitScreen.styled";

const SplitScreen = ({
  left: Left,
  right: Right,
  leftWeight = 0,
  rightWeight = 0,
  children,
  bgColorLeft = "red",
  bgColorRight = "blue"
}) => {
  const [components, setComponents] = useState([]);

  const [leftComponent, rightComponent] = components;
  console.log(components);
  console.log(
    `Left Component :${leftComponent}, Right Component :${rightComponent}`
  );
  console.log(Left, Right);

  useEffect(() => {
    if (children) {
      setComponents(children);
    }
  }, [children]);

  return (
    <Container>
      {!children ? (
        <Fragment>
          <Pane weight={leftWeight} bgColor={bgColorLeft}>
            <Left name="left" />
          </Pane>
          <Pane weight={rightWeight} bgColor={bgColorRight}>
            <Right name="right" />
          </Pane>
        </Fragment>
      ) : (
        <Fragment>
          <Pane weight={leftWeight} bgColor={bgColorLeft}>
            {leftComponent}
          </Pane>
          <Pane weight={rightWeight} bgColor={bgColorRight}>
            {rightComponent}
          </Pane>
        </Fragment>
      )}
    </Container>
  );
};

export default SplitScreen;
