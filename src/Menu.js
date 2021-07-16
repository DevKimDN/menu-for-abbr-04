import React, { useState, useEffect, useRef } from "react";
import "./styles.css";
import styled from "styled-components";

export default function Menu({ position, status, onClickOther }) {
  const [opened, setOpened] = useState(false);
  const contentRef = useRef(null);
  const label = opened ? "Chiudi" : "Apri";

  useEffect(() => {
    if (status) {
      status(opened);
    }
  }, [opened]);

  const toggleMenu = () => {
    setOpened(!opened);
  };

  const overlay = (e) => {
    if (e.target === contentRef.current) {
      setOpened(false);
    }
  };
  const handleClickOnOverlay = onClickOther ? overlay : () => {};

  const renderMenu = (position, opened) => {
    switch (position) {
      case "top":
        return (
          <Orizzontal className={opened && "active"}>
            <button className={opened ? "active" : ""} onClick={toggleMenu}>
              {label}
            </button>
            <OrizzontalContent>
              <p onClick={toggleMenu}>primo</p>
              <p onClick={toggleMenu}>primo</p>
              <p onClick={toggleMenu}>primo</p>
              <p onClick={toggleMenu}>primo</p>
            </OrizzontalContent>
          </Orizzontal>
        );
      case "left":
        return (
          <Vertical position={position} className={opened && "active"}>
            <button className={opened ? "active" : ""} onClick={toggleMenu}>
              {label}
            </button>
            <VerticalContent>
              <p onClick={toggleMenu}>primo</p>
              <p onClick={toggleMenu}>primo</p>
              <p onClick={toggleMenu}>primo</p>
              <p onClick={toggleMenu}>primo</p>
            </VerticalContent>
          </Vertical>
        );
      case "right":
        return (
          <Vertical position={position} className={opened && "active"}>
            <button className={opened ? "active" : ""} onClick={toggleMenu}>
              {label}
            </button>
            <VerticalContent>
              <p onClick={toggleMenu}>primo</p>
              <p onClick={toggleMenu}>primo</p>
              <p onClick={toggleMenu}>primo</p>
              <p onClick={toggleMenu}>primo</p>
            </VerticalContent>
          </Vertical>
        );
      default:
        break;
    }
  };

  return (
    <Wrapper ref={contentRef} onClick={handleClickOnOverlay}>
      <button className={opened ? "active" : ""} onClick={toggleMenu}>
        {label}
      </button>
      {renderMenu(position, opened)}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
const Vertical = styled.div`
  top: 0;
  ${(props) => `${props.position}: -250px`};
  width: 250px;
  height: 100%;
  position: fixed;
  background: red;
  opacity: 0;
  transition: all 1s;
  &.active {
    opacity: 1;
    transform: ${(props) =>
      (props.position === "right" && `translateX(-250px)`) ||
      (props.position === "left" && `translateX(250px)`)};
  }
`;
const Orizzontal = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  top: -50px;
  left: 0;
  opacity: 0;
  background: green;
  transition: all 1s;
  &.active {
    opacity: 1;
    transform: translateY(50px);
  }
`;
const VerticalContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const OrizzontalContent = styled.div`
  display: flex;
  align-items: center;
  & > p {
    margin-right: 10px;
  }
`;
