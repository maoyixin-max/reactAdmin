import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'

// 引入用户名
import  storeUtils  from '../../utils/storeUtils'

class admin extends Component {
    render() {
        // 如果没有就表示没有登录
        const user = storeUtils.user.account
        if(!user){
            // 自动跳转到登录界面
            return <Redirect to='/login'/>
        }
        return (
            <div>
                hello{user}
            </div>
        );
    }
}

export default admin;