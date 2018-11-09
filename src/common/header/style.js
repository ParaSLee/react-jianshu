import styled from "styled-components";

export const HeaderWrapper = styled.div`
  min-width: 768px;
  max-width: 1440px;
  margin: 0 auto;
  height: 58px;
  background: #fff;
  border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.span`
  float: left;
  display: block;
  width: 100px;
  height: 56px;
  padding: 0;
`;

export const Img = styled.img `
  width: 100%;
  height: 100%;
`;

export const Nav = styled.div `
  height: 58px;
  margin-right: auto;
  margin-left: auto;
  padding-left: 15px;
  padding-right: 15px;
  @media (min-width: 768px) {
    width: 750px;
  }
  @media (min-width: 992px) {
    width: 960px;
  }
  @media (min-width: 1081px) {
    width: 960px;
  }
`;

const BtnItem = styled.span`
  &.left {
    float: left
  }
  &.right {
    float: right
  }
  &:hover {
    color: #8c8c8c;
    text-decoration: none;
  }
  box-sizing: border-box;
  display: inline-block;
  margin-bottom: 0;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  background-image: none;
  border: 1px solid transparent;
  white-space: nowrap;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857;
  border-radius: 4px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const WriteBtn = styled(BtnItem)`
  &:hover {
    color: #fff;
    background-color: #ec6149;
  }
  width: 100px;
  height: 40px;
  line-height: 24px;
  margin: 8px 15px 0;
  border-radius: 20px;
  font-size: 15px;
  color: #fff;
  background-color: #ea6f5a;
`
export const RegBtn = styled(BtnItem)`
  &:hover {
    color: #ec6149;
    border-color: #ec6149;
    background-color: rgba(236,97,73,.05);
  }
  width: 80px;
  height: 38px;
  line-height: 24px;
  margin: 9px 5px 0 15px;
  border: 1px solid rgba(236,97,73,.7);
  border-radius: 20px;
  font-size: 15px;
  color: #ea6f5a;
  background-color: transparent;
`

export const LogBtn = styled(BtnItem)`
  &:hover {
    color: #969696;
  }
  &.mode {
    margin: 10px 0 0 0;
  }
  i{
    font-size: 17px;
  }
  color: #969696;
  margin: 11px 6px 0 10px;
  font-size: 15px;
`
export const NavItem = styled(BtnItem)`
  &:hover {
    background-color: #f5f5f5;
    color: #333;
  }
  &.active {
    color: #ea6f5a;
    background: none;
  }
  &.active:hover {
    color: #ea6f5a;
    background: none;
  }
  height: 56px;
  line-height: 26px;
  padding: 13px;
  margin-right: 10px;
  font-size: 17px;
  box-sizing: border-box;
`

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
}) `
  padding-left: 15px;
  margin-right: 10px;
  padding: 0 40px 0 20px;
  width: 160px;
  height: 38px;
  font-size: 14px;
  border: 1px solid #eee;
  border-radius: 40px;
  outline: 0;
  background: #eee;
  box-sizing: border-box;
  &.focused {
    width: 240px;
  }
  &.slide-enter {
    transition: width .3s ease-out;
  }
  &.slide-enter-active {
    width: 240px;
  }
  &.slide-exit {
    transition: width .3s ease-out;
  }
  &.slide-exit-active {
    width: 160px;
  }
`

export const SearchBox = styled.div `
  float: left;
  position: relative;
  margin-top: 9px;
  box-sizing: border-box;
  i{
    position: absolute;
    top: 4px;
    right: 15px;
    width: 30px;
    height: 30px;
    line-height: 30px;
    padding: 0;
    color: #969696;
    border-radius: 50%;
    text-align: center;
    font-size: 19px;
    cursor: pointer;
    &.focused {
      background-color: #969696;
      color: #fff;
    }
  }
`

export const SearchInfo = styled.div `
  position: absolute;
  background-color: #fff;
  box-shadow: 0 0 8px rgba(0,0,0,.2);
  margin-top: 8px;
  width: 250px;
  /* height: 56px; */
  /* left: 0; */
  /* top: 100%; */
  border-radius: 4px;
  padding: 20px 20px 10px;
  border-bottom: 1px solid #f0f0f0;
  box-sizing: border-box;
  /* z-index: 1; */
  &::before {
    content: "";
    left: 27px;
    width: 10px;
    height: 10px;
    transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    top: -5px;
    z-index: -1;
    position: absolute;
    background-color: #fff;
    box-shadow: 0 0 15px rgba(0,0,0,.2);
  }
  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border: 12px solid transparent;
    border-bottom-color: #fff;
    left: 20px;
    bottom: 99%;
  }
`

export const SearchInfoTitleBox = styled.div `
  height: 20px;
  margin-bottom: 10px;
`

export const SearchInfoTitle = styled.span `
  float: left;
  font-size: 14px;
  color: #969696;
`
export const SearchInfoSwitch = styled.a `
  float: right;
  font-size: 13px;
  color: #969696;
  background-color: transparent;
  border-width: 0;
  padding: 0;
  cursor: pointer;
  .searchI {
    display:block;
    right: 57px;
    top: 13px;
    font-size: 15px;
    transition: all .2s ease-in;
    transform: rotate(0deg);
    transform-origin: center;

  }
`

export const SearchInfoItem = styled.a `
  display: inline-block;
  padding: 2px 6px;
  margin-bottom: 10px;
  margin-right: 10px;
  font-size: 12px;
  color: #787878;
  border: 1px solid #ddd;
  border-radius: 3px;
  cursor: pointer;
  background-color: transparent;
  &:hover {
    color: #333;
    border-color: #b4b4b4;
  }
`