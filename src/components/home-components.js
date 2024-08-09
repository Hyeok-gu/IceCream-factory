import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Success = styled.span`
  position: fixed;
  font-size: 3em;
  font-weight: 900;
  color: #ffffff;
  top: -200px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 99;
  padding: 12px 24px;
  background-color: #4d3a20;
  border-radius: 14px;
  box-shadow: 0 12px 4px rgba(0, 0, 0, 0.25);
  opacity: 0;
  transition: all 0.1s linear;
  &.active {
    top: 24px;
    opacity: 1;
  }
`;
export const Header = styled.header`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 24px;
`;
export const Logout = styled.button`
  font-size: 16px;
  color: #333;
  background-color: #fff;
  border-radius: 24px;
  padding: 12px 24px;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
  border: 1px solid #eee;
  &:hover {
    background-color: #eee;
  }
`;

export const HeaderTithe = styled.h1`
  margin-top: 30px;
  font-size: 60px;
  font-weight: 900;
  color: #ff3636;
  letter-spacing: -2px;
`;

export const RecipeWrapper = styled.div`
  width: 100%;
  max-width: 454px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 90px;
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
    > div {
      width: 100%;
      max-width: 164px;
      aspect-ratio: 140 /83;
      &.one {
        z-index: 2;
      }
      &.two {
        transform: translateY(-50px);
        z-index: 1;
      }
      &.three {
        transform: translateY(-100px);
        z-index: 0;
      }
      &.strawberry {
        background: url(public/img/ico_icecream_strawberry.svg) no-repeat center /
          cover;
      }
      &.choco {
        background: url(public/img/ico_icecream_choco.svg) no-repeat center /
          cover;
      }
      &.mint {
        background: url(public/img/ico_icecream_mint.svg) no-repeat center /
          cover;
      }
    }
  }
`;
export const Recipe = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const MyRecipe = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  .object {
    > div {
      &.one {
        z-index: 0;
        transform: translateY(-100px);
      }
    }
    &.second {
      > div {
        &.one {
          z-index: 1;
          transform: translateY(-50px);
        }
        &.two {
          transform: translateY(-100px);
          z-index: 0;
        }
      }
    }
    &.third {
      > div {
        &.one {
          transform: translateY(0);
          z-index: 2;
        }
      }
    }
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 470px;
  position: fixed;
  bottom: 44px;
  left: 50%;
  transform: translateX(-50%);
  gap: 20px;
  > div {
    display: flex;
    justify-content: center;
    gap: 10px;
    width: 100%;
  }
  span {
    font-size: 14px;
    color: #333;
    font-weight: 900;
  }
`;

export const Button = styled.button`
  color: #fff;
  border: none;
  width: 100%;
  max-width: 140px;
  aspect-ratio: 140 /83;
  transition: all 0.2s linear;
  cursor: pointer;
  &:hover {
    transform: scale(1.1) translateY(-5px);
  }
  &.strawberry {
    background: url(public/img/ico_icecream_strawberry.svg) no-repeat center /
      cover;
  }
  &.choco {
    background: url(public/img/ico_icecream_choco.svg) no-repeat center / cover;
  }
  &.mint-choco {
    background: url(public/img/ico_icecream_mint.svg) no-repeat center / cover;
  }
`;

export const UserList = styled.div`
  background: #fff;
  border-radius: 36px;
  padding: 36px;
  width: 100%;
  max-width: 316px;
  position: fixed;
  top: 90px;
  left: 24px;
  .first-user {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 40px;
    .title {
      font-size: 20px;
      font-weight: bold;
      color: #444;
    }
    .name {
      display: block;
      margin-top: 18px;
      font-size: 36px;
      font-weight: bold;
      color: #ff3636;
    }
  }
`;

export const OtherUser = styled.div`
  display: flex;
  flex-direction: column;
  .index {
    width: 100%;
    padding-bottom: 6px;
    border-bottom: 1px solid #ccc;
    margin-bottom: 12px;
  }
`;
export const UserTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
  span {
    font-size: 14px;
    color: #333;
  }
`;

export const Loading = styled.div`
  width: 100%;
  height: 100%;
  color: red;
  font-size: 16px;
`;
export const Account = styled.span`
  font-size: 16px;
  display: inline-block;
  font-weight: 900;
  margin-right: 10px;
`;
