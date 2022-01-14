import styled from "styled-components";

export const Container = styled.div`
  margin: 0;
  padding: 0;
  background-color: "pink";
  height: "300px";
  width: 100%;
  display: flex;
`;

export const Pane = styled.div`
  padding: 0;
  margin: 0;
  background-color: ${(props) => props.bgColor};
  flex: ${(props) => props.weight};
`;
