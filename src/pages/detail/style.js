import styled from "styled-components";

export const DetailWrapper = styled.div`
  position: relative;
  padding-top: 10px;
`

export const Post = styled.div `
  margin: 0 auto;
  padding-top: 20px;
  padding-bottom: 40px;
  width: 620px;
  box-sizing: border-box;
`

export const Title = styled.h1`
  word-break: break-word;
  margin: 20px 0 0;
  font-family: -apple-system,SF UI Display,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;
  font-size: 34px;
  font-weight: 700;
  line-height: 1.3;
`

export const Author = styled.div`
  width: 100%;
  height: 48px;
  border: 1px solid #333;
  margin: 30px 0 40px;
  text-align:center;
  line-height: 48px;
  box-sizing:border-box;
`

export const Content = styled.div`
  color: #2f2f2f;
  word-break: break-word;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.7;
  p{
    word-break: break-word;
    margin: 0 0 25px;
    overflow: hidden;
  }
  div.ImgPackage {
    padding-bottom: 25px;
    width: 700px;
    margin-left: -40px;
    text-align: center;
    .img{
      width: 100%;
      max-width: 415px;
      max-height: 1357px;
      background-color: transparent;
      z-index: 100;
      position: relative;
      transition: background-color .1s linear;
      margin: 0 auto;
    }
  }
`