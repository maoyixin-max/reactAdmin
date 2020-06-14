//   引入store 库
import store from 'store'

  const UESR = 'userKey'
export default{
    // 持久化保存数据
    saveUser(user){
    //  localStorage.setItem(UESR ,JSON.stringify(user))
    store.set(UESR,user)
    },
   
    // 获取数据
    getUser(){
        // return JSON.parse(localStorage.getItem(UESR) || '{}')
      return  store.get(UESR) || {}
    },
   
    // 删除数据
    removeUser(){
        // localStorage.removeItem(UESR)
        store.remove(UESR)
    }

}

