import { fromJS } from 'immutable';

const defaultState =  fromJS({
   topicList: [
       {
           id: 1,
           title: '社会热点',
           imgUrl: '//upload.jianshu.io/users/upload_avatars/1835526/83d24e1a-0a0f-43f6-8a1d-289be6101e73.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
       },
       {
           id: 2,
           title: '手绘',
           imgUrl: '//upload.jianshu.io/users/upload_avatars/1835526/83d24e1a-0a0f-43f6-8a1d-289be6101e73.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
       }
   ],
    articleList: [
        {
            id: 1,
            title: "陈道明白发上热搜，好想为他众筹500年",
            desc: "前段时间，素来与“流量”、“热搜”这些流行文化毫无关系的陈道明突然上了热搜，此次登上热搜榜的原因，竟是因为“满头白发”。 原来，作为影协主要负责...",
            imgUrl: "https://upload-images.jianshu.io/upload_images/14936567-600cca4c69274877?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
        }
    ],
    recommendList: [
      {
        id: 1,
        desc: "简书会员",
        imgUrl: "https://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png"
      },
      {
        id: 2,
        desc: "优选连载",
        imgUrl: "https://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png"
      },
      {
        id: 3,
        desc: "简书版权",
        imgUrl: "https://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png"
      },
      {
        id: 4,
        desc: "简书大学堂",
        imgUrl: "https://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png"
      }

    ]
});

export default (state = defaultState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}