import React, { Component } from 'react';

// 引入antd
import { Form, Input, Button,message} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';


// 引入登录接口函数
import {reqLogin} from '../../api/ajaxApi'

import './login.css'

class login extends Component {

    onFinish = async (values) => {
      const {account,adminPwd} =values
      const params = new URLSearchParams()
      params.append('account',account)
      params.append('adminPwd',adminPwd)
      // 消灭回调
      const res = await reqLogin(params)
   try{
    //  对登录成功或失败做判断
    if(res.data==='success'  && res.status===200){
      message.success('登录成功') 
      this.props.history.replace('/admin')
    }else{
      message.error('登录失败')
      console.log(res);
      
    }
   }catch(error){
    alert(error)
   }
   
      };


    render() {
        return (
            <div className='login'>
                <div className='head'>
                    <h1>react的后台管理</h1>
                </div>
                <div className='content'>
                    <p>登陆</p>
                    <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
      onFinish={this.onFinish}
     
                     >
                   <Form.Item
        name="account"
        rules={[{ required: true, message: 'Please input your Username!' },
              
               ]}
                    >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                  </Form.Item>
                  <Form.Item
        name="adminPwd"
        rules={[{ required: true, message: 'Please input your Password!' }]}
                  >
                 <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
                />
              </Form.Item>
              <Form.Item>
                 <Button type="primary" htmlType="submit" className="login-form-button">
                   登陆
               </Button>
       
              </Form.Item>
         </Form>
                   
                </div>
               
            </div>
        );
    }
}

export default login;