import styled from 'styled-components';
import logoPic from '../../static/logo.png';


// 创建HeaderWrapper这样一个组件
export const HeaderWrapper = styled.div `
   z-index: 1;
   position: relative;
   height: 56px;
   border-bottom: 1px solid #f0f0f0;

`;

// export const Logo = styled.a.attrs({
//     href: '/'
// }) `
//     position: absolute;
//     top: 0;
//     left: 0;
//     display: block;
//     width: 100px;
//     height: 56px;
//     background: url(${ logoPic });
//     background-size: contain;

// `;

export const Logo = styled.div `
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100px;
    height: 56px;
    background: url(${ logoPic });
    background-size: contain;

`;

export const Nav = styled.div `
    width: 960px;
    height: 100%;
    margin: 0 auto;
    padding-right: 70px;
    box-sizing: border-box;
`

export const NavItem = styled.div `
    line-height: 56px;
    padding: 0 15px;
    font-size: 17px;
    color: #333;
    &.left {
        float: left;
    }

    &.right {
        float: right;
        color: #969696;
    }

    &.active {
        color: #ea6f5a;
    }

`

export const NavSearch = styled.input.attrs({
    placeholder: "搜索"
})`
    width: 160px;
    height: 38px;
    margin-top: 9px;
    padding: 0 30px 0 20px;
    box-sizing: border-box;
    border: none;
    outline: none;
    border-radius: 19px;
    background: #eee;
    font-size: 14px;
    color: #666;
    margin-left:20px;
    &::placeholder{
        color: #999;
    }

    &.focused {
        width: 240px;
    }

    &.slide-enter {
        transition: all .2s ease-out;
     }
  
     &.slide-enter-active {
          width: 240px;
     }
  
     &.slide-exit {
         transition: all .2s ease-out;
     }
  
     &.slide-exit-active {
        width: 160px;
     }
`

export const Addition = styled.div `
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;

`

export const Button = styled.div `
  float: right;
  margin-top: 9px;
  line-height: 38px;
  border-radius: 19px;
  border: 1px solid #ec6149;
  margin-right: 20px;
  padding: 0 20px;
  font-size: 14px;
  &.reg {
      color: #ec6149;
  }
  &.writting {
      color: #ec6149;
  }
`;

export const SearchInfo = styled.div`
   position: absolute;
   left:0;
   top: 56px;
   width: 240px;
   padding: 0 20px;
   box-shadow: 0 0 8px rgba(0,0,0,0.2);
   background: #fff;
`;

export const SearchInfoTitle = styled.div`
   margin-top: 20px;
   margin-bottom: 15px;
   font-size: 14px;
   color: #969696;
   line-height: 20px;
`;

export const SearchInfoSwitch = styled.span`
    float: right;
    font-size: 13px;
    cursor:pointer;
    .spin {
       font-size: 12px;
       margin-right: 5px;
       transition: all 0.2s ease-in;
       diplay: block;
       float: left;
       transform-origin: center center;
    }
`;

export const SearchInfoItem = styled.a`
    line-height: 20px;
    padding: 0 5px;
    font-size: 12px;
    border: 1px solid #ddd;
    color: #787878;
    border-radius: 3px;
    display: block;
    float: left;
    margin-right: 10px;
    margin-bottom: 20px;
    
`;

export const SearchInfoList = styled.div`
   
`;


export const SearchWrapper = styled.div`
   float: left;
   position: relative;

   .zoom {
      position: absolute;
      right: 10px;
      bottom: 5px;
      width: 30px;
      line-height: 30px;
      border-radius: 15px;
      text-align: center;

      &.focused {
          background: #777;
          color: #fff;
      }
   }
`