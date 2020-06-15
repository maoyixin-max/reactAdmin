import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './index.css'
import logo from './images/logo.jpg'

// 引入antd
import { Menu} from 'antd';
import {
  AppstoreOutlined,
  
  PieChartOutlined,
 
  MailOutlined,
} from '@ant-design/icons';
const { SubMenu } = Menu;







class Left extends Component {
    
    
pu = ()=>{
    this.props.history.push('./home')
}



    render() {
        return (
            <div className='left'>
                <div className='left-logo'>
                    <img src={logo} alt=''></img>
                    <h1 onClick={this.pu}>后台</h1>
                </div>
                <div style={{ width: 200 }}>
       
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
        >
         {/* 管理首页 */}
         <Menu.Item key="1" icon={<PieChartOutlined />}>
           <Link to='/home'> 管理首页</Link>
          </Menu.Item>
         


          <SubMenu key="sub1" icon={<MailOutlined />} title="商品">

          {/* 库存信息管理 */}
            <Menu.Item key="6" icon={<MailOutlined />}>
              <Link to='/goods'>库存信息管理</Link>
              </Menu.Item>



              {/* 商品信息录用 */}
            <Menu.Item key="7" icon={<MailOutlined />}>
            <Link to='/add'>  商品信息录用</Link>
              </Menu.Item>


           {/* 联系管理员 */}
          </SubMenu>
          <Menu.Item key="3" icon={<AppstoreOutlined />}>
          <Link to='/touch'>联系管理员</Link>



          {/* 添加人物权限 */}
          </Menu.Item>
          <Menu.Item key="4" icon={<PieChartOutlined />}>
          <Link to='/parsonage'>添加人物权限</Link>



         {/* 图形    */}
          </Menu.Item>
          <SubMenu key="sub2" icon={<MailOutlined />} title="图形">


            {/* 柱状图 */}
            <Menu.Item key="8">
              <Link to='/bar'>柱状图</Link>
            </Menu.Item>

            {/* 折线图 */}
            <Menu.Item key="9">
             <Link to='/line'>折线图</Link>
              

             {/* 饼图 */}
              </Menu.Item>
            <Menu.Item key="10">
            <Link to='/pie'>饼图</Link>
            
            </Menu.Item>
           
            {/* 退出登录 */}
          </SubMenu>
          <Menu.Item key="5" icon={<PieChartOutlined />}>
            <Link to='/remove'>退出登录</Link>
          </Menu.Item>
          
        </Menu>
      </div>

            </div>
        );
    }
}

export default Left;