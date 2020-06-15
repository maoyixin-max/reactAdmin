import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'

// 引入antd
import { Form, Input, Button,message} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';


// 引入登录接口函数
import {reqLogin} from '../../api/ajaxApi'

// 引入保存用户数据的工具模块
import storeUtils from '../../utils/storeUtils'
import storeUtilss from '../../utils/storeUtilss'

//导入CSS样式
import './login.css'








class login extends Component {

  lon = ()=>{
    this.props.history.push('/register')
  }

    onFinish = async (values) => {
      const {account,adminPwd} =values
      const params = new URLSearchParams()
      params.append('account',account)
      params.append('adminPwd',adminPwd)
      // 消灭回调
      const res = await reqLogin(params)
      //保存用户名字
      storeUtils.user = values
      // 保存到本地
      storeUtilss.saveUser(values)
   try{
    //  对登录成功或失败做判断
    if(res.data==='success'  && res.status===200){
      message.success('登录成功') 
      this.props.history.replace('/')
    }else{
      message.error('登录失败')
      console.log(res);
      
    }
   }catch(error){
    alert(error)
   }
   
      };

    render() {
      // 用户如果登陆过，就自动跳转到后台界面
      const user = storeUtils.user
      if(user&&user.account){
       return <Redirect to='/'/>
      }

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
        rules={[{ required: true, message: '请输入您的用户名' },
              
               ]}
                    >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                  </Form.Item>
                  <Form.Item
        name="adminPwd"
        rules={[{ required: true, message: '请输入您的密码' }]}
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
         <p className='re' onClick={this.lon}>没有账号去注册？</p>
                </div>
               
            </div>
        );
    }
}

export default login;