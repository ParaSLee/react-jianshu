import styled from "styled-components";

export const HomeWrapper = styled.div`
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
`

export const HomeLeft = styled.div`
  float: left;
  padding-right: 0;
  margin-top: 30px;
  width: 66.66667%;
  border-radius: 6px;
  overflow: hidden;
  .banner-img {
    width: 100%;
    height: 270px;
    margin-bottom:35px;
  }
  .split-line {
    margin: -5px 0 15px;
    border-top: 1px solid #f0f0f0;
  }
`

export const HomeRight = styled.div `
  float: left;
  padding: 30px 0 0;
  margin-left: 4.16667%;
  width: 29.16667%;
`

export const TopicWrapper = styled.div `
  margin-bottom: 20px;
  .topicMore{
    display: inline-block;
    margin-top: 7px;
    font-size: 14px;
    color: #787878;
    cursor: pointer;
  }
`

export const TopicItem = styled.div `
  display: inline-block;
  margin: 0 18px 18px 0;
  min-height: 32px;
  background-color: #f7f7f7;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  vertical-align: top;
  overflow: hidden;
  box-sizing: border-box;
  cursor: pointer;
  img{
    width: 32px;
    height: 32px;
    vertical-align: middle;
  }
  span{
    display: inline-block;
    padding: 0 11px 0 6px;
    font-size: 14px;
  }
`

export const ListItem = styled.div `
  position: relative;
  width: 100%;
  margin: 0 0 15px;
  padding: 15px 2px 20px 0;
  border-bottom: 1px solid #f0f0f0;
  line-height: 20px;
  word-wrap: break-word;
  img {
    position: absolute;
    top: 50%;
    margin-top: -60px;
    right: 0;
    width: 125px;
    height: 100px;
    cursor: pointer;
  }
`

export const ListInfo = styled.div `
  padding-right: 140px;
  h3 {
    margin: -7px 0 4px;
    display: inherit;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.5;
    color: #333;
    cursor: pointer;
  }
  h3:hover {
    text-decoration:underline
  }
  p {
    margin: 0 0 8px;
    font-size: 13px;
    line-height: 24px;
    color: #999;
  }
`

export const ListMeta = styled.div`
  padding-right: 0!important;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  box-sizing: border-box;
`

export const RecommendWrapper = styled.div`
  margin-top: -4px;
  padding-bottom: 4px;
  min-height: 228px;
`

export const RecommendItem = styled.div `
  cursor: pointer;
  img{
    width: 100%;
    min-height: 50px;
    margin-bottom: 6px;
    border-radius: 4px;
  }
`

export const WriterWrapper = styled.div`
  width: 100%;
  height: 295px;
  border: 1px solid #333;
  box-sizing: border-box;
`

export const WriterItem = styled.div `
  text-align: center;
  line-height: 295px;
  font-size: 25px;
`

export const LoadMore = styled.div `
  width: 100%;
  height: 40px;
  margin: 30px auto 60px;
  padding: 10px 15px;
  text-align: center;
  font-size: 15px;
  border-radius: 20px;
  background-color: #a5a5a5;
  box-sizing:border-box;
  color: #fff;
  cursor: pointer;
`
export const BackTop = styled.div `
  position: fixed;
  width: 50px;
  height: 50px;
  bottom: 40px;
  right: 40px;
  border: 1px solid #dcdcdc;
  color: #333;
  background-color: #fff;
  line-height: 50px;
  font-size: 20px;
  transition: .1s ease-in;
  z-index: 1040;
  text-align: center;
  cursor: pointer;
`