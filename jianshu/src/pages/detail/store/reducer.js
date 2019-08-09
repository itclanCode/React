import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
	title: '衡水中学,被外地占用的高考工厂',
	content: '<img src="" /><p>整整十年，《深夜食堂》从一部深夜剧，炼成一个神剧IP，被改编过无数次。</p><p>整整十年，《深夜食堂》从一部深夜剧，炼成一个神剧IP，被改编过无数次。</p><p>整整十年，《深夜食堂》从一部深夜剧，炼成一个神剧IP，被改编过无数次。</p><p>整整十年，《深夜食堂》从一部深夜剧，炼成一个神剧IP，被改编过无数次。</p><p>整整十年，《深夜食堂》从一部深夜剧，炼成一个神剧IP，被改编过无数次。</p>'
});

export default (state = defaultState, action) => {
   switch(action.type) {
   	  default:
   	  	return state;
   }

}