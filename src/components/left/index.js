import React, { Component } from 'react';
import {Link,withRouter} from 'react-router-dom'
import './index.css'


// 引入数据

import list from '../../utils/db'

// 导入保存的用户信息
import storeUtils from '../../utils/storeUtils'

// 引入antd
import { Menu} from 'antd';
import {
  
  PieChartOutlined,
  MailOutlined
  
 
} from '@ant-design/icons';
const { SubMenu } = Menu;







class Left extends Component {
  
      
    // 对当前用户进行判断并设置权限
    hasAuth=()=>{
      
      const username = storeUtils.user.account
      if(username  === 'mao6360'){
        return true
      }
      return false


    }

    
  //用数据循环（map）生成左边导航栏，并使用递归调用生成二级菜单
  automatic= (list)=>{ 
    
   return list.map(itme  => {
     
    // 定义一个对当前用户判断的方法并穿入itme
    if(this.hasAuth()){

      if(!itme.children){
        return (
          <Menu.Item key={itme.key} icon={<PieChartOutlined />}>
             <Link to={itme.key}> {itme.title}</Link>
            </Menu.Item>
        )
      }else{
       
        return(
          <SubMenu key={itme.key} icon={<MailOutlined />} title={itme.title}>
  
            {this.automatic(itme.children)}
  
          </SubMenu>
         
          
        )
      }
      
      }
      return true

    }

    
    )

  }


pu = ()=>{
    this.props.history.push('./home')
}



    render() {
      
      const path = this.props.location.pathname
        return (
            <div className='left'>
                <div className='left-logo'>
                    <h1 onClick={this.pu}>后台</h1>
                </div>
                <div style={{ width: 200 }}>
       
        <Menu
          defaultOpenKeys={[]}
          selectedKeys={[path]}
          mode="inline"
          theme="dark"
        >
    
        {this.automatic(list)}
      
          
        </Menu>
      </div>

            </div>
        );
    }
}

export default withRouter(Left);