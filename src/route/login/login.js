import React, { Component } from 'react';

// 引入antd
import { Form, Input, Button} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';


import './login.css'

class login extends Component {

    onFinish = values => {
        console.log( values);
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
        name="username"
        rules={[{ required: true, message: 'Please input your Username!' },
              
               ]}
                    >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                  </Form.Item>
                  <Form.Item
        name="password"
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