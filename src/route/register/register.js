import React, { Component } from 'react';


// 引入antd
import { Form, Input, Button, message} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { PhoneOutlined  } from '@ant-design/icons';

// 引入接口函数
import {reqRegister} from '../../api/ajaxApi'

// 引入样式

import './register.css'


class register extends Component {

//    constructor(props){
//        super(props)
//    }
   
lon = ()=>{
  this.props.history.push('/login')
}
   
  onFinish = async (value)=>{
    const {account,nickname,adminPwd,tel} =value
  const params = new URLSearchParams()
  params.append('account',account)
  params.append('nickname',nickname)
  params.append('adminPwd',adminPwd)
  params.append('tel',tel)
 
  // 消灭回调函数
  
   const res = await reqRegister(params)
   try{

      //  对注册成功或失败做判断
    if(res.data==='用户名已经存在，请修改后重试！'){
      message.success('用户名已经存在，请修改后重试！')
    }else if(res.status===200){
     message.success('注册成功,请登录')
     this.props.history.push('/login')
    }else{
      message.error('注册失败')
    }
   }catch(error){
    alert(error)
   }

  

   

  }

 

    render() {
      
        return (
            <div className='register'>
                <div className='head'>
                    <h1>react的后台管理</h1>
                </div>
                <div className='content'>
                    <p>注册</p>
                    <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
      onFinish={this.onFinish}
     
                     >
       {/* 用户名 */}

                   <Form.Item
        name="account"
        rules={[{ required: true, message: 'Please input your Username!' },
              {min:4,message:'至少4位数'},
              {max:16,message:'最多16位数'},
              {pattern:/^[a-zA-Z0-9_]+$/,message:'用户名必须是数字,英文或者下划线组成'}
              
               ]}
                    >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="请输入您的英文名" />
                  </Form.Item>


{/* 称呼 */}

                  <Form.Item
        name="nickname"
        rules={[{ required: true, message: 'Please input your Username!' },
              
               ]}
                    >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="希望别人怎么称呼您" />
                  </Form.Item>


{/* 电话号码 */}

                  <Form.Item
        name="tel"
       
        rules={[{ required: true, message: 'Please input your phone number!' },
        {pattern:/^1[3456789]\d{9}$/,message:'请输入正确的手机格式'}
    ]}
      >
        <Input style={{ width: '100%' }}  prefix={<PhoneOutlined className="site-form-item-icon"/>} placeholder="请输入您的电话号码" />
      </Form.Item>



{/* 密码x */}
                  <Form.Item
        name="adminPwd"
        rules={[{ required: true, message: 'Please input your Password!' },
        {min:4,message:'至少4位数'},
              {max:16,message:'最多16位数'},
              {pattern:/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/,message:'密码中只能包含字母和数字'}

    ]}
                  >
                 <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="请输入您的密码"
         
                />
              </Form.Item>




{/* 再次输入密码 */}
              <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' },
        ({ getFieldValue }) => ({
            validator(rule, value) {
              if (!value || getFieldValue('adminPwd') === value) {
                return Promise.resolve();
              }
              return Promise.reject('密码输入不一致');
            },
          }),
    ]}
                  >
                 <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="请再次输入您的密码"
                />
              </Form.Item>


{/* 注册 */}

              <Form.Item>
                 <Button type="primary" htmlType="submit" className="login-form-button">
                   注册
               </Button>
       
              </Form.Item>
         </Form>

         <p className='re' onClick={this.lon}>已有账号去登录？</p>


      
          
                   
                </div>
               
            </div>
        );
    }
}

export default register;