import React, { Component } from 'react';
import {Redirect,Switch,Route} from 'react-router-dom'
 import './admin.css'
// 引入用户名
import  storeUtils  from '../../utils/storeUtils'

// 引入组件
import Left from '../../components/left'
import Hh from '../../components/hh'
import Home from '../home/Home'
import Goods from '../goods/Goods'
import Add from '../goods/Add'
import Tonch from '../touch/Touch'
import Parsonage from '../persomage/Parsonage'
import Bar from '../charts/Bar'
import Line from '../charts/Line'
import Pie  from '../charts/Pie'
import Remove from '../remove/Remove'



// 引入antd
import { Layout } from 'antd';

const { Footer, Sider, Content } = Layout;





class admin extends Component {

    
    render() {
        // 如果没有就表示没有登录
        const user = storeUtils.user.account
        if(!user){
            // 自动跳转到登录界面
            return <Redirect to='/login'/>
        }

        return (
            

        <Layout style={{height:'100%'}}>

            {/* 左部 */}
             <Sider >
                <Left></Left>
             </Sider>
           <Layout>


              {/* 头部 */}
          
              <Hh></Hh>
          


          {/* 中间 */}
          <Content className='admin-content'>
              <Switch>
                  <Route path = '/home' component={Home}/>
                  <Route path='/goods' exact  component={Goods} />
                  <Route path='/add' component={Add} />
                  <Route path='/touch' component={Tonch} />
                  <Route path='/parsonage' component={Parsonage} />
                  <Route path='/bar' component={Bar} />
                  <Route path='/line' component={Line} />
                  <Route path='/pie' component={Pie} />
                  <Route path='/remove' component={Remove} />
                  <Redirect to='/home'/>
              </Switch>
          </Content>

          
          {/* 尾部 */}
           <Footer className='foo'>本后台归作者所有，如侵权，必严惩</Footer>
          </Layout>
          
        </Layout>
     
    
         
          
        );
    }
}

export default admin;