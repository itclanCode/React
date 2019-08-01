import styled from 'styled-components';

export const HomeWrapper = styled.div`
    width: 960px;
    margin: 0 auto;
    display: flex;
    display: -webkit-flex;
    
    .banner-img {
      width: 625px;
      height: 270px;
    }
`;

export const HomeLeft = styled.div`
    width: 625px;
    height: 300px;
    padding-top: 30px;
`;

export const HomeRight = styled.div`
   width: 240px;
`;

export const TopicWrapper = styled.div`
   padding: 20px 0 10px 0;
   overflow:hidden;
   margin-left: -18px;
   border-bottom: 1px solid #dcdcdc;

`;

export const TopicItem = styled.div`
    float: left;
    background: #f7f7f7;
    height: 32px;
    margin-right: 18px;
    line-height: 32px;
    font-size: 14px;
    color: #000;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    padding-right: 10px;
    margin-bottom: 18px;
    
    .topic-pic{
       width: 32px;
       height: 32px;
       display: block; 
       margin-right: 10px;
       float:left;
    }
`;

export const ListItem = styled.div`
   overflow: hidden;
   padding: 20px 0;
   border-bottom: 1px solid #dcdcdc;
   
   .pic {
     width: 125px;
     height: 100px;
     float: right;
     display: block;
     border-radius: 10px;
     
   }
`;

export const ListInfo =  styled.div`
  width: 500px;
  float: left;
  
  .title{
    line-height: 24px;
    color: #333;
    font-size: 18px;
    font-weight: bold;
  }
  
  .desc {
    font-size: 13px;
    line-height: 24px;
    color: #999;
  }
`;