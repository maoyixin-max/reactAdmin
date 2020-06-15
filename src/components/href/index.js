import React from 'react';
import './index.css'

// 一个A标签的button标签，主要是解决写法不规范的问题


export default function Href(props){
    return <button {...props} className='ref'>退出登录</button>
}