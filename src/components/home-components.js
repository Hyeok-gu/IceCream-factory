import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Success = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  opacity: 0;
  transition: all 0.1s linear;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 24px;
  .first,
  .second {
    position: absolute;
    width: 65%;
    height: 100vh;
    top: -100%;
    left: 50%;
    transform: translateX(-50%);
    background-color: #ffba00;
    transition: all 0.2s;
  }
  .second {
    width: 100%;
    background-color: #ffde53;
    transition-delay: 0.3s;
  }
  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    z-index: 13;
    opacity: 0;
    transition: all 0.1s linear 1s;
  }
  @media all and (max-width: 1400px) {
    font-size: 1.6em;
  }
  span {
    font-size: 30px;
    font-weight: 900;
    color: #333;
    opacity: 0;
    transition: all 0.1s linear 1s;
    transform: translateY(-20px) scale(1);
    z-index: 12;
  }
  &.active {
    opacity: 1;
    z-index: 11;
    img,
    span {
      opacity: 1;
      transform: translateY(0) scale(1.2);
    }

    .first,
    .second {
      top: 0;
    }
  }
`;

// 헤더 영역
export const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0 30px;
  margin-top: 30px;
  padding-bottom: 20px;
  @media all and (max-width: 1024px) {
    padding: 0 16px;
    margin-top: 20px;
    align-items: center;
  }
`;

export const ProfileWrapper = styled.div`
  width: 100%;
  max-width: 370px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  cursor: pointer;
`;

export const ProfileImg = styled.div`
  width: 80px;
  min-width: 80px;
  aspect-ratio: 1 / 1;
  border-radius: 22px;
  border: 7px solid #1f0c1f;
  background-color: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  z-index: 1;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media all and (max-width: 1024px) {
    width: 60px;
    min-width: 60px;
    border-radius: 16px;
    border: 7px solid #1f0c1f;
  }
`;

export const ProfileInfo = styled.div`
  height: 66px;
  border-radius: 0 9px 9px 0;
  background-color: #2c211b;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 13px 20px 21px;
  transform: translateX(-7px);
  .textWrap {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2px;
    span {
      font-size: 16px;
      color: #fff;
      font-weight: 900;
      text-shadow: -1px 0px #050000, 0px 1px #050000, 1px 0px #050000,
        0px -1px #050000;
    }
  }
  @media all and (max-width: 1024px) {
    height: 46px;
    padding: 0 11px 0 14px;
    span {
      font-size: 14px;
    }
  }
`;

export const Logout = styled.button`
  border: none;
  background: none;
  padding: 0;
  margin-left: 20px;
  cursor: pointer;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.1s linear;
  &:hover {
    transform: translateX(5px);
  }
`;

export const HallFame = styled.div`
  width: 100%;
  max-width: 370px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  .title {
    width: 100%;
    max-width: 130px;
    height: 38px;
    background-color: #f11532;
    border: 3px solid #b70000;
    border-radius: 5px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 3px #b70000;
    margin-bottom: 46px;
    @media all and (max-width: 1024px) {
      margin-bottom: 26px;
    }
    span {
      color: #fff;
      font-weight: 900;
      font-size: 16px;
    }
    &::after,
    &::before {
      content: "";
      width: 8px;
      height: 8px;
      background-color: #fff;
      border-radius: 50%;
      border: 1px solid #b70000;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
    &::after {
      left: 9px;
    }
    &::before {
      right: 9px;
    }
  }
  @media all and (max-width: 1024px) {
    position: absolute;
    left: 50%;
    top: 93px;
    transform: translateX(-50%);
  }
`;

export const RankingWrap = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  width: 100%;
`;

export const RankingItem = styled.div`
  width: 100%;
  max-width: 114px;
  background-color: #2c211b;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  align-items: center;
  gap: 7px;
  padding: 26px 0 16px;
  position: relative;
  &::after {
    content: "";
    width: 28px;
    height: 30px;
    display: block;
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
  }
  span {
    color: #fff;
    font-size: 20px;
    font-weight: 900;
  }
  &.first {
    outline: 3px solid #fff4e1;
    border: 3px solid #ffb300;
    background-color: #ffce5b;
    order: 1;
    box-shadow: 0 2px 12px #ff3d00;
    &::after {
      background: url(/img/ico_1st_badge.svg) no-repeat center / contain;
      top: -4px;
    }
    span {
      color: #392b20;
    }
  }
  &.second {
    order: 0;
    transform: translateY(20px);
    &::after {
      background: url(/img/ico_2nd_badge.svg) no-repeat center / contain;
      top: 0;
    }
  }
  &.third {
    order: 2;
    transform: translateY(20px);
    &::after {
      background: url(/img/ico_3rd_badge.svg) no-repeat center / contain;
      top: 0;
    }
  }
`;

export const RankListBtn = styled.div`
  width: 100%;
  max-width: 370px;
  display: flex;
  padding-top: 20px;
  justify-content: flex-end;
  button {
    width: 44px;
    height: 44px;
    border: 3px solid #211208;
    border-radius: 9px;
    background-color: #3b2e26;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    cursor: pointer;
    transition: all 0.1s linear;
    &:hover {
      transform: translateY(-5px);
    }
  }
  @media all and (max-width: 1024px) {
    width: auto;
    max-width: unset;
    padding-top: 0;
  }
`;

// 헤더 영역 끝

export const RecipeWrapper = styled.div`
  width: 100%;
  max-width: 454px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 90px;
  gap: 16px;
  @media all and (max-width: 1400px) {
    max-width: 360px;
    margin-top: 12px;
    padding: 0 16px;
  }
  .title {
    font-size: 14px;
    color: #333;
    font-weight: 900;
  }
  .object {
    padding-top: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
  }
`;

export const Recipe = styled.div`
  width: 100%;
  max-width: 196px;
  height: 268px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #cbbf93;
  background-color: #fff;
  border-radius: 22px;
  box-shadow: 0 9px #cbbf93;
  padding: 20px 44px;
  @media all and (max-width: 1400px) {
    padding: 20px 26px;
  }
  .title {
    color: #444;
    font-size: 14px;
    margin-bottom: 12px;
  }
`;

export const IcecreamBox = styled.div`
  width: 100%;
  height: 198px;
  position: relative;
  > div {
    position: absolute;
  }
  .one {
    bottom: 0;
    z-index: 0;
  }
  .two {
    bottom: 28px;
    z-index: 1;
  }
  .three {
    bottom: 56px;
    z-index: 2;
  }
  .four {
    bottom: 84px;
    z-index: 3;
  }
  .five {
    bottom: 112px;
    z-index: 4;
  }
  .six {
    bottom: 140px;
    z-index: 5;
  }
`;

export const MyRecipe = styled(Recipe)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  .object {
    > div {
      bottom: 0;
      width: 100%;
      height: 100%;
      > div {
        position: absolute;
        &.one {
          bottom: 0;
        }
      }
    }
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  max-width: 392px;
  position: fixed;
  bottom: 44px;
  left: 50%;
  transform: translateX(-50%);
  gap: 20px;
  padding: 0 16px;
  z-index: 10;
  @media all and (max-width: 1024px) {
    bottom: 30px;
  }
  .buttons {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    width: 100%;
  }
  span {
    font-size: 14px;
    color: #333;
    font-weight: 900;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-name: slide;
    animation-direction: alternate;
    @media all and (max-width: 1024px) {
      display: none;
    }
    @keyframes slide {
      from {
        transform: translateY(0);
      }

      to {
        transform: translateY(5px);
      }
    }
  }
`;

export const IcecreamItem = styled.div`
  width: 100%;
  max-width: 164px;
  aspect-ratio: 140 /83;
  &.strawberry {
    background: url(/img/ico_icecream_strawberry.svg) no-repeat center / cover;
  }
  &.choco {
    background: url(/img/ico_icecream_choco.svg) no-repeat center / cover;
  }
  &.mint {
    background: url(/img/ico_icecream_mint.svg) no-repeat center / cover;
  }
  &.vanilla {
    background: url(/img/ico_icecream_vanilla.svg) no-repeat center / cover;
  }
  &.blueberry {
    background: url(/img/ico_icecream_blueberry.svg) no-repeat center / cover;
  }
  &.greentea {
    background: url(/img/ico_icecream_greentea.svg) no-repeat center / cover;
  }
  &.active {
    animation-duration: 200ms;
    animation-name: wiggle;
  }
  &.wiggle {
    animation-duration: 1s;
    animation-name: wiggle;
    animation-iteration-count: infinite;
  }
  @keyframes wiggle {
    from {
      transform: scaleX(1) scaleY(1);
    }
    50% {
      transform: scaleX(0.9) scaleY(1.1);
    }
    to {
      transform: scaleX(1) scaleY(1);
    }
  }
`;

export const Button = styled.button`
  color: #fff;
  border: none;
  width: 100%;
  padding: 0;
  max-width: 112px;
  aspect-ratio: 112 / 96;
  transition: all 0.2s linear;
  cursor: pointer;
  &:hover {
    transform: scale(1.1) translateY(-5px);
  }
  @media all and (max-width: 1024px) {
    &:hover {
      transform: unset;
    }
  }
  &.strawberry {
    background: url(/img/button_strawberry.svg) no-repeat center / contain;
  }
  &.choco {
    background: url(/img/button_choco.svg) no-repeat center / cover;
  }
  &.mint {
    background: url(/img/button_mint.svg) no-repeat center / cover;
  }
  &.vanilla {
    background: url(/img/button_vanilla.svg) no-repeat center / cover;
  }
  &.blueberry {
    background: url(/img/button_blueberry.svg) no-repeat center / cover;
  }
  &.greentea {
    background: url(/img/button_greentea.svg) no-repeat center / cover;
  }
`;

export const UserList = styled.div`
  background: #fff5db;
  border-radius: 44px;
  padding: 24px;
  width: 100%;
  max-width: 396px;
  position: fixed;
  top: 90px;
  left: 60px;
  border: 2px solid #a87b00;
  box-shadow: 0px 17px #cbbf93;
  .title {
    font-size: 18px;
    color: #444;
    font-weight: 900;
    text-align: center;
    margin-bottom: 24px;
  }

  @media all and (max-width: 1400px) {
    position: static;
    padding: 0;
    border: none;
    box-shadow: none;
    background-color: unset;
    max-width: unset;
    padding: 0 16px;
    max-width: 392px;
  }
`;

export const ScrollWrapper = styled.div`
  width: 100%;
  overflow-y: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 17px 10px;
  padding-bottom: 20px;
  max-height: 700px;
  @media all and (max-width: 1400px) {
    display: flex;
    flex-direction: column;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;
export const UserTag = styled.div`
  width: 100px;
  height: 120px;
  min-width: 100px;
  min-height: 120px;
  border-radius: 10px;
  border: 1px solid #edddcc;
  background-color: #fff3e6;
  display: flex;
  flex-direction: column;
  padding: 0 14px;
  box-shadow: 0px 7px #e2d2c0;
  @media all and (max-width: 1400px) {
    width: 100%;
    height: 38px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    min-width: unset;
    min-height: unset;
    box-shadow: 0px 3px #e2d2c0;
  }
  &.first {
    border-color: #e0a400;
    background-color: #ffd972;
    box-shadow: 0px 7px #e2b641;
    .wrap {
      border-color: #ffeab2;
    }
  }
  &.second {
    border-color: #bebebe;
    background-color: #ebebeb;
    box-shadow: 0px 7px #a2a2a2;
    .wrap {
      border-color: #d8d8d8;
    }
  }
  &.third {
    border-color: #d0ad89;
    background-color: #eacaa9;
    box-shadow: 0px 7px #be9a76;
    .wrap {
      border-color: #d0b99d;
    }
  }
  .wrap {
    margin-top: 12px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 6px;
    border-bottom: 1px solid #edd7bf;
    padding-bottom: 14px;
    @media all and (max-width: 1400px) {
      margin-top: 0;
      gap: 12px;
      flex-direction: row;
      align-items: center;
      padding-bottom: 0;
    }
    .index {
      text-shadow: -1px 0px #444, 0px 1px #444, 1px 0px #444, 0px -1px #444;
      font-size: 18px;
      font-weight: 900;
      color: #ffffff;
    }
    .name {
      display: block;
      width: 100%;
      text-align: center;
      color: #444;
      font-weight: 900;
      font-size: 16px;
    }
  }
  .score {
    display: block;
    text-align: center;
    color: #444;
    font-weight: 900;
    font-size: 30px;
    margin-top: 11px;
    @media all and (max-width: 1400px) {
      margin-top: 0;
      font-size: 24px;
    }
  }
`;

export const Loading = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100px;
  color: 333;
  font-size: 16px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Bg = styled.div`
  width: 100%;
  height: 130px;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: -1;
  border-top: 2px solid #415615;
  background-color: #728e36;
  &::before {
    content: "";
    width: 100%;
    height: 12px;
    background-color: #adb337;
    position: absolute;
  }
  &::after {
    content: "";
    width: 100%;
    height: 24px;
    top: 12px;
    background-color: #819f25;
    position: absolute;
  }
  @media all and (max-width: 1024px) {
    height: 98px;
  }
`;
