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


// 获取商品的入口函数
export function goods(params){

    return ajax(BASE+'/goods-manage-dzIwMDEtZ3JvdXA1/goods-info.php',
    params,'GET')
}


// 添加商品的注册函数

export function add(params){

    return ajax(BASE+'/goods-manage-dzIwMDEtZ3JvdXA1/goods-add.php',
    params,'POST')
}

