import styled from 'styled-components';

export const LoginWrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  padding-top: 60px;
  min-height: 750px;
  text-align: center;
  font-size: 14px;
  box-sizing: border-box;
  background-color: #f1f1f1;
  z-index: -1;
`
export const LoginMain = styled.div `
  width: 400px;
  margin: 60px auto 0;
  padding: 50px 50px 30px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(0,0,0,.1);
  vertical-align: middle;
  display: inline-block;
`

export const Title = styled.div `
  margin: 0 auto 50px;
  padding: 10px;
  font-weight: 400;
  color: #969696;
`

export const Input = styled.input `
	display: block;
	width: 200px;
	height: 30px;
	line-height: 30px;
	padding: 0 10px;
	margin: 10px auto;
	color: #777;
`;

export const Button = styled.div `
	width: 220px;
	height: 30px;
	line-height: 30px;
	color: #fff;
	background: #3194d0;
	border-radius: 15px;
	margin: 10px auto;
	text-align: center;
`;