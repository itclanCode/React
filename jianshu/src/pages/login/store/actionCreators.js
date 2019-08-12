import axios from 'axios';
import * as constants from './constants';

const changeLogin = () => ({
    type: constants.CHANGE_LOGIN,
    value: true

})

export const logout = () => ({
    type: constants.LOGOUT,
    value: false
})

export const login = (account, password) => {
    return (dispatch) => {
        axios.get('/api/login.json?account='+ account + '&passwrod'+ password).then((res) => {
            console.log(res);
            const result = res.data.data;
            console.log(result);
            if(result) {
                dispatch(changeLogin());
            }else {
                alert('登录失败');
            }
        });
    }
}