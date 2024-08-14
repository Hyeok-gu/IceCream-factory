import styled from "styled-components";

export const Splash = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: all 200ms;
  opacity: 1;
  &.hidden {
    opacity: 0;
  }
  h1 {
    position: fixed;
    z-index: 99;
    text-align: center;
    color: #fff;
    font-size: 100px;
    font-weight: 900;
    letter-spacing: -1.5px;
    line-height: 90px;
    text-shadow: 0 6px 4px rgba(0, 0, 0, 0.16);
    transform: rotate(-10deg);
    top: 2em;
    opacity: 0;
    animation: combined 200ms cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
    animation-fill-mode: forwards;
    animation-delay: 500ms;
    @media all and (max-width: 620px) {
      font-size: 70px;
      line-height: 60px;
    }
    @keyframes combined {
      0% {
        opacity: 0;
        transform: rotate(-10deg) scale(2);
      }
      50% {
        opacity: 1;
      }
      100% {
        opacity: 1;
        transform: rotate(-10deg) scale(1);
      }
    }
  }
  .first {
    width: 70%;
    height: 100%;
    background-color: #ffde53;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    animation-name: slide;
    animation-duration: 200ms;
    animation-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
    @media all and (max-width: 728px) {
      width: 80%;
    }
    @keyframes slide {
      from {
        top: -100%;
      }
      to {
        top: 0;
      }
    }
  }
  .second {
    width: 40%;
    height: 100%;
    background-color: #ffba00;
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    animation-name: slide2nd;
    animation-duration: 200ms;
    animation-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
    @media all and (max-width: 728px) {
      width: 60%;
    }
    @keyframes slide2nd {
      from {
        top: 100%;
      }
      to {
        top: 0;
      }
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding: 0 16px;
`;

export const Box = styled.div`
  margin-top: 8em;
  width: 100%;
  max-width: 480px;
  background-color: #fff;
  border-radius: 40px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.16);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 48px 24px;
  opacity: 0;
  transition: all 200ms linear;
  &.action {
    opacity: 1;
  }
`;
export const Form = styled.form`
  width: 100%;
  max-width: 420px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Header = styled.p`
  font-size: 40px;
  font-weight: 900;
  color: #ff3636;
  letter-spacing: -2px;
  margin-bottom: 120px;
`;

export const Title = styled.h1`
  font-size: 24px;
  color: #333;
`;

export const Input = styled.input`
  height: 40px;
  padding: 0 16px;
  border-radius: 16px;
  border: 1px solid #ccc;
  &.createBtn {
    border: none;
    background-color: #ff3636;
    color: #fff;
    border-radius: 24px;
    cursor: pointer;
    transition: all 0.1s linear;
    font-size: 14px;
    font-weight: 900;
  }
  &.createBtn:hover {
    background-color: #f61f1f;
  }
`;

export const Error = styled.span`
  margin-top: 6px;
  font-weight: 600;
  color: tomato;
`;

export const Switcher = styled.span`
  margin-top: 20px;
  font-size: 12px;
`;
