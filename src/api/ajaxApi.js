// 接口函数
import ajax from './ajax'



const BASE = ''


// 注册的入口函数

export function reqRegister(params){

    return ajax(BASE+'/admin_sign-up.php',
    params,'POST')
}


// 登录的入口函数
export function reqLogin(params){

    return ajax(BASE+'/admin_sign-in.php',
    params,'POST')
}

