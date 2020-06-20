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
export function goods(){

    return ajax(BASE+'/goods-manage-dzIwMDEtZ3JvdXA1/goods-info.php',
    'GET')
}


// 添加商品的入口函数

export function add(params){

    return ajax(BASE+'/goods-manage-dzIwMDEtZ3JvdXA1/goods-add.php',
    params,'POST')
}

// 修改数据的入口函数
export function update(params){

    return ajax(BASE+'/goods-manage-dzIwMDEtZ3JvdXA1/goods-update.php',
    params,'POST')
}

// 删除数据的入口函数
export function removedate(params){

    return ajax(BASE+'/goods-manage-dzIwMDEtZ3JvdXA1/goods-delete.php',
    params,'GET')
}

// 管理员数据的入口函数
export function adminDate(){

    return ajax(BASE+'/store_manager_info.php',
    'GET')
}

