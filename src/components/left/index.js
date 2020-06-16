import React, { Component } from 'react';
import {Link,withRouter} from 'react-router-dom'
import './index.css'


// 引入数据

import list from '../../utils/db'

// 引入antd
import { Menu} from 'antd';
import {
  
  PieChartOutlined,
  MailOutlined
  
 
} from '@ant-design/icons';
const { SubMenu } = Menu;







class Left extends Component {
  
    
 
  //用数据循环（map）生成左边导航栏，并使用递归调用生成二级菜单
  automatic= (list)=>{
   return list.map(itme  => {
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
    
    })

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