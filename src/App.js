import React from "react";
import Menu from "./Menu";
import styled from "styled-components";

export default function App() {
  return (
    <Main className="App">
      <Menu position="left" onClickOther />
      <h1>Menu transition</h1>
      <div>
        <h1>Text</h1>
        <h1>Text</h1>
        <h1>Text</h1>
        <h1>Text</h1>
        <h1>Text</h1>
        <h1>Text</h1>
      </div>
    </Main>
  );
}

const Main = styled.div`
  position: relative;
  transition: width 2s;
  height: 100%;
`;
