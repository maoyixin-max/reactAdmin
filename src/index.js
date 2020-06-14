import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

// 引入数据保存到本地
import storeUtils from './utils/storeUtils'
import storeUtilss from './utils/storeUtilss'

// 保存数据到本地
const user = storeUtilss.getUser()
storeUtils.user = user


ReactDOM.render(
    <App></App>,
    document.querySelector('#root')

)


